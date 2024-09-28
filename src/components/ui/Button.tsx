import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "outline";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClasses =
    "rounded-2xl px-10 py-4 text-2xl font-medium transition-colors duration-200";

  const variantClasses = {
    primary: "bg-primary500 text-white hover:bg-primary600",
    secondary: "bg-white text-primary500 hover:bg-primary50",
    tertiary:
      "bg-neutral100 text-neutral500 hover:bg-primary500 hover:text-white disabled:bg-neutral100/50 disabled:text-neutral500/50",
    outline:
      "border border-primary500 bg-white text-primary500 hover:bg-primary50",
    ghost: "bg-transparent text-error500 hover:bg-error50",
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
