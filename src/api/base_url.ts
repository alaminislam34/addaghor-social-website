import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const baseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Refresh process track korar jonno variable
let refreshPromise: Promise<string | null> | null = null;

baseApi.interceptors.request.use(
  async (config) => {
    let accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    // 1. Jodi token na thake, login-e pathan (Loop protection)
    if (!accessToken && !refreshToken) {
      // Logic for redirect if needed, but don't loop
      return config;
    }

    // 2. Token expired ki na check kora
    const isExpired = (token: string) => {
      try {
        const { exp } = jwtDecode<{ exp: number }>(token);
        return Date.now() >= exp * 1000 - 10000; // 10s buffer
      } catch {
        return true;
      }
    };

    if (accessToken && isExpired(accessToken)) {
      // 3. Jodi refresh cholte thake, oitar jonno wait korbe (Single Request)
      if (!refreshPromise) {
        refreshPromise = (async () => {
          try {
            const res = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
              {
                refresh: refreshToken,
              }
            );
            const { access } = res.data;
            Cookies.set("accessToken", access);
            return access;
          } catch (err) {
            // 4. JODI REFRESH FAIL KORE (User deleted or token invalid)
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            refreshPromise = null;

            // Redirect logic (Only once)
            if (
              typeof window !== "undefined" &&
              window.location.pathname !== "/login"
            ) {
              window.location.href = "/login";
            }
            return null;
          } finally {
            refreshPromise = null;
          }
        })();
      }

      const newToken = await refreshPromise;
      if (newToken) {
        config.headers["Authorization"] = `Bearer ${newToken}`;
      }
    } else if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default baseApi;
