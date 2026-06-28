import Link from "next/link";
import RegisterForm from "./RegisterForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <Card className="pixel-card terminal-panel w-full max-w-md">
        <CardHeader>
          <CardTitle className="terminal-text text-primary">Register</CardTitle>
          <CardDescription className="terminal-text text-xs text-muted-foreground">
            Create an account to start selling and bidding.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <RegisterForm />

          <p className="terminal-text text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
