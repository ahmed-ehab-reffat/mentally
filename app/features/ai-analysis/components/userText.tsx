import { type Ref } from "react";

import Button from "@/components/ui/button";

type Props = {
  ref: Ref<HTMLTextAreaElement>;
  onStart: () => void;
};
export default function UserText({ ref, onStart }: Props) {
  return (
    <main className="space-y-4">
      <textarea
        ref={ref}
        placeholder="Enter your text here for analysis..."
        className="w-full px-3 py-2 border border-primary outline-none rounded-md placeholder:text-secondry"
      />
      <Button type="button" onClick={onStart} className="w-full">
        Start Analysis
      </Button>
    </main>
  );
}
