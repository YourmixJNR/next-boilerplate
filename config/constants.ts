export const AUTH = {
  ACCESS_TOKEN_KEY: "app_access_token",
  REFRESH_TOKEN_KEY: "app_refresh_token",
} as const;

export const COOKIE_CONFIG = {
  maxAge: 30 * 24 * 60 * 60, // 30 days
  path: "/",
  secure: process.env.NODE_ENV === "production",
} as const;

export const THEME_KEY = "theme" as const;
