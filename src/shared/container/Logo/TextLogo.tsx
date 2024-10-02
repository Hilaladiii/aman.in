import { twMerge } from "tailwind-merge";
export default function TextLogo({ className }: { className?: string }) {
  return (
    <h1 className="text-24">
      <span className={twMerge("text_logo", className)}>aman.in</span>
    </h1>
  );
}
