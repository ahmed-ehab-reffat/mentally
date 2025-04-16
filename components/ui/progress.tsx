type Props = React.ProgressHTMLAttributes<HTMLProgressElement>;

export default function Progress({ value, max = 100 }: Props) {
  return <progress max={max} value={value} className="w-full" />;
}
