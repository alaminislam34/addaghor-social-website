"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  OTP_VERIFY,
  RESEND_OTP,
  SIGNIN_USER,
} from "../../../../api/apiEndPoint";
import { toast } from "react-toastify";

const VerifyOTP = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const contact = searchParams.get("contact");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    if (!contact) {
      toast.error("Contact information missing!");
      router.push("/register");
    }
  }, [contact, router]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0 || resendLoading) return;

    setResendLoading(true);
    try {
      const response = await fetch(RESEND_OTP, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: contact }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("A new OTP has been sent!");
        setTimer(60); // ওটিপি পাঠালে টাইমার আবার রিসেট হবে
        setOtp(new Array(6).fill("")); // ইনপুটগুলো খালি করে দেওয়া
        inputRefs.current[0]?.focus();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      toast.error("Please enter the full 6-digit code");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(OTP_VERIFY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: contact,
          otp: otpValue,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Account verified successfully!");
        if (result.accessToken) {
          localStorage.setItem("accessToken", result.accessToken);
        }
        router.push("/reg/set-profile");
      } else {
        toast.error(result.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error("Failed to verify OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-white dark:bg-white/3 border border-gray-200 dark:border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-white dark:to-gray-400">
          Verify OTP
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Enter the 6-digit code sent to <br />
          <span className="text-orange-500 font-medium">{contact}</span>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
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
