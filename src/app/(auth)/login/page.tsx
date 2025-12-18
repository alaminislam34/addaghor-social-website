"use client";

import { useState } from "react";

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

// --- Sub-component: InputField ---
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
                 text-gray-900 dark:text-white focus:ring-2 focus:ring-Primary focus:border-transparent 
                 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm"
    />
  </div>
);

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "", 
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
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
        {/* Identifier Field */}
        <InputField
          label="Email or Phone"
          name="identifier"
          type="text"
          placeholder="example@mail.com"
          value={formData.identifier}
          onChange={handleChange}
        />

        {/* Password Field */}
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
              className="text-xs text-Primary hover:underline"
            >
              Forgot Password?
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-Primary hover:opacity-90 text-white font-bold rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-Primary/20 mt-2"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Don't have an account?{" "}
          <button
            type="button"
            className="text-Primary font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
