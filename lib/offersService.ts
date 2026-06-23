import { fetchAPI } from "./fetchAPI";

export type Offer = {
  id: string;
  amount: number;
  bidder: string;
  createdAt: string;
};

export async function getOffersByAuctionId(
  auctionId: string,
): Promise<Offer[]> {
  const response = await fetchAPI(`/auctions/${auctionId}/offers`);

  if (!response.ok) {
    throw new Error("Failed to fetch offers");
  }

  return response.json();
}
