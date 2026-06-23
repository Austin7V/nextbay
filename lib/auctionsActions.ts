"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchAPI } from "./fetchAPI";

export async function createAuctionAction(formData: FormData) {
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
  if (!response.ok) {
    throw new Error("Failed to create auction");
  }
  revalidatePath("/");
  redirect("/");
}
