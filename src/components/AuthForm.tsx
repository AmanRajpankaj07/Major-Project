import React, { useState } from "react";
import { auth } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

type AuthFormProps = {
  isLogin: boolean;
  onToggleForm: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onToggleForm }) => {
  const [username, setUsername] = useState<string>(""); // For sign-up only
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        // Optionally redirect here
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        // Optionally store username in database
        // Optionally redirect here
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

      {/* Username field only for Sign Up */}
      {!isLogin && (
        <div>
          <label className="block text-sm font-semibold">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your username"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

      <p className="text-center text-sm mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          type="button"
          onClick={onToggleForm}
          className="text-blue-500 ml-1"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </form>
  );
};

export default AuthForm;
