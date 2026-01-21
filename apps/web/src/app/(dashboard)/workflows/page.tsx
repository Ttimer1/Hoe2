import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function WorkflowsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My Workflows</h1>
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            New Workflow
          </button>
        </div>

        <div className="mt-8 rounded-lg border border-dashed p-12 text-center">
          <p className="text-muted-foreground">
            No workflows yet. Install the browser extension to start recording.
          </p>
        </div>
      </div>
    </div>
  );
}
