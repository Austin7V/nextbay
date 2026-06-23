import { notFound } from "next/navigation";
import { fetchAPI } from "./fetchAPI";

export type Auction = {
  id: string;
  title: string;
  description: string;
  startingPrice: number;
  currentPrice: number;
  endDate: string;
  seller: string;
  createdAt: string;
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
  const searchParams = new URLSearchParams({
    page,
    limit,
  });

  if (status) {
    searchParams.set("status", status);
  }

  const response = await fetchAPI(`/auctions?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch auctions!");
  }

  return response.json();
}

export async function getAuctionById(id: string): Promise<Auction> {
  const response = await fetchAPI(`/auctions/${id}`);

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch auction");
  }

  return response.json();
}
