import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  title: string;
};

export default function Analysis({ children, title }: Props) {
  return (
    <section id="analysis" className="bg-foreground p-8 rounded-lg shadow-lg">
      <div>
        <h2 className="text-primary text-2xl font-bold">Try Our AI Analysis</h2>
        <p className="text-lg mb-6">
          {title
            ? `Analyzing: ${title.toUpperCase()}`
            : "Select a test and enter text to start."}
        </p>
      </div>
      {children}
    </section>
  );
}
