type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;
// type Props = React.ComponentProps<"button">;

export default function Button({ children, className = "", ...props }: Props) {
  const classess = `bg-white text-secondry font-bold px-4 py-2 rounded-md cursor-pointer hover:bg-cyan duration-200 ${className}`;

  return (
    <button {...props} className={classess}>
      {children}
    </button>
  );
}
