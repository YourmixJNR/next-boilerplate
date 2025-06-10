import { THEME_KEY } from "@/config";

export function getTheme(): Theme | null {
  try {
    return (localStorage.getItem(THEME_KEY) as Theme | null) || null;
  } catch (error) {
    console.error("Failed to get theme from localStorage:", error);
    return null;
  }
}

export function setTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.error("Failed to set theme in localStorage:", error);
    throw new Error("Failed to persist theme");
  }
}

export function removeTheme(): void {
  try {
    localStorage.removeItem(THEME_KEY);
  } catch (error) {
    console.error("Failed to remove theme from localStorage:", error);
    throw new Error("Failed to clear theme");
  }
}
