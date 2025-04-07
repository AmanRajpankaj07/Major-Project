"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md z-50 shadow-md flex justify-between items-center p-4">
      <Link href="/" className="text-2xl font-bold bg-[linear-gradient(to_right,#C29226,#B27D0F,#D9B14A,#B27D0F,#C29226,#C7972B,#FADE7B)] bg-clip-text text-transparent">My-Project</Link>
      <div className="space-x-4">
        <Link href="/login" className="text-white hover:underline">Login</Link>
        <Link href="/signup" className="text-white hover:underline">Sign Up</Link>
      </div>
    </nav>
  );
}
