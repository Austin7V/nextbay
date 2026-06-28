"use client";

import { useActionState } from "react";
import {
  createAuctionAction,
  type AuctionActionState,
} from "@/lib/auctionsActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState: AuctionActionState = {
  error: null,
};

export default function CreateAuctionForm() {
  const [state, formAction, pending] = useActionState(
    createAuctionAction,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <label htmlFor="title">Title</label>
      <Input
        id="title"
        name="title"
        type="text"
        className="pixel-input"
        required
      />

      <label htmlFor="description">Description</label>
      <Textarea
        id="description"
        name="description"
        className="pixel-input"
        required
      />

      <label htmlFor="startingPrice">Starting price</label>
      <Input
        id="startingPrice"
        name="startingPrice"
        type="number"
        min="1"
        className="pixel-input"
        required
      />

      {state.error && <p className="text-sm text-destructive">{state.error}</p>}

      <Button type="submit" disabled={pending} className="pixel-button w-full">
        {pending ? "Creating..." : "Create auction"}
      </Button>
    </form>
  );
}
