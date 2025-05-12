type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className = "", children, ...props }: Props) {
  const classess = `bg-foreground p-6 rounded-xl shadow-xl ${className}`;

  return (
    <div className={classess} {...props}>
      {children}
    </div>
  );
}
