import { envSchema } from "@/schema";

/**
 * Contains environment variables used throughout the application.
 * Validates and parses environment variables using Zod schema.
 *
 * @constant {Env} env - The environment configuration object.
 */

export const env = envSchema.parse({
  API_URL: process.env.NEXT_PUBLIC_API_URL,
});

// Add more environment variable parsing or validation below
