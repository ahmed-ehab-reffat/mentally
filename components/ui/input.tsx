import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      {...props}
      className={cn(
        "px-3 py-2 bg-surface outline-none rounded-md dark:text-black placeholder:text-primary",
        className
      )}
    />
  );
}
