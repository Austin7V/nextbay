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
    <main className="flex min-h-[75vh] items-center justify-center">
      <Card className="pixel-card terminal-panel scanline-overlay w-full max-w-4xl text-center">
        <CardHeader className="space-y-6">
          <p className="terminal-text matrix-float text-xs text-primary">
            CLASSIFIED ACCESS // LEVEL 7 REQUIRED
          </p>

          <CardTitle className="terminal-text matrix-glow text-5xl font-black text-primary md:text-7xl">
            NEXTBAY
          </CardTitle>

          <CardDescription className="terminal-text mx-auto max-w-2xl text-xs leading-6 text-muted-foreground md:text-sm">
            A hidden auction terminal for rare assets, restricted listings, and
            encrypted bids. Access is granted only to verified operators.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex justify-center">
          <Button asChild size="lg" className="pixel-button">
            <Link href="/auctions">Enter Auction Grid</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
