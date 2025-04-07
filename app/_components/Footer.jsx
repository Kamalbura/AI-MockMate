import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">AI-MockMate</h2>
            <p className="text-slate-400">Your AI interview assistant</p>
          </div>
          
          <div className="text-sm text-slate-400">
            <p>© {new Date().getFullYear()} AI-MockMate. All rights reserved.</p>
            <p>Built with Next.js and Gemini AI</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
