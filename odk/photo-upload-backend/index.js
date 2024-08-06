const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors"); // Add this line

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors()); // Add this line

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/photoUpload", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for photos
const photoSchema = new mongoose.Schema({
  filePath: String,
  location: String,
  description: String,
  date: { type: Date, default: Date.now },
});

const Photo = mongoose.model("Photo", photoSchema);

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Middleware to parse JSON bodies
app.use(express.json());

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Route to handle file upload
app.post("/upload", upload.single("file"), async (req, res) => {
  const { location, description } = req.body;
  const newPhoto = new Photo({
    filePath: req.file.path,
    location,
    description,
  });

  await newPhoto.save();
  res.json({ message: "File uploaded successfully", photo: newPhoto });
});

// Route to get photos by date
app.get("/photos", async (req, res) => {
  const photos = await Photo.find({});
  res.json(photos);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
