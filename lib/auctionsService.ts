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

export async function getAuctions(page = "1"): Promise<AuctionsResponse> {
  const apiUrl = process.env.DARKBAY_API_URL;
  if (!apiUrl) {
    throw new Error("Darkbay api url is not defined!");
  }

  const url = `${apiUrl}/auctions?page=${page}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch auctions!");
  }

  return response.json();
}
