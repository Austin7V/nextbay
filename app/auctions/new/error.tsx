"use client";

import Link from "next/link";

export default function NewAuctionError() {
  return (
    <main>
      <h1>Something went wrong</h1>

      <p>We could not load the create auction page right now.</p>

      <Link href="/auctions">Back to auctions</Link>
    </main>
  );
}
