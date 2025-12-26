/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "multer-storage-cloudinary" {
  import { StorageEngine } from "multer";
  import { v2 as cloudinary } from "cloudinary";

  interface CloudinaryStorageOptions {
    cloudinary: typeof cloudinary;
    params?:
      | Record<string, any>
      | ((req: any, file: Express.Multer.File) => Record<string, any> | Promise<Record<string, any>>);
  }

  export class CloudinaryStorage implements StorageEngine {
    constructor(options: CloudinaryStorageOptions);
_handleFile(
  req: any,
  file: Express.Multer.File,
  cb: (error?: any, info?: Partial<Express.Multer.File>) => void
): void;

_removeFile(
  req: any,
  file: Express.Multer.File,
  cb: (error: Error | null) => void
): void;
  }
}
