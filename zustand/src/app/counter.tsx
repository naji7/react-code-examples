"use client";

import { useEffect } from "react";
import { useCounterStore } from "./store";

// we can actually use this outside of a component and access it directly in just any random function
const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count : ", count);
};

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

export const Counter = ({ count }: { count: number }) => {
  // 1. Best practices : whenever you accessing piece of state, always want to try to be as specific as possible and only access the thing that you need
  //    don't do like this : const {count} = useCounterStore((state) => state); this would actually be less performance
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount();
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Counter</h2>
          <p className="text-gray-600">Click the buttons to change the value</p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold">{count}</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
              Decrement
            </span>
          </button>

          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Increment
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
