"use client";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [name, setName] = useState("");
  const { signIn } = useAuth();
  const router = useRouter();
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim()) {
      signIn(name);
      router.push("/dashboard");
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900">
            AI-MockMate
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your AI-powered interview preparation assistant
          </p>
        </div>
        
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name to continue"
              required
              className="mt-1"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-700"
          >
            Start Using AI-MockMate
          </Button>
          
          <p className="text-sm text-center text-gray-500">
            No account needed, just enter your name to get started.
          </p>
        </form>
      </div>
    </div>
  );
}
