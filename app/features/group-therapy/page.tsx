"use client";

import { useRef, useState } from "react";

import { Calendar, CircleCheck, Users, Xmark } from "@/components/ui/icons";
import Modal from "@/components/modal";
import Button from "@/components/ui/button";
import { upcomingSessions, guidelines, benefits } from "./data";

export default function GroupTherapyPage() {
  const modalRef = useRef<HTMLDialogElement>(null!);
  const formRef = useRef<HTMLFormElement>(null!);

  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  function handleClick(title: string) {
    setSelectedSession(title);
    modalRef.current.showModal();
  }
  function handleSubmit() {
    formRef.current.reset();
    modalRef.current.close();
  }
  // "Registration successful! We'll contact you with further details."

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="mb-2 text-lg font-bold leading-none tracking-tight flex justify-between">
          Register for {selectedSession}
          <Xmark
            onClick={() => modalRef.current.close()}
            className="w-4 h-4 cursor-pointer"
          />
        </h2>
        <p className="text-sm mb-4">
          Fill out the form below to register for the session.
        </p>
        <form
          method="dialog"
          onSubmit={handleSubmit}
          ref={formRef}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-primary outline-none rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-primary outline-none rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Why would you like to join this session?
            </label>
            <textarea
              required
              className="w-full px-3 py-2 border border-primary outline-none rounded-md"
            />
          </div>
          <Button type="button" onClick={handleSubmit} className="w-full">
            Submit Registration
          </Button>
        </form>
      </Modal>
      <div className="container xl:max-w-5xl mx-auto space-y-16 px-8 py-16">
        <header>
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-10 h-10 fill-primary" />
            <h1 className="text-4xl font-bold text-primary">Group Therapy</h1>
          </div>
          <p className="text-xl mb-12">
            Join our moderated group sessions where you can connect with others,
            share experiences, and receive support in a safe and understanding
            environment.
          </p>
        </header>
        <section id="sessions">
          <h2 className="text-primary text-2xl font-bold mb-4">
            Upcoming Sessions
          </h2>
          <ul className="grid gap-10">
            {upcomingSessions.map((session) => (
              <li
                key={session.id}
                className="bg-light p-6 rounded-lg shadow-xl"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-primary text-xl font-bold mb-2">
                      {session.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 fill-secondry" />
                      <span>{session.date}</span>
                    </div>
                    <p className="mb-4">{session.description}</p>
                  </div>
                  <div className="bg-white h-fit px-3 py-1 rounded-full">
                    <span className="text-secondry text-sm whitespace-nowrap">
                      {session.spots} spots left
                    </span>
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={() => handleClick(session.title)}
                  className="w-full"
                >
                  Register for Session
                </Button>
              </li>
            ))}
          </ul>
        </section>

        <section id="benefits">
          <h2 className="text-primary text-2xl font-bold mb-4">
            Benefits of Group Therapy
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-light p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="guidelines">
          <h2 className="text-primary text-2xl font-bold mb-4">
            Session Guidelines
          </h2>
          <ul className="bg-light p-8 space-y-4 rounded-lg shadow-lg">
            {guidelines.map((guideline, index) => (
              <li key={index} className="flex items-center gap-3">
                <CircleCheck className="w-5 h-5 fill-secondry" />
                <span>{guideline}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
