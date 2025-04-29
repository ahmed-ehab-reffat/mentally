import Image from "next/image";

import landing from "@/assets/images/landing.jpg";

export default function Landing() {
  return (
    <section
      id="landing"
      className="h-[calc(40dvh-4rem)] sm:h-[calc(50dvh-4rem)] md:h-[calc(75dvh-4rem)] lg:h-[calc(100dvh-4rem)] relative"
    >
      <Image
        src={landing}
        alt="wooden cubes with faces on them"
        quality={100}
        // sizes="(max-width: 640px) 40vh, (min-width: 640px) 50vh, (min-width: 768px) 75vh, (min-width: 1024px) 100vh"
        fill
      />
      <div className="absolute font-black italic text-center text-secondry text-xl top-5 left-7 sm:text-3xl sm:top-12 sm:left-15 md:text-4xl md:top-25 md:left-20 lg:text-5xl lg:top-30 lg:left-30">
        <h2 className="mb-1 sm:mb-2 md:mb-4 lg:mb-6">Together</h2>
        <h2>We Can Overcome</h2>
      </div>
    </section>
  );
}
