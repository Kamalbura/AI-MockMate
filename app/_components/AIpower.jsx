import React from 'react';

export default function AIPower() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powered by AI Technology</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Smart Interview Questions</h3>
            <p className="text-gray-600 mb-6">
              Our AI analyzes your job position, description, and experience to generate 
              relevant and challenging interview questions that match what you might 
              face in a real interview.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Intelligent Feedback</h3>
            <p className="text-gray-600">
              Get personalized feedback on your answers, helping you identify areas 
              of improvement and providing actionable suggestions to enhance your 
              interview skills.
            </p>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-4">Technologies Used</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium">Gemini AI</p>
                  <p className="text-sm text-gray-500">Question Generation</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium">Next.js</p>
                  <p className="text-sm text-gray-500">Framework</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium">Drizzle ORM</p>
                  <p className="text-sm text-gray-500">Database</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <p className="font-medium">Web Speech API</p>
                  <p className="text-sm text-gray-500">Speech Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
