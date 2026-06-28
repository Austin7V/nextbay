import { LoadingDots } from "@/components/LoadingDots";

export default function AuctionsLoading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="pixel-card terminal-panel scanline-overlay p-8 text-center">
        <p className="terminal-text matrix-glow text-primary">
          LOADING AUCTION GRID
          <LoadingDots />
        </p>
      </div>
    </main>
  );
}
