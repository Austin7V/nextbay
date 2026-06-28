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

type AuctionDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AuctionDetailPage({
  params,
}: AuctionDetailPageProps) {
  const { id } = await params;

  const auction = await getAuctionById(id);
  const offers = await getOffersByAuctionId(id);

  return (
    <main className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>{auction.title}</CardTitle>
          <CardDescription>{auction.description}</CardDescription>
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

      <Card>
        <CardHeader>
          <CardTitle>Bid history</CardTitle>
        </CardHeader>

        <CardContent>
          {offers.length === 0 ? (
            <p>No offers yet.</p>
          ) : (
            <ul className="space-y-3">
              {offers.map((offer) => (
                <li
                  key={offer.id}
                  className="rounded-lg border border-border bg-background p-3"
                >
                  <p className="font-semibold text-primary">
                    Amount: {offer.amount} €
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Bidder: {offer.bidder}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Date: {new Date(offer.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Place a bid</CardTitle>
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
