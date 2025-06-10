import { envSchema } from "@/schema";

/**
 * contains environment variables used throughout the application.
 *
 * @constant {Env} env - the environment configuration object.
 *
 */

const env = envSchema.parse({
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
});

export default env;
