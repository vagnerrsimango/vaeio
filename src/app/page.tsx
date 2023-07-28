import About from "@/components/About";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary-0">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Partner />
      <Stack />
      <About />
      <Footer />
    </div>
  );
}
