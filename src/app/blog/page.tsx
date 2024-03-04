"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroBlog from "@/components/blog/HeroBlog";
import FooterBlog from "@/components/blog/FooterBlog";
import GuideBlog from "@/components/blog/GuideBlog";
import ScrollTop from "@/components/ScrollToTop";
import bgImage from "@/lib/img/blog.svg";

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
        <HeroBlog />
        <GuideBlog />
        <ScrollTop />
      </div>
    </>
  );
}
