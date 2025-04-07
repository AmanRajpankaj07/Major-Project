"use client";

import { useState } from "react";

export default function SignupPage() {
  const [role, setRole] = useState("student");

  return (
    <main className="flex justify-center items-center min-h-screen bg-glitter">
      <div className="p-6 rounded-xl shadow-lg bg-[#102D53] w-[350px]">
        <h2 className="text-2xl font-bold mb-4 text-center bg-[linear-gradient(to_right,#C29226,#B27D0F,#D9B14A,#B27D0F,#C29226,#C7972B,#FADE7B)] bg-clip-text text-transparent">Sign Up</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded text-gray-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded text-gray-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded text-gray-400"
            required
          />

          {/* Role Selector */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-600">Role:</label>
            <select
              className="w-full p-2 border rounded text-gray-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="student">Student</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}