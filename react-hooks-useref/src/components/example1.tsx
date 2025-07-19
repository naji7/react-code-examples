"use client";

import { useRef, useState } from "react";

export default function ExampleOne() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    // ref will allow you to make updates and to read the updated value instantly without waiting for a re-render
    // (useState is wait for re-render)
    console.log("State:", count); // 1st time this will 0
    console.log("Ref:", countRef.current); // this will 1
  };

  return (
    <div className="tutorial">
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
