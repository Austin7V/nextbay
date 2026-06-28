import type { Metadata } from "next";
import Link from "next/link";
import { isAuthenticated, logoutAction } from "@/lib/authActions";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="en" className="dark">
      <body className="secret-grid min-h-screen bg-background text-foreground">
        <header className="border-b border-primary/30 bg-black/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-4">
            <span className="matrix-glow mr-4 font-mono text-lg font-bold text-primary">
              NEXTBAY
            </span>
            <Button asChild variant="ghost">
              <Link href="/">Home</Link>
            </Button>

            <Button asChild variant="ghost">
              <Link href="/auctions">Auctions</Link>
            </Button>

            {loggedIn ? (
              <>
                <Button asChild variant="ghost">
                  <Link href="/auctions/new">Create auction</Link>
                </Button>

                <form action={logoutAction} style={{ display: "inline" }}>
                  <Button type="submit" variant="outline">
                    Logout
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link href="/login">Login</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </nav>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
