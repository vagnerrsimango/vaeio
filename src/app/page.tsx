import React from "react";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary-0">
      <Navbar />
      <Hero />
      <div className="px-4 py-8">
        <Intro />
        <Services />
        <Partner />
        <Stack />
        <About />
      </div>
      <Footer />
    </div>
  );
}
