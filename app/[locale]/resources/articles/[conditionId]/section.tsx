type Props = {
  id: string;
  title: string;
  iterable: string[];
};

export default function Section({ id, title, iterable }: Props) {
  return (
    <section id={id}>
      <h2 className="text-primary text-3xl font-bold mb-4 capitalize">
        {title}
      </h2>
      <ul className="list-disc text-xl ltr:ml-10 rtl:mr-10 space-y-2">
        {iterable.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </section>
  );
}
