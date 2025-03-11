import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logoBlack.png";

export default function Header() {
  return (
    <header className="fixed z-10 w-full flex justify-between items-center px-8 py-2 bg-light border-b-primary border-b-2">
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="Mentally Logo"
          quality={100}
          width={70}
          className="max-w-none h-auto"
        />
        <h1 className="ml-4 font-black uppercase text-3xl text-primary">
          mentally
        </h1>
      </Link>
      <nav className="flex justify-between gap-6 capitalize text-lg font-bold *:duration-200 *:hover:text-primary">
        <Link href="/">home</Link>
        <Link href="/#features">features</Link>
        <Link href="/#resources">resources</Link>
        <Link href="/chatbot">chatbot</Link>
        <Link href="#contactus">contact</Link>
      </nav>
    </header>
  );
}
