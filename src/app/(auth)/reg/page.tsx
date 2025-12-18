"use client";

import React, { useState, useEffect } from "react";

type InputProps = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
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

function Register() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    gender: "",
    dob: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-2xl w-full bg-white dark:bg-white/3 border border-gray-200 dark:border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-Primary/20 dark:shadow-Primary/10 p-6 md:p-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-white dark:to-gray-400 ">
          AddaGhor
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Create your account to get started
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
      >
        {/* Row 1: Full Name & Username */}
        <InputField
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
        />
        <InputField
          label="Username"
          name="username"
          type="text"
          placeholder="johndoe_123"
          value={formData.username}
          onChange={handleChange}
        />

        {/* Row 2: Gender & DOB */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full py-2.5 px-4 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm text-gray-700 dark:text-gray-300"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <InputField
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
        />

        {/* Row 3: Email (Full Width) */}
        <InputField
          label="Email or Phone"
          name="contact"
          type="text"
          placeholder="email@example.com"
          value={formData.contact}
          onChange={handleChange}
          className="md:col-span-2"
        />

        {/* Row 4: Password & Confirm Password */}
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {/* Row 5: Register Button (Full Width) */}
        <div className="md:col-span-2 pt-4">
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-Primary text-white font-bold rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-Primary/20"
          >
            Create Account
          </button>
        </div>
      </form>

      <div className="mt-8 text-center text-sm text-gray-500">
        Already have an account?
        <a
          href="/login"
          className="text-Primary dark:text-orange-400 font-medium hover:underline px-1"
        >
          Log in
        </a>
        <div className="mt-4">
          By signing up, you agree to our
          <span className="text-Primary dark:text-orange-400 cursor-pointer hover:underline px-1">
            Terms
          </span>
          and
          <span className="text-Primary dark:text-orange-400 cursor-pointer hover:underline px-1">
            Privacy Policy
          </span>
          .
        </div>
      </div>
    </div>
  );
}

export default Register;
