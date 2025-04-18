export default function Benefits() {
  return (
    <section id="benefits">
      <h2 className="text-primary text-2xl font-bold mb-4">
        Benefits of Group Therapy
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-light p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
const benefits: {
  title: string;
  description: string;
}[] = [
  {
    title: "Shared Experiences",
    description: "Connect with others who understand your journey",
  },
  {
    title: "Professional Guidance",
    description: "Sessions led by licensed mental health professionals",
  },
  {
    title: "Safe Environment",
    description: "A supportive and confidential space to share and heal",
  },
];
