import multer from "multer";
import mongoose from "mongoose";
import { connectDB, photoSchema } from "./utils";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  }),
}).single("file");

const Photo = mongoose.models.Photo || mongoose.model("Photo", photoSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const { location, description } = req.body;
      const newPhoto = new Photo({
        filePath: req.file.path,
        location,
        description,
      });

      await newPhoto.save();
      res
        .status(201)
        .json({ message: "File uploaded successfully", photo: newPhoto });
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
