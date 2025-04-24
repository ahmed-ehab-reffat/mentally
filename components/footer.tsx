import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logoBlack.png";
import { Facebook, Github, Instagram, Linkedin, X } from "./ui/icons";

export default function Footer() {
  return (
    <footer id="contactus" className="bg-light pt-12 pb-4">
      <div className="container px-8 sm:px-4 mx-auto flex flex-wrap flex-col md:flex-row gap-8">
        <div className="min-w-full lg:min-w-auto lg:flex-1">
          <Link href="/" className="block w-fit">
            <Image
              src={logo}
              alt="Mentally Logo"
              quality={100}
              width={100}
              className="h-auto"
            />
          </Link>
          <Link
            href="/"
            className="font-black uppercase text-2xl text-primary w-fit mb-8"
          >
            mentally
          </Link>
          <p className="text-lg my-2">
            We&apos;re committed to deliver life-changing mental care to
            everyone who needs it.
          </p>
        </div>
        <div className="flex flex-1 lg:justify-around">
          <div className="mr-24 lg:mr-0">
            <h6 className="text-primary uppercase font-black text-lg">links</h6>
            <ul className="*:block *:mt-2 *:hover:underline">
              <Link href="/#about">About</Link>
              <Link href="/#features">Features</Link>
              <Link href="/#resources">Resources</Link>
              <Link href="/chatbot">Chatbot</Link>
            </ul>
          </div>
          <div className="">
            <h6 className="text-primary uppercase font-black text-lg">legal</h6>
            <ul className="*:mt-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h6 className="text-primary uppercase font-black">contact us</h6>
          <p className="mt-2">
            Get in touch with us via mail We are waiting for your message
          </p>
          <p className="mt-2">
            Email:{" "}
            <a
              className="text-secondry hover:underline"
              href="mailto:support@mentally.com"
            >
              support@mentally.com
            </a>
          </p>
          <ul className="flex gap-6 mt-6">
            <li id="facebook">
              <a href="#">
                <Facebook className="w-6 h-6 hover:fill-secondry hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
            <li id="instagram">
              <a href="#">
                <Instagram className="w-6 h-6 hover:fill-secondry hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
            <li id="x">
              <a href="#">
                <X className="w-6 h-6 hover:fill-secondry hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
            <li id="linkedin">
              <a href="#">
                <Linkedin className="w-6 h-6 hover:fill-secondry hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
            <li id="github">
              <a href="#">
                <Github className="w-6 h-6 hover:fill-secondry hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-6 border-primary border-b-[1px]" />
      <p className="text-center pt-4">
        &copy; {new Date().getFullYear()} Mentally, Inc.
      </p>
    </footer>
  );
}
