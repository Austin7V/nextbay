"use client";

import Link from "next/link";

export default function AuctionsError() {
  return (
    <main>
      <h1>Something went wrong</h1>

      <p>We could not load the auctions right now.</p>

      <Link href="/">Back to home</Link>
    </main>
  );
}
