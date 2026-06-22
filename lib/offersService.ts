export type Offer = {
  id: string;
  amount: number;
  bidder: string;
  createdAt: string;
};

export async function getOffersByAuctionId(
  auctionId: string,
): Promise<Offer[]> {
  const apiUrl = process.env.DARKBAY_API_URL;
  if (!apiUrl) {
    throw new Error("Darbay api url ist not defined!");
  }

  const response = await fetch(`${apiUrl}/auctions/${auctionId}/offers`);
  if (!response.ok) {
    throw new Error("Failed to fetch offers");
  }

  return response.json();
}
