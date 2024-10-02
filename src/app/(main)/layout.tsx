import AppShell from "@/shared/container/Layouts/AppShell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <AppShell>{children}</AppShell>
    </main>
  );
}
