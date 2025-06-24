import { z } from "zod";

// schema for validating environment variables
export const envSchema = z.object({
  API_URL: z.string().url().default("http://localhost:3000/v1"),
});

export type Env = z.infer<typeof envSchema>;
