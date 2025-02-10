import Image from "next/image";

import landing from "@/assets/images/landing.jpg";

export default function Home() {
  return (
    <main>
      <div id="landing" className="relative h-[calc(100vh-60px)]">
        <Image
          src={landing}
          alt="wooden cubes with faces on them"
          className="h-full"
        />
        <div className="absolute text-5xl font-bold italic text-center text-coral top-20 left-24">
          <h2 className="mb-6">Together</h2>
          <h2>We Can Overcome</h2>
        </div>
      </div>
    </main>
  );
}
