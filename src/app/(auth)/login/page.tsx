"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { SIGNIN_USER } from "@/api/apiEndPoint";
import axios from "axios";

// --- Types ---
type InputProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
};

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = true,
  className = "",
}: InputProps) => (
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

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        SIGNIN_USER,
        {
          identifier: formData.identifier,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      const result = await response.data;
      console.log(result);
      if (result.success) {
        toast.success("Login Successful!");

        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("refreshToken", result.refreshToken);
        setTimeout(() => {
          router.push("/");
        }, 1000);
        router.refresh();
      } else {
        if (result.message === "Account not verified!") {
          toast.info("Please verify your account first.");
          router.push(`/verify-otp?contact=${formData.identifier}`);
        } else {
          toast.error(result.message || "Invalid credentials");
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Internal Server Error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl w-full bg-white dark:bg-white/3 border border-gray-200 dark:border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-Primary/20 dark:shadow-Primary/10 p-6 md:p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-white dark:to-gray-400">
          AddaGhor
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Welcome back! Please login.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <InputField
          label="Email or Phone"
          name="identifier"
          type="text"
          placeholder="example@mail.com"
          value={formData.identifier}
          onChange={handleChange}
        />

        <div>
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="flex justify-end mt-2">
            <button
              type="button"
              className="text-xs text-orange-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3.5 px-6 ${
            loading ? "bg-gray-400" : "bg-orange-500 hover:opacity-90"
          } text-white font-bold rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-orange-500/20 mt-2`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link
            href={"/reg"}
            className="text-orange-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
