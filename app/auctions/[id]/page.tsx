import { getAuctionById } from "@/lib/auctionsService";
import { getOffersByAuctionId } from "@/lib/offersService";
import { createOfferAction } from "@/lib/offersActions";
import BidForm from "./BidForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sleep } from "@/lib/sleep";

type AuctionDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AuctionDetailPage({
  params,
}: AuctionDetailPageProps) {
  const { id } = await params;
  await sleep(10000);

  const auction = await getAuctionById(id);
  const offers = await getOffersByAuctionId(id);

  return (
    <main className="space-y-6">
      <Card className="pixel-card terminal-panel">
        <CardHeader>
          <CardTitle className="terminal-text text-primary">
            Bid History
          </CardTitle>
          <CardDescription className="font-mono text-muted-foreground">
            {auction.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          <p>Starting price: {auction.startingPrice} €</p>
          <p className="text-2xl font-bold text-primary">
            Current price: {auction.currentPrice} €
          </p>
          <p>Seller: {auction.seller}</p>
          <p>Ends at: {new Date(auction.endDate).toLocaleDateString()}</p>
        </CardContent>
      </Card>

      <Card className="pixel-card">
        <CardHeader>
          <CardTitle className="terminal-text text-primary">
            Bid history
          </CardTitle>
        </CardHeader>

        <CardContent>
          {offers.length === 0 ? (
            <p>No offers yet.</p>
          ) : (
            <ul className="space-y-3">
              {offers.map((offer) => (
                <li
                  key={offer.id}
                  className="rounded-none border-2 border-primary/40 bg-background p-3"
                >
                  <p className="terminal-text text-sm text-primary">
                    Amount: {offer.amount} €
                  </p>

                  <p className="terminal-text mt-2 text-xs text-muted-foreground">
                    Bidder: {offer.bidder}
                  </p>

                  <p className="terminal-text mt-2 text-xs text-muted-foreground">
                    Date: {new Date(offer.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card className="pixel-card">
        <CardHeader>
          <CardTitle className="terminal-text text-primary">
            Place a bid
          </CardTitle>
        </CardHeader>

        <CardContent>
          <BidForm
            auctionId={auction.id}
            minimumAmount={auction.currentPrice + 1}
          />
        </CardContent>
      </Card>
    </main>
  );
}
