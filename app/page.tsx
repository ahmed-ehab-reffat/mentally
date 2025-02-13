import Image from "next/image";

import landing from "@/assets/images/landing.jpg";

export default function Home() {
  return (
    <main className="">
      <div id="landing" className="relative h-screen">
        <Image
          src={landing}
          alt="wooden cubes with faces on them"
          className="h-full  w-full"
        />
        <div className="absolute text-5xl font-bold italic text-center text-coral top-20 left-24">
          <h2 className="mb-6">Together</h2>
          <h2>We Can Overcome</h2>
        </div>
      </div>
      <div id="showcase" className="mx-32 my-24 text-center text-lg">
        <p>
          Mentally is an Interactive Mental Health Support System which is a
          24/7 AI-powered platform designed to provide personalized mental
          health support. It uses advanced technologies such as sentiment
          analysis and smart chatbots to analyze emotions and offer tailored
          recommendations. The platform also provides users with tools like
          meditation exercises and mental health progress tracking for holistic
          emotional well-being.
        </p>
      </div>
      <div id="contact"></div>
    </main>
  );
}
