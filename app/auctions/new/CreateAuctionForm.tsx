"use client";

import { useActionState } from "react";
import {
  createAuctionAction,
  type AuctionActionState,
} from "@/lib/auctionsActions";

const initialState: AuctionActionState = {
  error: null,
};

export default function CreateAuctionForm() {
  const [state, formAction, pending] = useActionState(
    createAuctionAction,
    initialState,
  );

  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" required />

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" required />

      <label htmlFor="startingPrice">Starting price</label>
      <input
        id="startingPrice"
        name="startingPrice"
        type="number"
        min="1"
        required
      />

      {state.error && <p>{state.error}</p>}

      <button type="submit" disabled={pending}>
        {pending ? "Creating..." : "Create auction"}
      </button>
    </form>
  );
}
