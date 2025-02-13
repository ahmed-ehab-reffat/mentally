import Landing from "@/components/home/landing";
import About from "@/components/home/about";
import ContactUs from "@/components/home/contactus";

export default function Home() {
  return (
    <>
      <Landing />
      <main className="bg-section">
        <About />
        <ContactUs />
      </main>
    </>
  );
}
