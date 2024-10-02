interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <div className="w-full max-w-2xl rounded-3xl bg-white px-16 py-12">
      <h1 className="text-36 font-semibold text-baseblack">{title}</h1>
      <p className="text-18 text-neutral700">{description}</p>
      {children}
    </div>
  );
}
