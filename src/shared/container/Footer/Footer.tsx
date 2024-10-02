import Logo from "@/assets/icons/aman.in-icon.svg";

export default function Footer() {
  return (
    <footer className="bg-white shadow-footer">
      <div className="flex flex-col items-start gap-4 px-20 py-7">
        <Logo className="size-10" />
        <h1 className="max-w-md text-left text-24 font-semibold">
          <span className="text-baseblack">
            {" "}
            Start saving and protecting your personal documents with
          </span>
          <span className="text_logo px-3 py-1 text-24">aman.in</span>
        </h1>
        <div className="text-16 text-neutral900">aman.in, 2024.</div>
        <hr className="h-[1px] w-full bg-neutral500" />
        <div className="flex w-full flex-row items-center justify-between text-14 text-baseblack">
          <div>© 2024 aman.in</div>
          <div className="space-x-10">
            <a href="">Ketentuan Layanan</a>
            <a href="">Kebijakan Privasi</a>
            <a href="">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
