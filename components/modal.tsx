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
          className="bg-foreground w-lg p-6 top-1/2 left-1/2 -translate-1/2 shadow-lg rounded-lg"
        >
          {children}
        </dialog>,
        document.getElementById("modal") as Element
      )
    : null;
}
