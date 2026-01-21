import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hoe2
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Record browser actions and generate step-by-step guides automatically.
          Powered by AI.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/register"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="text-sm font-semibold leading-6"
          >
            Sign in <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
