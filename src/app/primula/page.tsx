import React from "react";
import Navbar from "@/components/Navbar";
import HeroPrimula from "@/components/primula/HeroPrimula";
import GuidePrimula from "@/components/primula/GuidePrimula";
import FooterPrimula from "@/components/primula/FooterPrimula";

export default function Home() {
  return (
    <>
      <HeroPrimula />
      <GuidePrimula />
    </>
  );
}
