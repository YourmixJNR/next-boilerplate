import { THEME_KEY } from "@/config";

export function getStoredTheme(): Theme | null {
  return (localStorage.getItem(THEME_KEY) as Theme | null) || null;
}

export function setStoredTheme(theme: Theme) {
  localStorage.setItem(THEME_KEY, theme);
}
