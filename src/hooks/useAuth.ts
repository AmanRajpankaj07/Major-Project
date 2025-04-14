// /hooks/useAuth.ts
import { useState, useEffect } from "react";
import { auth } from "../lib/firebase"; // Import Firebase auth
import { onAuthStateChanged, User } from "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  return { user };
};

export default useAuth;
