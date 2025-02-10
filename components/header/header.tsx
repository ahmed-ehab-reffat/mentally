import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logoBlack.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-2 bg-lightGray">
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="Mentally Logo"
          width={67}
          className="max-w-none h-auto"
        />
        <h1 className="ml-6 font-bold  uppercase text-3xl text-main">
          mentally
        </h1>
      </Link>
      <ul className="flex justify-between gap-6 capitalize text-lg font-semibold *:duration-250 *:hover:text-main">
        <Link href="/">showcase</Link>
        <Link href="/">analysis</Link>
        <Link href="/">resources</Link>
        <Link href="/">chatbot</Link>
        <Link href="/" className="whitespace-nowrap">
          contact us
        </Link>
      </ul>
    </header>
  );
}
