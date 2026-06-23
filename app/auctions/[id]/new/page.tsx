import { createAuctionAction } from "@/lib/auctionsActions";

export default function NewAuctionPage() {
  return (
    <main>
      <h1>Create Auction</h1>

      <form action={createAuctionAction}>
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

        <button type="submit">Create auction</button>
      </form>
    </main>
  );
}
