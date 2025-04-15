// /app/login/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // To handle navigation
import AuthForm from "../../components/AuthForm"; // Import the AuthForm component
import useAuth from "../../hooks/useAuth"; // Import useAuth hook

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const { user } = useAuth(); // Using the useAuth hook to get the current user
  const router = useRouter(); // Router to redirect after login/signup

  useEffect(() => {
    // If a user is already logged in, redirect them to the dashboard
    if (user) {
      router.push("/home"); // Replace "/dashboard/student" with the actual route for your dashboard
    }
  }, [user, router]); // This effect runs when the user state changes

  return (
    <div className="min-h-screen w-full bg-black bg-neon-particles flex items-center justify-center">
      <div className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden flex w-[90%] max-w-4xl">
        <div className="w-1/2 bg-gradient-to-br from-black to-white hidden md:flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-bold text-white">Welcome!</h2>
          <button
            className="mt-6 px-6 py-2 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-yellow-100 transition"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-6">{isLogin ? "Login" : "Create an Account"}</h2>
          <AuthForm isLogin={isLogin} onToggleForm={() => setIsLogin(!isLogin)} />
        </div>
      </div>
    </div>
  );
}
