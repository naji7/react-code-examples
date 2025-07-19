// use transition always going to return to two things is pending and start transition

import Demo from "@/components/demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            React Transition Demo
          </h1>
          <Demo />
        </div>
      </div>
    </div>
  );
}
