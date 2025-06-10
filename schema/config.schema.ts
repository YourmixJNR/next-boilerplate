import { z } from "zod";

export  const envSchema = z.object({
  API_URL: z.string().url().default("http://localhost:3000/v1"),
  CLOUDINARY_CLOUD_NAME: z.string().min(1),
  CLOUDINARY_UPLOAD_PRESET: z.string().min(1),
});

export type Env = z.infer<typeof envSchema>;
