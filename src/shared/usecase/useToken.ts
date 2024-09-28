import { getCookie } from "cookies-next";

export function useToken() {
  return getCookie("token")?.toString();
}
