import { type Ref, useRef } from "react";

import Modal from "@/components/modal";
import Button from "@/components/ui/button";
import { Xmark } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

type Props = {
  name: string;
  modalRef: Ref<HTMLDialogElement>;
  onClose: () => void;
};

export default function RegisterModal({ name, modalRef, onClose }: Props) {
  const formRef = useRef<HTMLFormElement>(null!);

  const t = useTranslations("Features.GroupTherapy.RegisterModal");

  function handleSubmit() {
    formRef.current.reset();
    onClose();
  }

  return (
    <Modal ref={modalRef}>
      <h2 className="mb-2 text-lg font-bold leading-none tracking-tight flex justify-between">
        {t("title", { title: name })}
        <Xmark onClick={onClose} className="w-4 cursor-pointer" />
      </h2>
      <p className="text-sm mb-4">{t("description")}</p>
      <form
        method="dialog"
        onSubmit={handleSubmit}
        ref={formRef}
        className="space-y-4"
      >
        <p>
          <label className="block text-sm mb-1 capitalize">{t("name")}</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-primary outline-none rounded-md"
          />
        </p>
        <p>
          <label className="block text-sm mb-1 capitalize">{t("email")}</label>
          <input
            type="email"
            required
            className="w-full px-3 py-2 border border-primary outline-none rounded-md"
          />
        </p>
        <p>
          <label className="block text-sm mb-1">{t("textarea")}</label>
          <textarea
            required
            className="w-full px-3 py-2 border border-primary outline-none rounded-md"
          />
        </p>
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full capitalize"
        >
          {t("submit")}
        </Button>
      </form>
    </Modal>
  );
}
