"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "@/api/apiEndPoint";

/* ============== CONTEXT ================= */

const AuthContext = (createContext < AuthContextType) | (undefined > undefined);

/* ============== PROVIDER ================= */

export function AuthProvider({ children }) {
  const [user, setUser] = (useState < User) | (null > null);
  const [loading, setLoading] = useState(true);

  /* ---------- Load user on refresh ---------- */
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .get("", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        localStorage.removeItem("accessToken");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  /* ---------- Login ---------- */
  const login = (accessToken, userData) => {
    localStorage.setItem("accessToken", accessToken);
    setUser(userData);
  };

  /* ---------- Logout ---------- */
  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);

    axios.post(
      `${API_BASE_URL}/api/v1/auth/logout`,
      {},
      { withCredentials: true }
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* ============== HOOK ================= */

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
