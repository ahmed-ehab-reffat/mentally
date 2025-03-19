export default function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  let classess =
    "bg-white text-secondry px-4 py-2 rounded-md cursor-pointer hover:bg-lighter duration-200 ";
  if (className) {
    classess += className;
  }

  return <button {...props} className={classess}></button>;
}
