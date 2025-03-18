import Link from "next/link";

export default function Chatbot() {
  return (
    <section id="chatbot" className="bg-light py-16">
      <div className="container mx-auto px-4 text-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Start Your Journey to Better Mental Health
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier mind with our interactive
            platform.
          </p>

          <Link
            href="/chat"
            className="bg-white px-8 py-3 text-lg font-bold text-secondry rounded-full shadow-lg cursor-pointer hover:bg-lighter duration-200"
          >
            Try Our Chatbot
          </Link>
        </div>
      </div>
    </section>
  );
}
