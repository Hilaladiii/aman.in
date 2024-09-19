import Navbar from "../Navbar";
import Footer from "../Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
