"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

/**
 * VerifyOTP Component
 * Registration-er por OTP verify korar jonno bebohar kora hobe.
 */
const VerifyOTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const contact = searchParams.get("contact") || "your email/phone";

  // --- Timer Logic ---
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  // --- Initial Focus ---
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // --- Input Change Handler ---
  const handleChange = (element, index) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Auto focus next input
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // --- Backspace Key Handler ---
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // --- Resend OTP Handler (Fake API) ---
  const handleResendOTP = () => {
    if (timer > 0 || resendLoading) return;

    setResendLoading(true);

    // Mocking API call
    setTimeout(() => {
      toast.success("A new OTP has been sent!");
      setTimer(60);
      setOtp(new Array(6).fill(""));
      setResendLoading(false);
      inputRefs.current[0]?.focus();
    }, 1200);
  };

  // --- Form Submission (Fake API) ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length < 6) {
      toast.error("Please enter the full 6-digit code");
      return;
    }

    setLoading(true);

    // Mocking OTP Verification API
    setTimeout(() => {
      console.log("Verified OTP:", otpValue);
      toast.success("Account verified successfully!");

      // Redirect to profile setup
      router.push("/reg/set-profile");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-md w-full bg-white dark:bg-white/3 border border-gray-200 dark:border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-white dark:to-gray-400">
          Verify OTP
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          Enter the 6-digit code sent to <br />
          <span className="text-orange-500 font-medium">{contact}</span>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-2 md:gap-4">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-12 md:w-12 md:h-14 text-center text-xl font-bold bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all"
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3.5 px-6 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 active:scale-[0.98]"
          } text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20`}
        >
          {loading ? "Verifying..." : "Verify & Continue"}
        </button>
      </form>

      {/* Resend Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Didn't receive the code?{" "}
        {timer > 0 ? (
          <span className="text-gray-400 font-medium ml-1">
            Resend in {timer}s
          </span>
        ) : (
          <button
            onClick={handleResendOTP}
            disabled={resendLoading}
            type="button"
            className="text-orange-500 dark:text-orange-400 font-medium hover:underline px-1 disabled:opacity-50"
          >
            {resendLoading ? "Sending..." : "Resend OTP"}
          </button>
        )}
      </div>
    </div>
  );
};

export default VerifyOTP;
