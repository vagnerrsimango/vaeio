import React from "react";
import Navbar from "@/components/Navbar";
import HeroPrimula from "@/components/HeroPrimula";
import GuidePrimula from "@/components/GuidePrimula";
import FooterPrimula from "@/components/FooterPrimula";

export default function Home() {
  return (
    <>
      <div className="flex-grow">
        <Navbar />
        <HeroPrimula />
        <GuidePrimula />
        <FooterPrimula />
      </div>
    </>
  );
}
