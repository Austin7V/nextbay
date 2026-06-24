"use client";

import { useActionState } from "react";
import { registerAction, type AuthActionState } from "@/lib/authActions";

const initialState: AuthActionState = {
  error: null,
};

export default function RegisterForm() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text" required />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" required />

      {state.error && <p>{state.error}</p>}

      <button type="submit" disabled={pending}>
        {pending ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
