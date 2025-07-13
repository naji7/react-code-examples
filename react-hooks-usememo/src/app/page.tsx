import Counter from "../components/counter";

// In React to update  something to update state means you have to trigger a rerender of the entire component.

// useMemo is a hook  that memoizes a value and returns the same value until any of the dependencies in the dependency array changes, until then it will recompute  a new value.

export default function Home() {
  return <Counter />;
}
