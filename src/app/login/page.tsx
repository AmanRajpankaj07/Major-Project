"use client";
import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-full bg-neon-particles flex items-center justify-center">
      <div className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden flex w-[90%] max-w-4xl">
        {/* Image/Side Banner */}
        <div className="w-1/2 bg-gradient-to-br from-black to-white hidden md:flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold text-white">Welcome!</h2>
          <p className="text-white mt-4 text-center px-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            className="mt-6 px-6 py-2 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-yellow-100 transition"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>

        {/* Form Area */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-6">
            {isLogin ? "Login" : "Create an Account"}
          </h2>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your username"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition font-semibold"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


