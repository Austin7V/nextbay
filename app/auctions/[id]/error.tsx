"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuctionDetailError() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="pixel-card terminal-panel scanline-overlay max-w-xl p-8 text-center">
        <p className="terminal-text text-sm text-destructive">
          SYSTEM ERROR // DATA DECRYPTION FAILED
        </p>

        <h1 className="matrix-glow mt-4 font-mono text-3xl font-black text-primary">
          AUCTION DATA LOST
        </h1>

        <p className="mt-4 font-mono text-muted-foreground">
          We could not decrypt this auction record right now.
        </p>

        <Button asChild className="pixel-button mt-6">
          <Link href="/auctions">Back to auction grid</Link>
        </Button>
      </div>
    </main>
  );
}
