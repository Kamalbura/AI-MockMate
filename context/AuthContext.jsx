"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on component mount
  useEffect(() => {
    const storedName = Cookies.get('userName');
    
    if (storedName) {
      setUserName(storedName);
      setIsSignedIn(true);
    }
    
    setIsLoading(false);
  }, []);

  // Simple login function - just save the name
  const signIn = (name) => {
    setUserName(name);
    setIsSignedIn(true);
    Cookies.set('userName', name, { expires: 7 }); // 7 day expiry
  };

  // Simple logout function
  const signOut = () => {
    setUserName("");
    setIsSignedIn(false);
    Cookies.remove('userName');
  };

  // Create a user object that matches the expected structure in components
  const user = isSignedIn ? {
    id: "user-" + Date.now(),
    fullName: userName,
    primaryEmailAddress: {
      emailAddress: `${userName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
    }
  } : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        userName,
        isSignedIn,
        isLoading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
