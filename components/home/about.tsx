import { Heart } from "../ui/icons";

export default function About() {
  return (
    <section id="about" className="">
      <div className="container mx-auto px-5 md:px-10 py-16 text-center">
        <div className="inline-block p-4 rounded-full bg-light">
          <Heart className="w-10 h-10 align-[-0.125em] fill-primary" />
        </div>
        <h2 className="text-3xl md:text-5xl text-primary font-light mt-6 mb-8">
          Interactive Mental Health
        </h2>
        <p className="md:text-xl leading-relaxed">
          Mentally is a Mental Health Support System which is a 24/7 AI-powered
          platform designed to provide personalized mental health support. It
          uses advanced technologies such as sentiment analysis and smart
          chatbots to analyze emotions and offer tailored recommendations. The
          platform also provides users with tools like meditation exercises,
          group therapy and mental health progress tracking for holistic
          emotional well-being.
        </p>
      </div>
    </section>
  );
}
