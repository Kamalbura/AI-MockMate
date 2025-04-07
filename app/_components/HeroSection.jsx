import React from 'react';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Ace Your Next Interview with AI-Powered Practice
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Practice job interviews with customized questions based on your role and experience. 
          Get real-time feedback and improve your interview skills.
        </p>
        <Link href="/login">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-md">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
