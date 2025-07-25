// server/utils/uploadImage.ts मा
import { v2 as cloudinary } from 'cloudinary';

 const uploadImageOnCloudinary = async (file: Express.Multer.File) => {
  const result = await cloudinary.uploader.upload(
    `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,
    { folder: 'restaurant-app' }
  );
  return result.secure_url;
};

export default uploadImageOnCloudinary