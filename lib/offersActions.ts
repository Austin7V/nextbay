"use server";

import { revalidatePath } from "next/cache";
import { fetchAPI } from "./fetchAPI";

export type OfferActionState = {
  error: string | null;
};

export async function createOfferAction(
  _previousState: OfferActionState,
  formData: FormData,
): Promise<OfferActionState> {
  const auctionId = formData.get("auctionId");

  const amount = Number(formData.get("amount"));

  if (typeof auctionId !== "string") {
    return {
      error: "Auction id is missing.",
    };
  }

  const response = await fetchAPI(`/auctions/${auctionId}/offers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
    }),
  });

  if (response.status === 401) {
    return {
      error: "You must be logged in to place a bid.",
    };
  }

  if (!response.ok) {
    return {
      error:
        "Failed to place bid. The amount may be too low or the auction is closed.",
    };
  }

  revalidatePath(`/auctions/${auctionId}`);

  return {
    error: null,
  };
}
