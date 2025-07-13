"use client";

import { useCallback, useState } from "react";
import Search from "./search";

const allUsers = ["john", "alex", "george", "simon", "james"];

export default function Shuffle() {
  const [users, setUsers] = useState(allUsers);

  // use callback is going to memorize the function and freeze the function in time but that also
  // means that it's going to freeze everything in the function

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div className="tutorial">
      <div className="align-center mb-2 flex">
        <button>Shuffle</button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
