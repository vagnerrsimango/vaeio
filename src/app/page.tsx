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
export default function Home() {
  return (
    <div>
      <Hero />
      <Guide />
      <Portfolio />
      <Partners />
      <Clients />
      <Contacts />
      <ScrollTop />
      <Chatbot />
    </div>
  );
}
