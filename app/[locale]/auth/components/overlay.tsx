"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";

export default function Overlay() {
  const [isLeftSide, setIsLeftSide] = useState(true);

  const t = useTranslations("Auth");

  function handleSwitch(): void {
    setIsLeftSide((prev) => !prev);
  }

  return (
    <div
      className={`${
        isLeftSide ? "left-0 rounded-r-[25%]" : "left-1/2 rounded-l-[25%]"
      } transition-all duration-600 absolute top-0 bg-primary h-full w-1/2 px-8 text-white z-20`}
    >
      <div className="relative h-full">
        <div
          className={`${
            isLeftSide ? "ltr:-top-54 rtl:top-32" : "ltr:top-32 rtl:-top-54"
          } transition-all duration-600 absolute`}
        >
          <div className="pb-36">
            <h2 className="text-4xl font-bold mb-6 capitalize">
              {t("create acount")}
            </h2>
            <p className="mb-8">{t("sign up description")}</p>
            <Button onClick={handleSwitch} outline className="w-1/2 uppercase">
              {t("sign up")}
            </Button>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 capitalize">
              {t("log in")}
            </h2>
            <p className="mb-8">{t("sign in description")}</p>
            <Button onClick={handleSwitch} outline className="w-1/2 uppercase">
              {t("sign in")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
