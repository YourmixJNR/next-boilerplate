"use client";
import type { SWRConfiguration } from "swr";
import axios from "axios";

// custom fetcher with error formatting
const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // format error consistently
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || error.message || "Request failed"
      );
    }
    throw new Error(error instanceof Error ? error.message : "Request failed");
  }
};

export const swrConfig: SWRConfiguration = {
  fetcher,
  // disable refetch on window focus
  revalidateOnFocus: false,
  // disable automatic retries
  shouldRetryOnError: false,
  // deduplicate requests for 2s
  dedupingInterval: 2000,
  // retry after 5s (if retries enabled)
  errorRetryInterval: 5000,
  onError: (error) => {
    // Silent logging (no user-facing toasts)
    console.error("SWR Error:", error);

    // Optional: Report to Sentry/LogRocket
    // captureException(error);
  },
  // default to zero refresh for most queries
  refreshInterval: 0,
} as const;
