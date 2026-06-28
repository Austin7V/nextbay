"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerAction, type AuthActionState } from "@/lib/authActions";
import { LoadingDots } from "@/components/LoadingDots";

const initialState: AuthActionState = {
  error: null,
};

export default function RegisterForm() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <label htmlFor="username" className="terminal-text text-xs text-primary">
        Username
      </label>
      <Input
        id="username"
        name="username"
        type="text"
        className="pixel-input"
        required
      />

      <label htmlFor="password" className="terminal-text text-xs text-primary">
        Password
      </label>
      <Input
        id="password"
        name="password"
        type="password"
        className="pixel-input"
        required
      />

      {state.error && (
        <p className="terminal-text text-xs text-destructive">{state.error}</p>
      )}

      <Button type="submit" disabled={pending} className="pixel-button w-full">
        {pending ? (
          <>
            Registering
            <LoadingDots />
          </>
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
}
