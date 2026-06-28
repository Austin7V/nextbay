"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuctionsError() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="pixel-card terminal-panel scanline-overlay max-w-xl p-8 text-center">
        <p className="terminal-text text-sm text-destructive">
          SYSTEM ERROR // AUCTION GRID OFFLINE
        </p>

        <h1 className="matrix-glow mt-4 font-mono text-3xl font-black text-primary">
          CONNECTION FAILED
        </h1>

        <p className="mt-4 font-mono text-muted-foreground">
          We could not load the encrypted auction listings right now.
        </p>

        <Button asChild className="pixel-button mt-6">
          <Link href="/">Back to terminal</Link>
        </Button>
      </div>
    </main>
  );
}
