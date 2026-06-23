import Link from "next/link";
import { loginAction } from "@/lib/authActions";

export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>
      <form action={loginAction}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />

        <button type="submit">Login</button>
      </form>

      <p>
        Dont have an account? <Link href="/register">Register</Link>
      </p>
    </main>
  );
}
