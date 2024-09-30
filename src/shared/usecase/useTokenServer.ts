import { cookies } from "next/headers";
import { getCookie } from "cookies-next";

export function useTokenServer() {
  const token = getCookie("token", { cookies });
  return token;
}
