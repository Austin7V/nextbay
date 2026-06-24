"use client";

import { useActionState } from "react";
import { createOfferAction, type OfferActionState } from "@/lib/offersActions";

type BidFormProps = {
  auctionId: string;
  minimumAmount: number;
};

const initialState: OfferActionState = {
  error: null,
};

export default function BidForm({ auctionId, minimumAmount }: BidFormProps) {
  const [state, formAction, pending] = useActionState(
    createOfferAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="auctionId" value={auctionId} />

      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        name="amount"
        type="number"
        min={minimumAmount}
        required
      />

      {state.error && <p>{state.error}</p>}

      <button type="submit" disabled={pending}>
        {pending ? "Placing bid..." : "Place bid"}
      </button>
    </form>
  );
}
