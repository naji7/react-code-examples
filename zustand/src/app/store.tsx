// In Zustand, a store is just a place where you keep app’s state and the functions that manage or update that state
import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => Promise<void>;
  decrement: () => Promise<void>;
};

// useCounterStore is a custom hook can use it in the react component without having to wrap anything in a provider and without having to pass any props
export const useCounterStore = create<CounterStore>((set) => ({
  // 1. Best practices : whenever defining stores, always want to group by specific features
  // ex: this counter store here has everything to do with the count and it has state variables of the count and functions it dosent have anything else
  // if app needs to have extra functionality like authentication, create a authStore and store the pieces of state that related to the auth
  // having separate store is better bcz it makes it more modular it can have these in separate files. we can just import it from specific store
  // create more stores without having everything be in the one file
  count: 0,
  increment: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count - 1 }));
  },
}));
