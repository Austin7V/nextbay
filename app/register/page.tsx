import { registerAction } from "@/lib/authActions";

export default function registerPage() {
  return (
    <main>
      <h1>Login</h1>
      <form action={registerAction}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" required />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />

        <button type="submit">Registriren</button>
      </form>
    </main>
  );
}
