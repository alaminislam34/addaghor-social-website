// src/api/apiEndpoints.js

const baseApi = "http://localhost:5000";

// Profile and Auth
export const REGISTER_USER = `${baseApi}/api/v1/auth/signup`;
export const OTP_VERIFY = `${baseApi}/api/v1/auth/verify-otp`;
export const SIGNIN_USER = `${baseApi}/api/v1/auth/signin`;
export const LOGOUT = `${baseApi}/api/v1/auth/logout`;
export const TOKEN_REFRESH = `${baseApi}/api/v1/auth/refresh-token`;
export const RESEND_OTP = `${baseApi}/api/v1/auth/resend-otp`;
export const UPDATE_PROFILE = `${baseApi}/api/v1/users/update-profile`;

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
};
