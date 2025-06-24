"use client";
import { getTheme, setTheme } from "@/lib/storage/local-storage";
import React, { createContext, useEffect, useState } from "react";

export interface ThemeContextType {
  currentTheme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = getTheme();
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setCurrentTheme(storedTheme || systemPreference);
  }, []);

  useEffect(() => {
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(currentTheme);
  }, [currentTheme]);

  //  toggles between light and dark themes.
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
