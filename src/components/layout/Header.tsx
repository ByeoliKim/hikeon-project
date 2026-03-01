import Image from "next/image";
import { Bell, User } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="max-w-[420px] w-full absolute top-0 z-999 flex items-center justify-between px-4 py-3 bg-transparent">
        <h1 className="flex items-center gap-2 text-white text-xl font-extrabold">
          <Image
            src="/images/main/logo.png"
            alt="logo"
            width={30}
            height={30}
          />
          하이크온
        </h1>
        <div className="flex gap-1">
          <Bell size={36} strokeWidth={2} color="#fff" />
          <User size={36} strokeWidth={2} color="#fff" />
        </div>
      </header>
    </>
  );
}
