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

function SetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple Validation
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    if (formData.password.length < 6) {
      return toast.error("Password must be at least 6 characters!");
    }

    setLoading(true);

    // Mimicking API call
    setTimeout(() => {
      toast.success("Password reset successful! Please login.");
      router.push("/login");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-2xl w-full bg-white dark:bg-white/3 border border-gray-200 dark:border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-Primary/20 dark:shadow-Primary/10 p-6 md:p-10">
      <Link
        href={"/login/verify-otp"}
        className="text-gray-600 dark:text-gray-400 hover:text-orange-500 inline-block mb-4"
      >
        <ArrowLeft size={24} />
      </Link>

      <header className="text-center py-2 mb-6">
        <h1 className="text-4xl font-extrabold leading-normal text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-white dark:to-gray-400">
          Set your new password
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Please enter a strong password to secure your account.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <InputField
          label="New Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
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
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SetPassword;
