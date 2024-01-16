"use client";
import React from "react";

import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import ScrollTop from "@/components/ScrollToTop";
export default function Home() {
  return (
    <div>
      <Hero />
      <Guide />
      <Portfolio />
      <ScrollTop />
      <Clients />
    </div>
  );
}
