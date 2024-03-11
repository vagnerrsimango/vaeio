"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import GuideIS from "@/components/itsolutions/GuideIS";
import HeroIS from "@/components/itsolutions/HeroIS";
import ScrollTop from "@/components/ScrollToTop";
import PreGuide from "@/components/itsolutions/PreGuide";
import Clients from "@/components/Clients";
import Partners from "@/components/Partners";
import Contacts from "@/components/Contacts";
import bgImage from "@/lib/img/polygonbg.svg";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <HeroIS />
        {/* <PreGuide /> */}
        <GuideIS />
        <Clients />
        <Contacts />
        <ScrollTop />
      </div>
    </>
  );
}
