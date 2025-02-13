import Image from "next/image";

import landing from "@/assets/images/landing.jpg";

export default function Landing() {
  return (
    <div id="landing" className="relative h-screen">
      <Image
        src={landing}
        alt="wooden cubes with faces on them"
        className="h-full  w-full"
      />
      <div className="absolute text-5xl font-bold italic text-center text-secondry top-30 left-25">
        <h2 className="mb-6">Together</h2>
        <h2>We Can Overcome</h2>
      </div>
    </div>
  );
}
