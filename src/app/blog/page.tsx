import React from "react";
import Navbar from "@/components/Navbar";
import HeroBlog from "@/components/blog/HeroBlog";
import FooterBlog from "@/components/blog/FooterBlog";
import GuideBlog from "@/components/blog/GuideBlog";

export default function Home() {
  return (
    <>
      <HeroBlog />
      <GuideBlog />
    </>
  );
}
