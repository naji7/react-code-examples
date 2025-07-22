"use client";

import { action } from "@/actions";
import { useActionState } from "react";

export default function Home() {
  const [state, formAction, isPending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <input type="text" name="username" />
      <button type="submit">{isPending ? "Submitting..." : "Submit"}</button>

      {state?.message && (
        <p className={state.success ? "text-green-500" : "text-red-500"}>
          {state.message}
        </p>
      )}
    </form>
  );
}
