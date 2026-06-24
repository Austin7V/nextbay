import { getAuctionById } from "@/lib/auctionsService";
import { getOffersByAuctionId } from "@/lib/offersService";
import { createOfferAction } from "@/lib/offersActions";
import BidForm from "./BidForm";

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
      <h1>{auction.title}</h1>

      <p>{auction.description}</p>
      <p>Starting price: {auction.startingPrice} €</p>
      <p>Current price: {auction.currentPrice} €</p>
      <p>Seller: {auction.seller}</p>
      <p>Ends at: {new Date(auction.endDate).toLocaleDateString()}</p>
      <section>
        <h2>Bid history</h2>

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
      </section>

      <section>
        <h2>Place a bid</h2>

        <BidForm
          auctionId={auction.id}
          minimumAmount={auction.currentPrice + 1}
        />
      </section>
    </main>
  );
}
