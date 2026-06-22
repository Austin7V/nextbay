import Link from "next/link";
import { getAuctions } from "@/lib/auctionsService";

type HomePageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const page = params.page ?? "1";
  const auctionsResponse = await getAuctions(page);
  const auctions = auctionsResponse.items;

  return (
    <main>
      <h1>NextBay</h1>
      <p>Actions marketplace.</p>

      <ul>
        {auctions.map((auction) => (
          <li key={auction.id}>
            <Link href={`/auctions/${auction.id}`}>
              <h2>{auction.title}</h2>
            </Link>

            <p>{auction.description}</p>
            <p>Current price: {auction.currentPrice} €</p>
            <p>Seller: {auction.seller}</p>
            <p>Ends at: {new Date(auction.endDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
