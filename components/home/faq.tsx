export default function FAQ() {
  return (
    <section id="faq" className="bg-light">
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 capitalize">
          frequently asked questions
        </h2>
        <ul className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border border-gray-700 mb-4 rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 hover:bg-lighter transition-colors">
                <span className="text-left">{faq.question}</span>
              </div>
              <div className="px-6 pb-4 pt-2">{faq.answer}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const faqs: { question: string; answer: string }[] = [
  {
    question: "How does the AI analysis work?",
    answer:
      "Our AI system uses advanced natural language processing to analyze your responses and emotional patterns, providing personalized support and recommendations based on your unique situation.",
  },
  {
    question: "Are the group therapy sessions confidential?",
    answer:
      "Yes, all group therapy sessions are completely confidential and moderated by licensed professionals. We maintain strict privacy standards to ensure a safe space for all participants.",
  },
  {
    question: "How often should I use the platform?",
    answer:
      "We recommend regular check-ins, ideally daily or weekly, to get the most benefit from the platform. However, you can use it as frequently as you need based on your personal circumstances.",
  },
  {
    question: "Can I track my progress over time?",
    answer:
      "Yes, our platform provides detailed progress tracking through personalized insights, charts, and regular assessment reports to help you monitor your mental health journey.",
  },
];
