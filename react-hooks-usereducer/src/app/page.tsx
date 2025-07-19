import Counter from "@/components/counter";

// use reducer follows the Redux pattern of doing things

// only difference between user reducer and use state is the fact that use reducer takes in some arguments

// in useReducer can update multiple pieces of State at once

export default function Home() {
  return (
    <>
      <Counter />
    </>
  );
}
