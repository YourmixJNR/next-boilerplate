import { envSchema } from "@/schema";

/**
 * contains environment variables used throughout the application.
 *
 * @constant {Env} env - the environment configuration object.
 *
 */

export const env = envSchema.parse({
  API_URL: process.env.NEXT_PUBLIC_API_URL,
});
