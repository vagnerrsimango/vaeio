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
        className="bg-gradient-to-r from-blue-300 to-blue-500"
        style={{
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
