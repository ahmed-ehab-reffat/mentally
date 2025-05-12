type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: Props) {
  const classess = `px-3 py-2 bg-surface outline-none rounded-md dark:text-black placeholder:text-primary ${className}`;

  return <input {...props} className={classess} />;
}
