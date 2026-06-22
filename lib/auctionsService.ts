export type Auction = {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  currentPrice: number;
  endDate: Date;
  seller: string;
  createdAt: Date;
};

export type AuctionsResponse = {
  items: Auction[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
};

export async function getAuctions(): Promise<AuctionsResponse> {
  const apiUrl = process.env.DARKBAY_API_URL;
  if (!apiUrl) {
    throw new Error("Darkbay api url is not defined!");
  }

  const response = await fetch(`${apiUrl}/auctions`);
  if (!response.ok) {
    throw new Error("Failed to fetch auctions!");
  }

  return response.json();
}
