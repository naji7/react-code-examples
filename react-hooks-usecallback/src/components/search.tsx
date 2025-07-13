"use client";

import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log("Search rendered!");

  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default memo(Search);

// memo is a hook that is also used for performance reasons and what it does is it wraps the component that trying to export

// It checks if the props are different from one render to the next

// it will check if the on change prop is different from the previous render to this render
// if it is it's going to re-render the component if it isn't it's going to skip rendering the component
