import Image from "next/image";

import logoBlack from "@/assets/images/logoBlack.png";

export default function Landing() {
  return (
    <section id="landing" className="h-[calc(100dvh-4rem)] bg-slate-400">
      <Image src={logoBlack} alt="mentally" fill />
    </section>
  );
}
