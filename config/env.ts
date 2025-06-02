import { Env } from "@/types";

const env: Env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/v1",
  CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
  CLOUDINARY_UPLOAD_PRESET:
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "",
};

export default env;
