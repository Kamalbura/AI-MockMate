"use client";
import React from 'react';
import { Button } from '../../components/ui/button';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { isSignedIn, signOut, userName } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/login');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-slate-800">AI-MockMate</h1>
        </Link>
        
        <div className="flex items-center gap-4">
          {isSignedIn && (
            <span className="text-slate-600">
              Welcome, {userName}
            </span>
          )}
          
          {isSignedIn ? (
            <>
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button 
                onClick={handleSignOut}
                variant="ghost"
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
