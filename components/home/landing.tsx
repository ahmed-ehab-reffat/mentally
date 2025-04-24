import Image from "next/image";

import landing from "@/assets/images/landing.jpg";

export default function Landing() {
  return (
    <section id="landing" className="h-[calc(100dvh-4rem)] relative">
      <Image
        src={landing}
        alt="wooden cubes with faces on them"
        quality={100}
        sizes="100vh 100vw"
        fill
      />
      <div className="absolute text-5xl font-black italic text-center text-secondry top-30 left-25">
        <h2 className="mb-6">Together</h2>
        <h2>We Can Overcome</h2>
      </div>
    </section>
  );
}
