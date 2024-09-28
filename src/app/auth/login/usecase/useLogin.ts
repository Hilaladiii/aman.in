import toast from "react-hot-toast";
import { loginRepository } from "../repository/loginRepository";
import { jwtDecode } from "jwt-decode";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export function useLogin() {
  const router = useRouter();

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const res = await loginRepository({ email, password });

    if (res.status == "success") {
      const decodedToken = jwtDecode(res.data.token);
      const expirationTime = new Date(decodedToken.exp! * 1000);

      setCookie("token", res.data.token, {
        expires: expirationTime,
        path: "/",
      });

      router.push("/user/document");
      toast.success("Berhasil login");
    } else {
      toast.error(res.message);
    }
  };

  return { login };
}
