import { z } from "zod";

// Schema for validating environment variables
export const envSchema = z.object({
  API_URL: z.string().url().default("http://localhost:3000/v1"),
});

/**
 * Type representing the validated environment variables.
 */
export type Env = z.infer<typeof envSchema>;

// Add more configuration-related schemas below as needed.