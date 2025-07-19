import ExampleOne from "@/components/example1";
import Image from "next/image";

// ref does not trigger a re-render of the component and ref values are not used in the return body

// ref will allow you to make updates and to read the updated value instantly without waiting for a re-render
// (useState is wait for re-render)

// useRef is useful if you want to access directly HTML Dom elements

export default function Home() {
  return <ExampleOne />;
}
