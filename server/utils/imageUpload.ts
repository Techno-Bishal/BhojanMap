import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

const uploadImageOnCloudinary = (file: Express.Multer.File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'restaurant-app' },
      (error, result) => {
        if (error) return reject(error);
        resolve(result?.secure_url || '');
      }
    );
    streamifier.createReadStream(file.buffer).pipe(stream);
  });
};

export default uploadImageOnCloudinary;
