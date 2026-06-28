"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginAction, type AuthActionState } from "@/lib/authActions";

const initialState: AuthActionState = {
  error: null,
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <label htmlFor="username">Username</label>
      <Input id="username" name="username" type="text" required />

      <label htmlFor="password">Password</label>
      <Input id="password" name="password" type="password" required />

      {state.error && <p className="text-sm text-destructive">{state.error}</p>}

      <Button type="submit" disabled={pending}>
        {pending ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}
