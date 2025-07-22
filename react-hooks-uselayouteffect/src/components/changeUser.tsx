"use client";

import { useLayoutEffect, useState } from "react";

const userIds = [1, 2];

const Button = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {title}
    </button>
  );
};

const ChangeAdmin = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(false);

  // This artificially slows down rendering
  const now = performance.now();
  while (performance.now() - now < 200) {}

  // main difference between useEffect and useLayoutEffect is useLayoutEffect is synchronous it is not asynchronous like use effect
  // which means that it's actually going to block the rendering of this component until it executes setIsAdmin code
  // but it hurt performance
  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId)!;
    setUserId(otherId);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Demo</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600 font-medium">User ID:</span>
            <span className="text-lg font-bold text-blue-600">{userId}</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="text-gray-600 font-medium">Admin Status:</span>
            <span
              className={`text-lg font-bold ${
                isAdmin ? "text-green-600" : "text-red-600"
              }`}
            >
              {isAdmin ? "Yes" : "No"}
            </span>
          </div>
        </div>

        <div className="text-center pt-4">
          <Button title="Change User" onClick={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default ChangeAdmin;
