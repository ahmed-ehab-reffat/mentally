import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logoBlack.png";

export default function Header() {
  return (
    <header className="flex justify-between w-full">
      <Link href="/">
        <Image src={logo} alt="Mental Health Logo" width={100} height={100} />
        Mentally
      </Link>
      <nav>
        <ul></ul>
      </nav>
    </header>
  );
}
