import CreateAuctionForm from "./CreateAuctionForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NewAuctionPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <Card className="pixel-card terminal-panel w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="terminal-text text-primary">
            Create Auction
          </CardTitle>
          <CardDescription>
            List a new item and let other users place bids.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <CreateAuctionForm />
        </CardContent>
      </Card>
    </main>
  );
}
