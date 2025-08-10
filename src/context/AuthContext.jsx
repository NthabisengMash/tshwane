// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  
  // Sign up function
  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //Login function
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  
   // Logout function
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
    return useContext(AuthContext);
  }
