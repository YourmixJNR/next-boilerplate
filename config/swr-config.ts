"use client";
import type { SWRConfiguration } from "swr";
import axios from "axios";

/**
 * Custom fetcher function for SWR.
 * Uses Axios for HTTP requests and formats errors consistently.
 */
const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Format error consistently
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || error.message || "Request failed"
      );
    }
    throw new Error(error instanceof Error ? error.message : "Request failed");
  }
};

/**
 * Global SWR configuration object.
 * Controls fetcher, error handling, deduplication, and other SWR behaviors.
 */
export const swrConfig: SWRConfiguration = {
  fetcher,
  // Disable refetch on window focus
  revalidateOnFocus: false,
  // Disable automatic retries
  shouldRetryOnError: false,
  // Deduplicate requests for 2 seconds
  dedupingInterval: 2000,
  // Retry after 5 seconds (if retries enabled)
  errorRetryInterval: 5000,
  onError: (error) => {
    // Silent logging (no user-facing toasts)
    // console.error("SWR Error:", error);
    // Optional: Report to Sentry/LogRocket
    // captureException(error);
  },
  // Default to zero refresh for most queries
  refreshInterval: 0,
} as const;

// Add more SWR-related configuration or utilities below as needed.
