"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { Menu, Xmark } from "./ui/icons";

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  function handleToggle() {
    setToggle((prev: boolean) => !prev);
  }

  return (
    <header className="fixed z-10 w-full flex justify-between items-center px-4 sm:px-8 py-2 bg-light border-b-primary border-b-2">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logoBlack.png"
          alt="Mentally Logo"
          width={100}
          height={100}
          quality={100}
          className="max-w-none w-13 sm:w-[70px] h-auto"
        />
        <h1 className="text-primary font-black uppercase ml-2 sm:ml-4 text-xl sm:text-3xl">
          mentally
        </h1>
      </Link>
      <nav>
        <div onClick={handleToggle}>
          {toggle ? (
            <Xmark className="w-5 h-5 cursor-pointer md:hidden" />
          ) : (
            <Menu className="w-5 h-5 cursor-pointer md:hidden" />
          )}
        </div>
        <ul
          className={`${
            toggle ? "left-0" : "-left-full"
          } absolute top-13 sm:top-16 w-full p-5 flex flex-col space-y-5 bg-light/80 capitalize font-bold duration-400 transition-all *:w-fit *:duration-200 *:hover:text-primary md:static md:space-y-0 md:bg-transparent md:justify-between md:items-center md:flex-row md:gap-6 md:p-0 md:text-lg`}
        >
          <Link href="/#features">features</Link>
          <Link href="/#resources">resources</Link>
          <Link href="/chatbot">chatbot</Link>
          <Link href="#contactus">contact</Link>
          <Link href="/auth">login</Link>
        </ul>
      </nav>
    </header>
  );
}
