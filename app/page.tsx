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
          <p className="terminal-text matrix-float text-sm text-primary">
            CLASSIFIED ACCESS // LEVEL 7 REQUIRED
          </p>

          <CardTitle className="matrix-glow font-mono text-5xl font-black tracking-widest text-primary md:text-7xl">
            NEXTBAY
          </CardTitle>

          <CardDescription className="mx-auto max-w-2xl font-mono text-base text-muted-foreground md:text-lg">
            A hidden auction terminal for rare assets, restricted listings, and
            encrypted bids. Access is granted only to verified operators.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="pixel-button">
            <Link href="/auctions">Enter Auction Grid</Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="pixel-button">
            <Link href="/register">Request Access</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
