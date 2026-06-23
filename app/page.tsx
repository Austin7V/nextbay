import Link from "next/link";
import { getAuctions } from "@/lib/auctionsService";
import { isAuthenticated, logoutAction } from "@/lib/authActions";

type HomePageProps = {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    status?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const page = params.page ?? "1";
  const limit = params.limit ?? "5";
  const status = params.status;
  const loggedIn = await isAuthenticated();
  const auctionsResponse = await getAuctions(page, limit, status);
  const auctions = auctionsResponse.items;

  const meta = auctionsResponse.meta;
  const previousPage = meta.currentPage - 1;
  const nextPage = meta.currentPage + 1;

  return (
    <main>
      <h1>NextBay</h1>
      <nav>
        {loggedIn ? (
          <form action={logoutAction}>
            <button type="submit">Logout</button>
          </form>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
      <p>Actions marketplace.</p>
      <nav>
        <Link href={`/?page=1&limit=${limit}`}>All</Link>
        {" | "}
        <Link href={`/?page=1&limit=${limit}&status=open`}>Open</Link>
        {" | "}
        <Link href={`/?page=1&limit=${limit}&status=closed`}>Closed</Link>
      </nav>

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
          <Link href={`/?page=${previousPage}&limit=${limit}`}>
            Previous page
          </Link>
        )}

        <span>
          Page {meta.currentPage} of {meta.totalPages}
        </span>

        {nextPage <= meta.totalPages && (
          <Link href={`/?page=${nextPage}&limit=${limit}`}>Next page</Link>
        )}
      </nav>
    </main>
  );
}
