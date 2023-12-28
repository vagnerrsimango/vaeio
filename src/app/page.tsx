"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import HeroPrimula from "@/components/HeroPrimula";
import GuidePrimula from "@/components/GuidePrimula";
import FooterPrimula from "@/components/FooterPrimula";

export default function Home() {
  return (
    <>
      <div className="flex-grow">
        <Navbar />
        <Hero />
        <Guide />
        <Portfolio />
        <Clients />
        <Footer />
      </div>
    </>
  );
}
