import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Assessments({ children }: Props) {
  return (
    <section id="assessments" className="bg-light p-8 rounded-lg shadow-lg">
      <h2 className="text-primary text-2xl font-bold">
        Mental Health Assessments
      </h2>
      <p className="text-lg mb-6">
        Explore our range of mental health tests to gain further insights into
        your well-being.
      </p>
      {children}
    </section>
  );
}
