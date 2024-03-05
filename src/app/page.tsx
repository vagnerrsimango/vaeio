"use client";
import React from "react";
import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import ScrollTop from "@/components/ScrollToTop";
import Chatbot from "@/components/Chatbot";
import Contacts from "@/components/Contacts";
import Partners from "@/components/Partners";
import bgImage from "@/lib/img/mainbg.svg";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <Hero />
      <Guide />
      <Portfolio />
      <Partners />
      <Contacts />
      <ScrollTop />
      <Chatbot />
    </div>
  );
}
