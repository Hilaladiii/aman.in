import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="min-h-max w-full pb-16">{children}</div>
      <Footer />
    </main>
  );
}
