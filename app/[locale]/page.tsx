import Landing from "@/components/home/landing";
import About from "@/components/home/about";
import Stats from "@/components/home/stats";
import Chatbot from "@/components/home/chatbot";
import Features from "@/components/home/features";
import Resources from "@/components/home/resources";
import Testimonial from "@/components/home/testimonials";
import FAQ from "@/components/home/faq";
import Newsletter from "@/components/home/newsletter";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Stats />
      <Features />
      <Chatbot />
      <Resources />
      <FAQ />
      <Testimonial />
      <Newsletter />
    </>
  );
}
