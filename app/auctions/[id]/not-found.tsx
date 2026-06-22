import Link from "next/link";

export default function AuctionNotFound() {
  return (
    <main>
      <h1>Auction not found</h1>
      <p>This auction does not exist or was removed.</p>
      <Link href="/">Back to auctions</Link>
    </main>
  );
}
