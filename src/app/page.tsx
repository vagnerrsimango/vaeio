import React from "react";
import Hero from "@/components/Hero";
import Guide from "@/components/Guide";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import HeroPrimula from "@/components/HeroPrimula";
import GuidePrimula from "@/components/GuidePrimula";

export default function Home() {
  return (
    <>
      <div className="flex-grow">
        <HeroPrimula />
        <GuidePrimula />
        {/* <Portfolio />
        <Clients /> */}
      </div>
    </>
  );
}
