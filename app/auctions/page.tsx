import Link from "next/link";
import { getAuctions } from "@/lib/auctionsService";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type AuctionsPageProps = {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    status?: string;
  }>;
};

export default async function AuctionsPage({
  searchParams,
}: AuctionsPageProps) {
  const params = await searchParams;

  const page = params.page ?? "1";
  const limit = params.limit ?? "5";
  const status = params.status;

  const auctionsResponse = await getAuctions(page, limit, status);
  const auctions = auctionsResponse.items;
  const meta = auctionsResponse.meta;

  const previousPage = meta.currentPage - 1;
  const nextPage = meta.currentPage + 1;
  const statusQuery = status ? `&status=${status}` : "";

  return (
    <main>
      <h1>Auctions</h1>

      <nav>
        <Link href={`/auctions?page=1&limit=${limit}`}>All</Link>
        {" | "}
        <Link href={`/auctions?page=1&limit=${limit}&status=open`}>Open</Link>
        {" | "}
        <Link href={`/auctions?page=1&limit=${limit}&status=closed`}>
          Closed
        </Link>
        {" | "}
        <Link href="/auctions/new">Create auction</Link>
      </nav>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {auctions.map((auction) => (
          <Card key={auction.id}>
            <CardHeader>
              <CardTitle>{auction.title}</CardTitle>
              <CardDescription>{auction.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <p>Current price: {auction.currentPrice} €</p>
              <p>Seller: {auction.seller}</p>
              <p>Ends at: {new Date(auction.endDate).toLocaleDateString()}</p>

              <Button asChild>
                <Link href={`/auctions/${auction.id}`}>View auction</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <nav>
        {previousPage >= 1 && (
          <Link
            href={`/auctions?page=${previousPage}&limit=${limit}${statusQuery}`}
          >
            Previous page
          </Link>
        )}

        <span>
          Page {meta.currentPage} of {meta.totalPages}
        </span>

        {nextPage <= meta.totalPages && (
          <Link
            href={`/auctions?page=${nextPage}&limit=${limit}${statusQuery}`}
          >
            Next page
          </Link>
        )}
      </nav>
    </main>
  );
}
