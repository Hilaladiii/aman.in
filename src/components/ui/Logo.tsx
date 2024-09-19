import AmaninIcon from "@/assets/icons/aman.in-icon.svg";
import TextLogo from "./TextLogo";

export default function Logo() {
  return (
    <div className="inline-flex items-center gap-3">
      <AmaninIcon className="size-9" />
      <TextLogo />
    </div>
  );
}
