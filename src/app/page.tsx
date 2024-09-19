import Image from "next/image";
import BackgroundLanding from "@/assets/images/background-landing.png";
import CardFeature from "@/components/CardFeature";
import Button from "@/components/ui/Button";
import { FEATURES } from "@/constants/feature";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image
          src={BackgroundLanding}
          alt="background landing page"
          className="w-full"
        />
        <div className="absolute left-1/2 top-1/3 w-full max-w-5xl -translate-x-1/2">
          <h1 className="text-center text-60 font-bold leading-[90px] text-white">
            <span>find the best document storage with </span>
            <span className="rounded-xl bg-white">
              <span className="text_logo px-3 py-1 text-60">aman.in</span>
            </span>
          </h1>
          <div className="mt-14 flex items-center justify-center gap-6">
            <Button
              label="Daftar"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-primary500"
            />
            <Button
              label="Masuk"
              className="rounded-xl bg-primary500 px-8 py-4 font-semibold text-white"
            />
          </div>
        </div>
      </div>
      <div className="mt-9 flex flex-col items-center justify-center">
        <h2 className="text-36 font-semibold text-primary500">Fitur Kami</h2>
        <p className="mt-2 max-w-3xl text-center text-24 font-medium text-neutral700">
          Untuk mewujudkan misi kami dalam mengurangi kasus kebocoran data
        </p>
        <div className="mt-12 flex flex-row items-start justify-center gap-16">
          {FEATURES.map((feature, index) => (
            <CardFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
