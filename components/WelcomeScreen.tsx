import React from 'react';
import { CoreType } from '../types';

interface WelcomeScreenProps {
  onStart: (core: CoreType) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Branding */}
        <div className="bg-red-600 md:w-1/3 p-12 text-white flex flex-col justify-center items-center text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
             {/* Simple Logo Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">CompTIA A+</h1>
          <p className="text-red-100 uppercase tracking-widest text-sm font-semibold">Exam Simulator</p>
          <div className="mt-8 text-sm opacity-90">
            Based on the latest exam objectives (220-1201 & 220-1202)
          </div>
        </div>

        {/* Right Side: Selection */}
        <div className="md:w-2/3 p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Your Exam</h2>
          <p className="text-gray-500 mb-8">Choose the core you want to practice. The session simulates the real testing environment with a 90-minute timer.</p>

          <div className="space-y-4">
            <button
              onClick={() => onStart(CoreType.CORE_1)}
              className="group relative w-full flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-700">Core 1 (220-1201)</h3>
                <p className="text-sm text-gray-500 mt-1">Mobile Devices, Networking, Hardware, Virtualization, Troubleshooting</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-full group-hover:bg-red-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button
              onClick={() => onStart(CoreType.CORE_2)}
              className="group relative w-full flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-700">Core 2 (220-1202)</h3>
                <p className="text-sm text-gray-500 mt-1">OS, Security, Software Troubleshooting, Operational Procedures</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-full group-hover:bg-red-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          <div className="mt-8 text-xs text-gray-400 text-center">
            * This simulator generates random questions powered by Gemini AI.
          </div>
        </div>
      </div>
    </div>
  );
};