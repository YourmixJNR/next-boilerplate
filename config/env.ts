import { Env } from "@/types";

/**
 * contains environment variables used throughout the application.
 *
 * @constant {Env} env - the environment configuration object.
 *
 */

const env: Env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/v1",
  CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
  CLOUDINARY_UPLOAD_PRESET:
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "",
} as const;

export default env;
