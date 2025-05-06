type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: Props) {
  const classess = `px-3 py-2 bg-white outline-none rounded-md placeholder:text-secondry ${className}`;

  return <input {...props} className={classess} />;
}
