import { notFound } from "next/navigation";

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

export async function getAuctions(
  page = "1",
  limit = "5",
  status?: string,
): Promise<AuctionsResponse> {
  const apiUrl = process.env.DARKBAY_API_URL;

  if (!apiUrl) {
    throw new Error("Darkbay api url is not defined!");
  }

  const searchParams = new URLSearchParams({
    page,
    limit,
  });

  if (status) {
    searchParams.set("status", status);
  }

  const url = `${apiUrl}/auctions?${searchParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch auctions!");
  }

  return response.json();
}

export async function getAuctionById(id: string): Promise<Auction> {
  const apiUrl = process.env.DARKBAY_API_URL;
  if (!apiUrl) {
    throw new Error("Darkbay api url is not defined!");
  }

  const response = await fetch(`${apiUrl}/auctions/${id}`);
  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch auction");
  }
  return response.json();
}
