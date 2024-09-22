import React, { InputHTMLAttributes } from "react";
import {
  UseFormRegister,
  FieldValues,
  FieldError,
  Path,
} from "react-hook-form";

interface InputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  errors?: FieldError;
  icon?: React.ReactNode;
  changeIcon?: () => void;
}
export default function Input<T extends FieldValues>({
  label,
  description,
  register,
  name,
  errors,
  icon,
  changeIcon,
  ...props
}: InputProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label htmlFor={name} className="text-18">
          {label}
        </label>
        {description && (
          <div className="text-16 text-neutral700">{description}</div>
        )}
      </div>
      <div className="relative flex w-full">
        <input
          {...register(name)}
          id={name}
          {...props}
          className="w-full rounded-xl border border-neutral200 p-4 outline-none placeholder:text-neutral200 focus:border-primary500 focus:outline-none"
        />
        <div
          className="absolute right-5 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
          onClick={changeIcon}
        >
          {icon}
        </div>
      </div>

      {errors && (
        <span className="mt-1 text-16 text-red-500">{errors.message}</span>
      )}
    </div>
  );
}
