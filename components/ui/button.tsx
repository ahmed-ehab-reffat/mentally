export default function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  let classess;
  if (className) {
    classess = `bg-white px-4 py-2 rounded-md cursor-pointer hover:bg-lighter duration-200 ${className}`;
  } else {
    classess =
      "bg-white px-4 py-2 rounded-md cursor-pointer hover:bg-lighter duration-200";
  }

  return <button {...props} className={classess}></button>;
}
