"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DocumentIcon from "@/assets/icons/document-icon.svg";
import HistoryIcon from "@/assets/icons/tracking-icon.svg";
import NotificationIcon from "@/assets/icons/notification-icon.svg";
import ProfileIcon from "@/assets/icons/profile-icon.svg";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <div className="flex flex-row items-center justify-between bg-white shadow-header">
        <div className="py-8 pl-20">
          <Logo />
        </div>
        <nav className="relative space-x-8">
          <Link
            href="/user/document"
            className={cn("inline-flex items-center gap-3 text-neutral500", {
              "text-primary500": pathname.includes("/user/document"),
            })}
          >
            <DocumentIcon
              className={cn("size-7 text-neutral500", {
                "text-primary500": pathname.includes("/user/document"),
              })}
            />
            <span className="text-18">Dokumen Saya</span>
            {pathname.includes("/user/document") && (
              <div className="absolute -bottom-9 h-[2px] w-1/2 bg-primary500" />
            )}
          </Link>
          <Link
            href="/user/history"
            className={cn("inline-flex items-center gap-3 text-neutral500", {
              "text-primary500": pathname.includes("/user/history"),
            })}
          >
            <HistoryIcon
              className={cn("size-7 text-neutral500", {
                "text-primary500": pathname.includes("/user/history"),
              })}
            />
            <span className="text-18">Riwayat Akses</span>
            {pathname.includes("/user/history") && (
              <div className="absolute -bottom-9 h-[2px] w-1/2 bg-primary500" />
            )}
          </Link>
        </nav>
        <div className="flex items-center gap-4 py-8 pr-20">
          <div className="flex size-10 items-center rounded-full bg-tertiary100 p-2">
            <NotificationIcon className="size-7 text-tertiary500" />
          </div>
          <div className="flex size-10 items-center rounded-full bg-primary100 p-2">
            <ProfileIcon className="size-7" />
          </div>
          <Button
            variant="outline"
            className="border-secondary500 px-4 py-1 text-lg text-secondary500"
          >
            Keluar
          </Button>
        </div>
      </div>
    </header>
  );
}
