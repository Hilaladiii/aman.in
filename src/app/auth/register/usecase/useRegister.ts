import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { registerRepository } from "../repository/registerRepository";

export function useRegister() {
  const router = useRouter();

  const register = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    const res = await registerRepository({ name, email, password });

    if (res.status == "success") {
      router.push("/auth/login");
      toast.success("Berhasil mendaftarkan akun anda");
    } else {
      toast.error(res.error);
    }
  };

  return { register };
}
