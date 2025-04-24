// type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;
// type Props = React.ComponentProps<"button">;
type Props = {
  selected?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  selected = false,
  ...props
}: Props) {
  const classess = `${
    selected ? "bg-primary text-white *:fill-white" : "bg-white text-secondry"
  } font-bold px-4 py-2 rounded-md cursor-pointer hover:bg-primary hover:text-white hover:*:fill-white duration-200 ${className}`;

  return (
    <button {...props} className={classess}>
      {children}
    </button>
  );
}
