import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>

      <LoginForm />

      <p>
        Dont have an account? <Link href="/register">Register</Link>
      </p>
    </main>
  );
}
