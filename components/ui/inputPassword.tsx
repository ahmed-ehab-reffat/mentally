"use client";

import { useState } from "react";
import Input from "./input";
import { Eye, EyeSlash } from "./icons";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function InputPassword({ className = "", ...props }: Props) {
  const [isHidden, setIsHidden] = useState(false);

  function onToggle() {
    setIsHidden((prev) => !prev);
  }

  return (
    <>
      <Input
        {...props}
        type={isHidden ? "password" : "text"}
        className={className}
      />
      {isHidden ? (
        <Eye
          onClick={onToggle}
          className="w-4 h-4 relative float-end -mt-7 mr-2 z-10 cursor-pointer"
        />
      ) : (
        <EyeSlash
          onClick={onToggle}
          className="w-4 h-4 relative float-end -mt-7 mr-2 z-10 cursor-pointer"
        />
      )}
    </>
  );
}
