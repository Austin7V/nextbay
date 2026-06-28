import type { Metadata } from "next";
import Link from "next/link";
import { isAuthenticated, logoutAction } from "@/lib/authActions";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Press_Start_2P } from "next/font/google";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

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
    <html lang="en" className={`dark ${pixelFont.variable}`}>
      <body className="secret-grid min-h-screen bg-background text-foreground">
        <header className="border-b-2 border-primary bg-black/90 shadow-[0_0_24px_rgba(34,197,94,0.18)] backdrop-blur">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-4">
            <span className="terminal-text matrix-glow mr-4 text-lg font-black text-primary">
              NEXTBAY
            </span>
            <Button asChild variant="ghost" className="pixel-button">
              <Link href="/">Home</Link>
            </Button>

            <Button asChild variant="ghost" className="pixel-button">
              <Link href="/auctions">Auctions</Link>
            </Button>

            {loggedIn ? (
              <>
                <Button asChild variant="ghost" className="pixel-button">
                  <Link href="/auctions/new">Create auction</Link>
                </Button>

                <form action={logoutAction} style={{ display: "inline" }}>
                  <Button
                    type="submit"
                    variant="outline"
                    className="pixel-button"
                  >
                    Logout
                  </Button>
                </form>
              </>
            ) : (
              <>
                <Button asChild variant="outline" className="pixel-button">
                  <Link href="/login">Login</Link>
                </Button>

                <Button asChild variant="outline" className="pixel-button">
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
