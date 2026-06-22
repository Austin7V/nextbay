import { getAuctionById } from "@/lib/auctionsService";

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

  return (
    <main>
      <h1>{auction.title}</h1>

      <p>{auction.description}</p>
      <p>Starting price: {auction.startingPrice} €</p>
      <p>Current price: {auction.currentPrice} €</p>
      <p>Seller: {auction.seller}</p>
      <p>Ends at: {new Date(auction.endDate).toLocaleDateString()}</p>
    </main>
  );
}
