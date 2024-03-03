"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroPrimula from "@/components/primula/HeroPrimula";
import GuidePrimula from "@/components/primula/GuidePrimula";
import ScrollTop from "@/components/ScrollToTop";
import bgImage from "@/lib/img/stockchart.svg";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0B0F60",
          width: "100%",
          height: "100%",
        }}
      >
        <HeroPrimula />
        <GuidePrimula />
        <ScrollTop />
      </div>
    </>
  );
}
