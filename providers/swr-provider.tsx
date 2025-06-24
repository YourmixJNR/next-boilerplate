"use client";
import { SWRConfig } from "swr";
import { swrConfig } from "@/config/";

/**
 * Provides global SWR configuration to the app.
 * Wrap your application with this provider to enable shared SWR settings.
 */

export function SWRProvider({ children }: { children: React.ReactNode }) {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}
