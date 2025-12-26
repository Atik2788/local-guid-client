/* eslint-disable @typescript-eslint/no-explicit-any */
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinaryUpload } from './cloudinary.config';

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: async (req: any, file: any) => {
    const fileName = file.originalname
      .toLowerCase()
      .replace(/\s+/g, '-') 
      .replace(/\./g, '-')
      // eslint-disable-next-line no-useless-escape
      .replace(/[^a-z0-9\-\.]/g, '');

    const extension = file.originalname.split('.').pop();

    const uniqueFileName =
      Math.random().toString(36).substring(2) +
      '-' +
      Date.now() +
      '-' +
      fileName +
      '.' +
      extension;

    return {
      public_id: uniqueFileName,
      folder: 'pdf',  
    };
  },
});

export const multerUpload = multer({ storage });
