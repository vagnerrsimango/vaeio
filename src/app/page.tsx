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
import Guide from "@/components/Guide";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <>
      <Hero />
      <Guide />
      <Portfolio />
      <Clients />
    </>
  );
}
