import Image from "next/image";

export default function Landing() {
  return (
    <section
      id="landing"
      className="h-[30dvh] sm:h-[40dvh] md:h-[50dvh] lg:h-[calc(100dvh-4rem)] relative"
    >
      <Image
        src="/images/landing.jpg"
        alt="wooden cubes with faces on them"
        quality={100}
        sizes="100vw"
        fill
      />
      <div className="absolute font-black italic text-center text-primary text-xl top-5 left-7 sm:text-3xl sm:top-12 sm:left-15 md:text-4xl md:top-25 md:left-20 lg:text-5xl lg:top-30 lg:left-30">
        <h2 className="mb-1 sm:mb-2 md:mb-4 lg:mb-6">Together</h2>
        <h2>We Can Overcome</h2>
      </div>
    </section>
  );
}
