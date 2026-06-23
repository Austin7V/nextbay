import Link from "next/link";
import { isAuthenticated, logoutAction } from "@/lib/authActions";

export default async function HomePage() {
  const loggedIn = await isAuthenticated();

  return (
    <main>
      <h1>NextBay</h1>

      <p>
        NextBay is an auction marketplace where users can create auctions and
        place bids.
      </p>

      <nav>
        <Link href="/auctions">Browse auctions</Link>
        {" | "}

        {loggedIn ? (
          <>
            <Link href="/auctions/new">Create auction</Link>
            {" | "}
            <form action={logoutAction} style={{ display: "inline" }}>
              <button type="submit">Logout</button>
            </form>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            {" | "}
            <Link href="/register">Register</Link>
          </>
        )}
      </nav>
    </main>
  );
}
