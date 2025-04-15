



'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 
    bg-white/5 backdrop-blur-md 
    shadow-lg border-b border-white/30 
    flex justify-between items-center px-6 py-3
  ">
      <Link href={'/'} className="text-2xl font-bold text-white">
      MyGlassNav
    </Link>

      <div className="flex gap-4 items-center text-white">
        {!user ? (
          <>
            <Link href="/home" className="hover:underline font-bold  hover:scale-105">Explore</Link>
            
            <Link href="/login" className="hover:underline font-bold  hover:scale-105">Signup</Link>
          </>
        ) : (
          <>
            <Link href="/contest" className=" hover:underline font-bold  hover:scale-105">Contest</Link>
            <button onClick={handleLogout} className="hover:underline font-bold  hover:scale-105">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


