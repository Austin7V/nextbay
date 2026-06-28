import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuctionNotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="pixel-card terminal-panel scanline-overlay max-w-xl p-8 text-center">
        <p className="terminal-text text-sm text-destructive">
          ACCESS DENIED // RECORD NOT FOUND
        </p>

        <h1 className="matrix-glow mt-4 font-mono text-3xl font-black text-primary">
          AUCTION NOT FOUND
        </h1>

        <p className="mt-4 font-mono text-muted-foreground">
          This auction record does not exist, was deleted, or your access level
          is not high enough.
        </p>

        <Button asChild className="pixel-button mt-6">
          <Link href="/auctions">Back to auction grid</Link>
        </Button>
      </div>
    </main>
  );
}
