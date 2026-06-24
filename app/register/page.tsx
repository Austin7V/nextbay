import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main>
      <h1>Register</h1>
      <RegisterForm />

      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </main>
  );
}
