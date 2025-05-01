import Link from "next/link";
import Button from "../ui/button";

export default function Chatbot() {
  return (
    <section id="chatbot" className="bg-light py-12">
      <div className="container mx-auto px-4 text-center">
        <div>
          <h2 className="text-primary text-4xl font-bold mb-8">
            Start Your Journey to Better Mental Health
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Take the first step towards a healthier mind with our interactive
            platform.
          </p>

          <Link href="/chat">
            <Button className="!px-8 !py-3 text-lg !rounded-full">
              Try Our Chatbot
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
