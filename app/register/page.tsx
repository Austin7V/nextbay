import Link from "next/link";
import { registerAction } from "@/lib/authActions";

export default function RegisterPage() {
  return (
    <main>
      <h1>Register</h1>
      <form action={registerAction}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </main>
  );
}
