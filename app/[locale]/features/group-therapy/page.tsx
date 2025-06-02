"use client";

import { useRef, useState } from "react";

import RegisterModal from "./components/registerModal";
import Header from "./components/header";
import Sessions from "./components/sessions";
import Benefits from "./components/benefits";
import Guidelines from "./components/guidelines";

export default function GroupTherapy() {
  const modalRef = useRef<HTMLDialogElement>(null!);
  const [selectedSession, setSelectedSession] = useState<string>("");

  function handleRegister(title: string) {
    setSelectedSession(title);
    modalRef.current.showModal();
  }
  function handleClose() {
    modalRef.current.close();
  }

  return (
    <>
      <RegisterModal
        name={selectedSession}
        modalRef={modalRef}
        onClose={handleClose}
      />
      <div className="container xl:max-w-5xl mx-auto space-y-16 px-8 py-16">
        <Header />
        <Sessions onRegistir={handleRegister} />
        <Benefits />
        <Guidelines />
      </div>
    </>
  );
}
