import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "ghost"
    | "outline"
    | "danger"
    | "warning"
    | "success";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClasses =
    "rounded-2xl px-10 py-4 text-2xl font-medium transition-colors duration-200 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-primary500 text-white hover:bg-primary600",
    secondary: "bg-white text-primary500 hover:bg-primary50",
    tertiary:
      "bg-neutral100 text-neutral500 hover:bg-primary500 hover:text-white disabled:bg-neutral100/50 disabled:text-neutral500/50",
    outline:
      "border border-primary500 bg-white text-primary500 hover:bg-primary50",
    ghost: "bg-transparent text-error500 hover:bg-error50",
    danger:
      "rounded-lg bg-tertiary500 px-2 py-1.5 text-white text-base disabled:text-tertiary500 disabled:bg-tertiary200",
    warning:
      "rounded-lg bg-secondary500 px-2 py-1.5 text-white text-base disabled:text-secondary500 disabled:bg-secondary200",
    success:
      "rounded-lg bg-succes600 text-white disabled:text-success600 disabled:bg-success200",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
