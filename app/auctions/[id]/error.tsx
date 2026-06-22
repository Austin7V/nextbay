"use client";

import Link from "next/link";

export default function AuctionDetailError() {
  return (
    <main>
      <h1>Something went wrong</h1>
      <p>We could not load this auction right now.</p>
      <Link href="/">Back to auctions</Link>
    </main>
  );
}
