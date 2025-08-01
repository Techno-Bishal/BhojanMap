import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

const uploadImageOnCloudinary = (file: Express.Multer.File) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "restaurant-app" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result?.secure_url);
      }
    );

    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
};
