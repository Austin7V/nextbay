import Link from "next/link";
import { getAuctions } from "@/lib/auctionsService";

type HomePageProps = {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const page = params.page ?? "1";
  const limit = params.limit ?? "5";
  const auctionsResponse = await getAuctions(page, limit);
  const auctions = auctionsResponse.items;

  const meta = auctionsResponse.meta;
  const previousPage = meta.currentPage - 1;
  const nextPage = meta.currentPage + 1;

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
      <nav>
        {previousPage >= 1 && (
          <Link href={`/?page=${previousPage}`}>Previous page</Link>
        )}

        <span>
          Page {meta.currentPage} of {meta.totalPages}
        </span>

        {nextPage <= meta.totalPages && (
          <Link href={`/?page=${nextPage}`}>Next page</Link>
        )}
      </nav>
    </main>
  );
}
