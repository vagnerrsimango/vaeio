"use client";
import React from "react";

import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import ScrollTop from "@/components/ScrollToTop";
import Chatbot from "@/components/ChatBot";
import Contacts from "@/components/Contacts";
export default function Home() {
  return (
    <div>
      <Hero />
      <Guide />
      <Portfolio />

      <Clients />
      <Contacts />
      <ScrollTop />
      <Chatbot />
    </div>
  );
}
