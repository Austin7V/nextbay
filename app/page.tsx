import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>NextBay</h1>

      <p>
        NextBay is an auction marketplace where users can create auctions and
        place bids.
      </p>

      <Link href="/auctions">Browse auctions</Link>
    </main>
  );
}
