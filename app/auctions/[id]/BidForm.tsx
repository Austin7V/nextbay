"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="auctionId" value={auctionId} />

      <label htmlFor="amount">Amount</label>
      <Input
        id="amount"
        name="amount"
        type="number"
        min={minimumAmount}
        required
      />

      {state.error && <p className="text-sm text-destructive">{state.error}</p>}

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Placing bid..." : "Place bid"}
      </Button>
    </form>
  );
}
