type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: Props) {
  let classess =
    "bg-white text-secondry font-bold px-4 py-2 rounded-md cursor-pointer hover:bg-lighter duration-200 ";
  if (className) {
    classess += className;
  }

  return (
    <button {...props} className={classess}>
      {children}
    </button>
  );
}
