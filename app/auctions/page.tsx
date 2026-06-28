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
import { sleep } from "@/lib/sleep";

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
  await sleep(10000);

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
      <div className="mb-8 space-y-4">
        <p className="terminal-text text-sm text-primary">
          AUCTION GRID // ENCRYPTED LISTINGS
        </p>

        <h1 className="matrix-glow font-mono text-4xl font-black tracking-widest text-primary">
          ACTIVE AUCTIONS
        </h1>

        <p className="max-w-2xl font-mono text-muted-foreground">
          Browse classified auctions, inspect rare assets, and place encrypted
          bids.
        </p>
      </div>

      <nav className="mb-8 flex flex-wrap gap-3">
        <Button asChild variant="outline" className="pixel-button">
          <Link href={`/auctions?page=1&limit=${limit}`}>All</Link>
        </Button>

        <Button asChild variant="outline" className="pixel-button">
          <Link href={`/auctions?page=1&limit=${limit}&status=open`}>Open</Link>
        </Button>

        <Button asChild variant="outline" className="pixel-button">
          <Link href={`/auctions?page=1&limit=${limit}&status=closed`}>
            Closed
          </Link>
        </Button>

        <Button asChild className="pixel-button">
          <Link href="/auctions/new">Create auction</Link>
        </Button>
      </nav>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {auctions.map((auction) => (
          <Card
            key={auction.id}
            className="pixel-card transition hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="terminal-text text-primary">
                {auction.title}
              </CardTitle>
              <CardDescription>{auction.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-lg font-semibold text-primary">
                Current price: {auction.currentPrice} €
              </p>
              <p>Seller: {auction.seller}</p>
              <p>Ends at: {new Date(auction.endDate).toLocaleDateString()}</p>

              <Button asChild className="w-full">
                <Link href={`/auctions/${auction.id}`}>View auction</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <nav className="mt-8 flex items-center justify-center gap-4">
        {previousPage >= 1 && (
          <Button asChild variant="outline" className="pixel-button">
            <Link
              href={`/auctions?page=${previousPage}&limit=${limit}${statusQuery}`}
            >
              Previous
            </Link>
          </Button>
        )}

        <span className="terminal-text text-sm text-primary">
          PAGE {meta.currentPage} / {meta.totalPages}
        </span>

        {nextPage <= meta.totalPages && (
          <Button asChild variant="outline" className="pixel-button">
            <Link
              href={`/auctions?page=${nextPage}&limit=${limit}${statusQuery}`}
            >
              Next
            </Link>
          </Button>
        )}
      </nav>
    </main>
  );
}
