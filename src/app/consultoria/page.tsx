"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import GuideC from "@/components/consultoria/GuideC";
import HeroC from "@/components/consultoria/HeroC";
import ScrollTop from "@/components/ScrollToTop";
import bgImage from "@/lib/img/polygonbg.svg";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <HeroC />
      <GuideC />
      <ScrollTop />
    </div>
  );
}
