"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { GET_USER, REFRESH_TOKEN } from "@/api/apiEndPoint";

/* ================= CONTEXT ================= */

const AuthContext = createContext();

/* ================= PROVIDER ================= */

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------- Fetch current user ---------- */
  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await GET_USER(); // baseApi ekhon auto token refresh handle korbe
      setUser(res.data.user);
    } catch (err) {
      console.log("User fetch failed, handled by interceptor");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- On page refresh ---------- */
  useEffect(() => {
    fetchUser();
  }, []);

  /* ---------- Refetch user manually ---------- */
  const refetchUser = async () => {
    setLoading(true);
    await fetchUser();
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,

    refetchUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/* ================= CUSTOM HOOK ================= */

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
