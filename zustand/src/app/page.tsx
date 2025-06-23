"use client";

import { Counter } from "./counter";
import { useCounterStore } from "../stores/store";

export default function Home() {
  const count = useCounterStore((state) => state.count);

  return <Counter count={count} />;
}
