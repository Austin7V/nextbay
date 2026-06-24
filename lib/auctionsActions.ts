"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchAPI } from "./fetchAPI";

export type AuctionActionState = {
  error: string | null;
};

export async function createAuctionAction(
  _previousState: AuctionActionState,
  formData: FormData,
): Promise<AuctionActionState> {
  const title = formData.get("title");
  const description = formData.get("description");
  const startingPrice = Number(formData.get("startingPrice"));

  const response = await fetchAPI("/auctions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      startingPrice,
    }),
  });

  if (response.status === 401) {
    return {
      error: "You must be logged in to create an auction.",
    };
  }

  if (!response.ok) {
    return {
      error: "Failed to create auction.",
    };
  }

  revalidatePath("/auctions");

  redirect("/auctions");
}
