"use client";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  const logout = () => {
    deleteCookie("token", { path: "/" });
    router.push("/auth/login");
  };

  return { logout };
}
