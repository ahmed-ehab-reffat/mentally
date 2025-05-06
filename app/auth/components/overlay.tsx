"use client";

import Button from "@/components/ui/button";
import { useState } from "react";

export default function Overlay() {
  const [isLeftSide, setIsLeftSide] = useState(true);

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
            isLeftSide ? "-top-54" : "top-32"
          } transition-all duration-600 absolute`}
        >
          <div className="pb-36">
            <h2 className="text-4xl font-bold mb-6">Create Acount!</h2>
            <p className="mb-8">
              Register with your personal details to use all of site features
            </p>
            <Button onClick={handleSwitch} outline className="w-1/2 uppercase">
              Sign Up
            </Button>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Log In</h2>
            <p className="mb-8">
              Enter your personal details to use all of site features and more
            </p>
            <Button onClick={handleSwitch} outline className="w-1/2 uppercase">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
