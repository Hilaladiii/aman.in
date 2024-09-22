"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import AuthLayout from "@/components/layouts/AuthLayout";
import Link from "next/link";
import ShowPasswordIcon from "@/assets/icons/show-password-icon.svg";
import HidePasswordIcon from "@/assets/icons/hide-password-icon.svg";
import GoogleIcon from "@/assets/icons/google-icon.svg";

const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(1, "Password wajib diisi"),
});

type TLogin = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLogin>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<TLogin> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <AuthLayout title="Masuk" description="Masuk ke akun untuk melanjutkan">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-4"
      >
        <Input
          label="Alamat Email"
          register={register}
          name="email"
          errors={errors.email}
          type="email"
          placeholder="Masukkan alamat email..."
        />
        <Input
          label="Kata Sandi"
          register={register}
          name="password"
          errors={errors.password}
          type={show ? "text" : "password"}
          placeholder="Masukkan kata sandi..."
          icon={show ? <ShowPasswordIcon /> : <HidePasswordIcon />}
          changeIcon={() => setShow(!show)}
        />

        <div className="mt-2 flex items-center gap-6">
          <Button type="submit" variant="tertiary" className="rounded-full">
            Masuk
          </Button>
          <p className="text-18 text-baseblack">
            Belum memiliki akun?{" "}
            <Link className="text-primary500 underline" href="/auth/register">
              Daftar
            </Link>
          </p>
        </div>
      </form>
      <div className="my-8 flex flex-row items-center">
        <hr className="w-full border border-neutral500" />
        <p className="px-4 text-16 text-neutral500">atau</p>
        <hr className="w-full border border-neutral500" />
      </div>
      <Button
        className="flex w-full items-center justify-center gap-2 rounded-full py-3.5"
        variant="outline"
      >
        <GoogleIcon />
        Daftar Dengan Google
      </Button>
      <div className="mt-8">
        Dilindungi dan bagian dari{" "}
        <span className="text-primary500 underline">Kebijakan Privasi </span>{" "}
        dan{" "}
        <span className="text-primary500 underline">
          {" "}
          Ketentuan Penggunaan{" "}
        </span>
        aman.in
      </div>
    </AuthLayout>
  );
}
