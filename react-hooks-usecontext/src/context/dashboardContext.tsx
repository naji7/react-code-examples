import { User } from "@/app/page";
import { createContext, useContext } from "react";

export const DashboardContext = createContext<User | undefined>(undefined);

// context is a state that is accessible by multiple components without having to do prop drilling

export function useUserContext() {
  const user = useContext(DashboardContext);

  if (user === undefined) {
    throw new Error("useUserContext must be used with a DashboardContext");
  }

  return user;
}
