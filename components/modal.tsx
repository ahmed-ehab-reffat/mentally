import { type Ref, useState, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  ref: Ref<HTMLDialogElement>;
};

export default function Modal({ children, ref }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted
    ? createPortal(
        <dialog
          ref={ref}
          className="bg-foreground w-lg p-6 top-1/2 -translate-y-1/2 ltr:left-1/2 ltr:-translate-x-1/2 rtl:right-1/2 rtl:translate-x-1/2 shadow-lg rounded-lg"
        >
          {children}
        </dialog>,
        document.getElementById("modal") as Element
      )
    : null;
}
