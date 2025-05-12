export default function LearnMore() {
  return (
    <section id="learn-more">
      <h2 className="text-primary text-2xl font-bold">Learn More</h2>
      <p className="text-lg mb-4">
        Explore additional resources about mental health and AI technology:
      </p>
      <ul className="pl-8 list-disc text-primary text-lg">
        <li>
          <a
            href="https://www.who.int/health-topics/mental-health"
            className="hover:underline"
          >
            World Health Organization - Mental Health
          </a>
        </li>
        <li>
          <a href="https://www.aiinhealthcare.com" className="hover:underline">
            AI in Healthcare
          </a>
        </li>
      </ul>
    </section>
  );
}
