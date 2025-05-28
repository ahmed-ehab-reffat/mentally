import { cn } from "@/lib/utils";

type Props = {
  selected?: boolean;
  outline?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  selected = false,
  outline = false,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        "bg-surface text-primary hover:bg-primary hover:text-white font-bold px-4 py-2 rounded-md cursor-pointer duration-200",
        className,
        {
          "border-2 border-white bg-transparent text-white hover:bg-surface hover:text-primary":
            outline,
        },
        {
          "bg-primary text-white": selected,
        }
      )}
    >
      {children}
    </button>
  );
}
