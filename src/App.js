import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="flex flex-wrap bg-gray-200 h-screen items-center justify-center">
      <div className="flex-1 max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
        <img
          className="w-full"
          src="/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Code Workshop React Starter
          </div>
          <p className="text-gray-700 text-base">
            This placeholder is a react starter with preconfigured TailwindCSS
            for fast styles.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Code Workshop
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #TailwindCSS
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
