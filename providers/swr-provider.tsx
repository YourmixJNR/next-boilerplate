"use client";
import { SWRConfig } from "swr";
import { swrConfig } from "@/config/";

/**
 * provides global SWR configuration to the app.
 */

export function SWRProvider({ children }: { children: React.ReactNode }) {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}
