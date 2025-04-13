"use client";
import Link from 'next/link'
import React from 'react'


const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 w-full z-20 
    bg-white/5 backdrop-blur-md 
    shadow-lg border-b border-white/30 
    flex justify-between items-center px-6 py-3
  ">
    <Link href={'/'} className="text-2xl font-bold text-white">
      MyGlassNav
    </Link>
    <div className="space-x-4 text-white">
      <Link href={"/login"} className="font-bold  hover:scale-105 " >Login</Link>
      <Link href={"/login"} className="font-bold  hover:scale-105 " >Sign Up</Link>
    </div>
  </nav>
  
  )
}

export default Navbar
