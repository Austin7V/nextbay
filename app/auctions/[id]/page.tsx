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
    <main>
      <Card>
        <CardHeader>
          <CardTitle>{auction.title}</CardTitle>
          <CardDescription>{auction.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <p>Starting price: {auction.startingPrice} €</p>
          <p>Current price: {auction.currentPrice} €</p>
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
            <ul>
              {offers.map((offer) => (
                <li key={offer.id}>
                  <p>Amount: {offer.amount} €</p>
                  <p>Bidder: {offer.bidder}</p>
                  <p>Date: {new Date(offer.createdAt).toLocaleDateString()}</p>
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
