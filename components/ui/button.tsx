type Props = {
  selected?: boolean;
  outline?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  selected = false,
  outline = false,
  ...props
}: Props) {
  const classess = `${selected && "bg-primary text-white *:fill-white "}
    ${
      outline &&
      "border-2 border-white bg-transparent text-white hover:bg-surface hover:text-primary hover:*:fill-primary "
    }
    ${
      !selected &&
      !outline &&
      "bg-surface text-primary hover:bg-primary hover:text-white hover:*:fill-white "
    }
    font-bold px-4 py-2 rounded-md cursor-pointer duration-200 ${className}`;

  return (
    <button {...props} className={classess}>
      {children}
    </button>
  );
}
