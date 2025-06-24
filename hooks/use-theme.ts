import { useContext } from "react";
import { ThemeContext } from "@/providers";

/**
 * Custom hook to access the theme context.
 * Throws an error if used outside of a ThemeProvider.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
