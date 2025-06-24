import { THEME_KEY } from "@/config";

/**
 * Retrieves the current theme from localStorage.
 * @returns The stored theme ("light" or "dark") or null if not set.
 */
export function getTheme(): Theme | null {
  try {
    return (localStorage.getItem(THEME_KEY) as Theme | null) || null;
  } catch (error) {
    console.error("Failed to get theme from localStorage:", error);
    return null;
  }
}

/**
 * Persists the selected theme to localStorage.
 * @param theme - The theme to store ("light" or "dark").
 */
export function setTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error("Failed to set theme in localStorage:", error);
    throw new Error("Failed to persist theme");
  }
}

/**
 * Removes the stored theme from localStorage.
 */
export function removeTheme(): void {
  try {
    localStorage.removeItem(THEME_KEY);
  } catch (error) {
    console.error("Failed to remove theme from localStorage:", error);
    throw new Error("Failed to clear theme");
  }
}

// Add more localStorage utilities below
