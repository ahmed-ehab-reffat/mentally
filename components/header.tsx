"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, Xmark } from "./ui/icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  function handleOpen() {
    setIsOpen((prev: boolean) => !prev);
  }
  function handleClose() {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (
    <header
      dir="ltr"
      className="fixed z-50 w-full flex justify-between items-center px-4 sm:px-8 py-2 bg-foreground border-b-primary border-b-2"
    >
      <Link href="/" className="flex items-center gap-2 sm:gap-4">
        <Image
          src="/images/logoBlack.png"
          alt="Mentally Logo"
          width={100}
          height={100}
          quality={100}
          className="max-w-none w-13 sm:w-[70px] h-auto block dark:hidden"
        />
        <Image
          src="/images/logoWhite.png"
          alt="Mentally Logo"
          width={100}
          height={100}
          quality={100}
          className="max-w-none w-13 sm:w-[70px] h-auto hidden dark:block"
        />
        <h1 className="text-primary font-[Nunito] font-black uppercase text-xl sm:text-3xl">
          mentally
        </h1>
      </Link>
      <nav>
        <div onClick={handleOpen}>
          {isOpen ? (
            <Xmark className="w-5 h-5 cursor-pointer md:hidden" />
          ) : (
            <Menu className="w-5 h-5 cursor-pointer md:hidden" />
          )}
        </div>
        <ul
          className={`${
            isOpen ? "left-0" : "-left-full"
          } absolute top-13 sm:top-16 w-full p-5 flex flex-col space-y-5 bg-foreground/80 capitalize font-bold duration-400 transition-all *:w-fit *:duration-200 *:hover:text-primary md:static md:space-y-0 md:bg-transparent md:justify-between md:items-center md:flex-row md:gap-6 md:p-0 md:text-lg`}
        >
          <Link href="/#features" onClick={handleClose}>
            features
          </Link>
          <Link href="/#resources" onClick={handleClose}>
            resources
          </Link>
          <Link href="/chatbot" onClick={handleClose}>
            chatbot
          </Link>
          <Link href="#contactus" onClick={handleClose}>
            contact
          </Link>
          <Link href="/auth" onClick={handleClose}>
            login
          </Link>
          <p onClick={toggleTheme} className="cursor-pointer">
            <Sun className="w-5 h-5 fill-primary hidden dark:block" />
            <Moon className="w-5 h-5 fill-primary block dark:hidden" />
          </p>
          <Link href={pathname} locale={locale === "en" ? "ar" : "en"}>
            {locale.toUpperCase()}
          </Link>
        </ul>
      </nav>
    </header>
  );
}
