"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Counter</h1>
          <p className="text-gray-600">Click the buttons to change the count</p>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg mb-4">
            <span className="text-4xl font-bold text-white">{count}</span>
          </div>
          <p className="text-sm text-gray-500">Current Count</p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="flex items-center justify-center w-14 h-14 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-200"
          >
            <Minus className="w-6 h-6" />
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setCount(0)}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
