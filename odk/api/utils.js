import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const photoSchema = new mongoose.Schema({
  filePath: String,
  location: String,
  description: String,
  date: { type: Date, default: Date.now },
});
