import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <Card className="w-full max-w-3xl border-border bg-card text-center">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold tracking-tight">
            NextBay
          </CardTitle>

          <CardDescription className="text-lg">
            An underground auction marketplace where users can create auctions,
            place bids, and compete for rare items.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/auctions">Browse auctions</Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/auctions/new">Create auction</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
