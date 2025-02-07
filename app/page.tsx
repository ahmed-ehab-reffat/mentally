import Image from "next/image";

import landing from "@/assets/images/landing.jpg";

export default function Home() {
  return (
    <main className="">
      <Image src={landing} alt="logo" />
    </main>
  );
}
