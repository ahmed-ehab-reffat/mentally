import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logoBlack.png";

export default function Header() {
  return (
    <header className="fixed z-10 w-full flex justify-between items-center px-8 py-2 bg-lightGray">
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
      <ul className="flex justify-between gap-6 capitalize text-lg font-semibold *:duration-200 *:hover:text-main">
        <Link href="/#showcase">showcase</Link>
        <Link href="/analysis">analysis</Link>
        <Link href="/resources">resources</Link>
        <Link href="/chatbot">chatbot</Link>
        <Link href="/#contact" className="whitespace-nowrap">
          contact us
        </Link>
      </ul>
    </header>
  );
}
