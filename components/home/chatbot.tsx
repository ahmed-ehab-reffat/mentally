import Link from "next/link";

export default function Chatbot() {
  return (
    <section id="chatbot" className="bg-light py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Start Your Journey to Better Mental Health
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier mind with our interactive
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/chat"
              className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
            >
              Try Our Chatbot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
