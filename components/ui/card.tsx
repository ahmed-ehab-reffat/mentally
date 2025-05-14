import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className, children, ...props }: Props) {
  return (
    <div
      className={cn("bg-foreground p-6 rounded-xl shadow-xl", className)}
      {...props}
    >
      {children}
    </div>
  );
}
