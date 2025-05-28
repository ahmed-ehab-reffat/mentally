import Button from "@/components/ui/button";
import { Plus } from "@/components/ui/icons";

type Props = {
  selected: string;
  onSelect: (test: string) => void;
};

export default function Tests({ selected, onSelect }: Props) {
  return (
    <section id="tests" className="bg-foreground p-8 rounded-lg shadow-lg">
      <h2 className="text-primary text-2xl font-bold">
        Select a Mental Health Test
      </h2>
      <p className="text-lg mb-6">
        Choose a test to analyze specific mental health aspects.
      </p>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tests.map((test) => (
            <Button
              key={test}
              onClick={() => onSelect(test)}
              selected={test === selected}
              className="flex justify-between items-center uppercase"
            >
              {test}
              <Plus className="w-3 h-3" />
            </Button>
          ))}
        </ul>
      </div>
    </section>
  );
}

const tests: string[] = [
  "depression",
  "anxiety",
  "adhd",
  "ptsd",
  "addiction",
  "bipolar",
  "eating disorder",
  "postpartum depression",
  "youth mental health",
  "psychosis & schizophrenia",
  "self-inquiry survey",
];
