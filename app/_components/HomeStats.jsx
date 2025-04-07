import React from 'react';

export default function HomeStats() {
  return (
    <div className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">Create Interview</h3>
            <p className="text-gray-600">Enter your job details including position, description, and experience level.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Practice Interview</h3>
            <p className="text-gray-600">Answer AI-generated interview questions tailored to your job profile using your webcam.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">Get Feedback</h3>
            <p className="text-gray-600">Receive detailed feedback and suggestions to improve your interview performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
