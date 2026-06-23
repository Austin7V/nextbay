"use server";

import { revalidatePath } from "next/cache";
import { fetchAPI } from "./fetchAPI";

export async function createOfferAction(formData: FormData) {
  const auctionId = formData.get("auctionId");
  const amount = Number(formData.get("amount"));
  if (typeof auctionId !== "string") {
    throw new Error("Auction id is missing");
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

  if (!response.ok) {
    throw new Error("Failed to create offer");
  }

  revalidatePath(`/auctions/${auctionId}`);
}
