import React from "react";
import HeroBlog from "@/components/blog/HeroBlog";
import GuideBlog from "@/components/blog/GuideBlog";
import ScrollTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <HeroBlog />
        <GuideBlog />
        <ScrollTop />
      </div>
    </>
  );
}
