"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { Menu } from "./ui/icons";
import logo from "@/assets/images/logoBlack.png";

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  function handleToggle() {
    setToggle((prev: boolean) => !prev);
  }

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
      <nav>
        <Menu
          className="w-7 h-7 cursor-pointer border border-primary rounded-sm p-1 md:hidden"
          onClick={handleToggle}
        />
        <ul
          className={`${
            toggle ? "left-0" : "-left-full"
          } absolute top-16 w-full p-5 flex flex-col space-y-5 bg-light/80 capitalize font-bold duration-400 transition-all *:w-fit *:duration-200 *:hover:text-primary md:static md:space-y-0 md:bg-transparent md:justify-between md:items-center md:flex-row md:gap-6 md:p-0 md:text-lg`}
        >
          <Link href="/">home</Link>
          <Link href="/#features">features</Link>
          <Link href="/#resources">resources</Link>
          <Link href="/chatbot">chatbot</Link>
          <Link href="#contactus">contact</Link>
        </ul>
      </nav>
    </header>
  );
}
