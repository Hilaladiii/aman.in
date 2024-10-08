"use client";

import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/shared/container/Input/Input";
import Button from "@/shared/container/Button/Button";
import ShowPasswordIcon from "@/assets/icons/show-password-icon.svg";
import HidePasswordIcon from "@/assets/icons/hide-password-icon.svg";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import { useRegister } from "../usecase/useRegister";

const registerSchema = z.object({
  email: z.string().email("Email tidak valid"),
  name: z.string().min(1, "Nama wajib diisi"),
  password: z
    .string()
    .min(8, "Password harus memiliki setidaknya 8 karakter")
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
      "Password harus mengandung huruf, angka, dan simbol",
    ),
  privacy: z.boolean().refine((value) => value === true, {
    message: "Anda harus menyetujui kebijakan privasi",
  }),
});

type TRegister = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [show, setShow] = useState(false);
  const { register: registerUser } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TRegister>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<TRegister> = async (data) => {
    await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    reset();
  };
  return (
    <>
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
          label="Nama"
          register={register}
          name="name"
          errors={errors.name}
          type="text"
          placeholder="Masukkan nama..."
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
        <div className="mt-2 flex flex-col">
          <div className="inline-flex items-start gap-2">
            <input
              type="checkbox"
              className="size-6 rounded-sm"
              id="privacy"
              {...register("privacy", { required: true })}
            />
            <label htmlFor="privacy" className="text-18 text-baseblack">
              Dengan membuat akun, saya setuju dengan{" "}
              <span className="text-primary500 underline">
                Ketentuan Penggunaan
              </span>{" "}
              dan{" "}
              <span className="text-primary500 underline">
                Kebijakan Privasi
              </span>
            </label>
          </div>
          {errors.privacy && (
            <span className="mt-1 text-center text-16 text-red-500">
              {errors.privacy.message}
            </span>
          )}
        </div>

        <div className="mt-2 flex items-center gap-6">
          <Button
            type="submit"
            variant="tertiary"
            className="rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Daftar"}
          </Button>
          <p className="text-18 text-baseblack">
            Sudah memiliki akun?{" "}
            <Link className="text-primary500 underline" href="/auth/login">
              Masuk
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
    </>
  );
}
