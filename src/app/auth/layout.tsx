import Image from "next/image";
import BackgroundAuth from "@/assets/images/background-auth.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-full min-h-screen p-20">
      <Image
        src={BackgroundAuth}
        alt="Background"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-primary500/70" />
      <div className="flex w-full justify-between">
        <div className="max-w-2xl">
          <h1 className="text-48 font-semibold leading-[65px] text-white">
            <span>
              Start saving and protecting your personal documents with{" "}
            </span>
            <span className="rounded-xl bg-white">
              <span className="text_logo px-3 py-1 text-48">aman.in</span>
            </span>
          </h1>
        </div>
        {children}
      </div>
    </main>
  );
}
