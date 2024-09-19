import Logo from "./ui/Logo";
import DocumentIcon from "@/assets/icons/document-icon.svg";
import HistoryIcon from "@/assets/icons/tracking-icon.svg";
import NotificationIcon from "@/assets/icons/notification-icon.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="shadow-header flex items-center justify-between bg-white px-20 py-8">
      <Logo />
      <nav className="space-x-8">
        <Link
          href=""
          className="inline-flex items-center gap-3 text-neutral500"
        >
          <DocumentIcon className="size-7 text-neutral500" />
          <span className="text-18">Dokumen Saya</span>
        </Link>
        <Link
          href=""
          className="inline-flex items-center gap-3 text-neutral500"
        >
          <HistoryIcon className="size-7 text-neutral500" />
          <span className="text-18">Riwayat Akses</span>
        </Link>
      </nav>
      <div className="flex size-10 items-center rounded-full bg-tertiary100 p-2">
        <NotificationIcon className="size-7 text-tertiary500" />
      </div>
    </header>
  );
}
