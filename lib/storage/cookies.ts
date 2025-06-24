import { setCookie, parseCookies, destroyCookie } from "nookies";
import { AUTH, COOKIE_CONFIG } from "@/config";

const { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } = AUTH;

export const setAuthTokens = (accessToken: string, refreshToken: string) => {
  try {
    setCookie(null, ACCESS_TOKEN_KEY, accessToken, COOKIE_CONFIG);
    setCookie(null, REFRESH_TOKEN_KEY, refreshToken, COOKIE_CONFIG);
  } catch (error) {
    console.error("Auth token set failed:", error);
    throw new Error("Failed to set auth tokens");
  }
};

export const getAccessToken = () => {
  try {
    const cookies = parseCookies();
    return cookies[ACCESS_TOKEN_KEY] || null;
  } catch (error) {
    console.error("Failed to get access token:", error);
    return null;
  }
};

export const getRefreshToken = () => {
  try {
    const cookies = parseCookies();
    return cookies[REFRESH_TOKEN_KEY] || null;
  } catch (error) {
    console.error("Failed to get refresh token:", error);
    return null;
  }
};

export const removeAuthTokens = () => {
  try {
    destroyCookie(null, ACCESS_TOKEN_KEY, { path: COOKIE_CONFIG.path });
    destroyCookie(null, REFRESH_TOKEN_KEY, { path: COOKIE_CONFIG.path });
  } catch (error) {
    console.error("Failed to remove auth tokens:", error);
    throw new Error("Failed to remove auth tokens");
  }
};
