export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <h2 className="text-primary text-2xl font-bold mb-4">How It Works</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {howItWorks.map((item, index) => (
          <div key={index} className="bg-light p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const howItWorks: {
  title: string;
  description: string;
}[] = [
  {
    title: "Natural Language Processing",
    description:
      "Our AI analyzes your text input to understand emotions and context",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Advanced algorithms detect emotional patterns and mood variations",
  },
  {
    title: "Personalized Response",
    description: "Tailored support based on your unique emotional profile",
  },
];
