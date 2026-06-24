import type { Metadata } from "next";
import Link from "next/link";
import { isAuthenticated, logoutAction } from "@/lib/authActions";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBay",
  description: "Auction marketplace powered by Next.js and DarkBay API",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await isAuthenticated();

  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/auctions">Auctions</Link>
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
        </header>

        {children}
      </body>
    </html>
  );
}
