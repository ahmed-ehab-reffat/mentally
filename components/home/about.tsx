// import { Heart } from "../ui/icons";

export default function About() {
  return (
    <section id="about" className="">
      <div className="container mx-auto px-5 md:px-10 py-16 text-center">
        {/* <div className="inline-block p-3 rounded-full bg-light">
          <Heart className="w-8 h-8 fill-primary" />
        </div> */}
        <h2 className="text-3xl md:text-5xl text-primary mt-4 mb-8">
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
