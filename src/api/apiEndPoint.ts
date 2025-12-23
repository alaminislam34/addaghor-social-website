// src/api/apiEndpoints.js

import baseApi from "./base_url";

export const REGISTER_USER = (data: any) =>
  baseApi.post("/api/v1/auth/signup", data);
export const OTP_VERIFY = (data: any) =>
  baseApi.post("/api/v1/auth/verify-otp", data);
export const SIGNIN_USER = (data: any) =>
  baseApi.post("/api/v1/auth/signin", data);
export const LOGOUT = () => baseApi.post("/api/v1/auth/logout");
export const TOKEN_REFRESH = () => baseApi.post("/api/v1/auth/refresh-token");
export const RESENT_OTP = (data: any) =>
  baseApi.post("/api/v1/auth/resend-otp", data);

export const UPDATE_PROFILE = (data: any) =>
  baseApi.put("/api/v1/users/update-profile", data);
export const GET_USER = () => baseApi.get("/api/v1/users/me");
export const REFRESH_TOKEN = "http://localhost:5000/api/v1/auth/refresh-token";

// Password Reset
const PASSWORD_RESET_REQUEST = "/api/password-reset/request/";
const PASSWORD_RESET_VERIFY = "/api/password-reset/verify/";

// otp request
const OTP_REQUEST = "/api/login/otp/request/";
// const OTP_VERIFY = "/api/login/otp/verify/";

// Admin Metrics
const ADMIN_TOTAL_USERS = "/api/admin/total-users/";
const ADMIN_TOTAL_BOTS = "/api/admin/total-bots/";
const ALL_BOTS_DATA = "/api/all-data/";

export const allEndPoints = {
  REGISTER_USER,
  OTP_VERIFY,
  SIGNIN_USER,
  LOGOUT,
  TOKEN_REFRESH,
  RESENT_OTP
};
