"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = true,
  className = "",
}) => (
  <div className={`flex flex-col gap-1.5 w-full ${className}`}>
    <label
      htmlFor={name}
      className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full py-2.5 px-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg 
                 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent 
                 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm"
    />
  </div>
);

function VerifyOTP() {
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Fake Delay to simulate API call
    setTimeout(() => {
      if (otp.length > 0) {
        toast.success("OTP Verified Successfully!");
        router.push("/login/set-password");
      } else {
        toast.error("Please enter a valid OTP");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl w-full bg-white dark:bg-white/3 border border-gray-200 dark:border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-Primary/20 dark:shadow-Primary/10 p-6 md:p-10">
      <Link
        href={"/login/forgot-pass"}
        className="text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors inline-block"
      >
        <ArrowLeft size={24} />
      </Link>

      <header className="text-center py-2 my-6">
        <h1 className="text-4xl font-extrabold leading-normal text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-white dark:to-gray-400">
          Verify OTP
        </h1>
        <p className="text-gray-400 py-2">
          We sent a code to your email, please check!
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <InputField
          label="OTP Code"
          name="otp"
          type="text"
          placeholder="Enter your 6-digit OTP"
          value={otp}
          onChange={(v) => setOTP(v.target.value)}
        />

        <div className="flex items-center gap-6">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 px-6 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:opacity-90"
            } text-white font-bold rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-orange-500/20 mt-2`}
          >
            {loading ? "Verifying..." : "Verify Now"}
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Didn't receive code?{" "}
          <button
            type="button"
            className="text-orange-500 hover:underline font-medium"
          >
            Resend OTP
          </button>
        </p>
      </form>
    </div>
  );
}

export default VerifyOTP;
