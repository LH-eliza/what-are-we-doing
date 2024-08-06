import mongoose from "mongoose";
import { connectDB, photoSchema } from "./utils";

const Photo = mongoose.models.Photo || mongoose.model("Photo", photoSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const photos = await Photo.find({});
    res.status(200).json(photos);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
