import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Facebook, Github, Instagram, Linkedin, X } from "./ui/icons";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer id="contactus" className="bg-foreground pt-12 pb-4">
      <div className="container px-6 mx-auto flex flex-wrap flex-col md:flex-row gap-8">
        <div className="min-w-full lg:min-w-auto lg:flex-1">
          <Link href="/" className="block w-fit">
            <Image
              src="/images/logoBlack.png"
              alt="Mentally Logo"
              quality={100}
              width={100}
              height={100}
              className="h-auto block dark:hidden"
            />
            <Image
              src="/images/logoWhite.png"
              alt="Mentally Logo"
              quality={100}
              width={100}
              height={100}
              className="h-auto hidden dark:block"
            />
          </Link>
          <Link
            href="/"
            className="font-black font-[Nunito] uppercase text-2xl text-primary w-fit mb-8"
          >
            mentally
          </Link>
          <p className="text-lg my-2">{t("description")}</p>
        </div>
        <div className="flex flex-1 space-x-24 lg:space-x-0 lg:justify-around">
          <div>
            <h6 className="text-primary uppercase font-black text-lg">
              {t("links.title")}
            </h6>
            <ul className="*:block *:mt-2 *:hover:underline *:capitalize">
              <Link href="/#about">{t("links.about")}</Link>
              <Link href="/#features">{t("links.features")}</Link>
              <Link href="/#resources">{t("links.resources")}</Link>
              <Link href="/chatbot">{t("links.chatbot")}</Link>
            </ul>
          </div>
          <div>
            <h6 className="text-primary uppercase font-black text-lg">
              {t("legal.title")}
            </h6>
            <ul className="*:mt-2 *:*:capitalize *:*:hover:underline">
              <li>
                <a href="#">{t("legal.privacy policy")}</a>
              </li>
              <li>
                <a href="#">{t("legal.licensing")}</a>
              </li>
              <li>
                <a href="#">{t("legal.terms & conditions")}</a>
              </li>
              <li>
                <a href="#">{t("legal.cookies")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h6 className="text-primary uppercase font-black">
            {t("contact us.title")}
          </h6>
          <p className="mt-2">{t("contact us.description")}</p>
          <p className="mt-2">
            {t("contact us.email") + ": "}
            <a
              className="text-primary hover:underline"
              href="mailto:support@mentally.com"
            >
              support@mentally.com
            </a>
          </p>
          <ul className="flex gap-6 mt-6">
            <li id="facebook">
              <a href="#">
                <Facebook className="w-6 h-6 hover:fill-primary hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
            <li id="instagram">
              <a href="#">
                <Instagram className="w-6 h-6 hover:fill-primary hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
            <li id="x">
              <a href="#">
                <X className="w-6 h-6 hover:fill-primary hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
            <li id="linkedin">
              <a href="#">
                <Linkedin className="w-6 h-6 hover:fill-primary hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
            <li id="github">
              <a href="#">
                <Github className="w-6 h-6 hover:fill-primary hover:scale-110 hover:rotate-10 duration-250" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-6 border-primary border-b-[1px]" />
      <p dir="ltr" className="font-[Nunito] text-center pt-4">
        &copy; {new Date().getFullYear()} Mentally, Inc.
      </p>
    </footer>
  );
}
