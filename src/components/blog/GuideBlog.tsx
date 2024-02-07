"use client";
import React, { useState, useEffect } from "react";
import cover from "@/lib/img/impdigital.jpg";
import hackathon from "@/lib/img/hackathon.jpg";
import Image from "next/image";
import Button3 from "../Button3";
import Icon4 from "@/lib/img/DropdownIcon.svg";
import "animate.css";
import { FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";
import BlogCard from "./BlogCard";
import author from "@/lib/img/miacouto.jpg";

const GuideBlog = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-wrap justify-center">
        {/* <BlogCard
          imageSrc={hackathon}
          date="July 23, 2023"
          tags="Business, Travel"
          borderColor="purple-100"
          title="Your most unhappy costumers are your greatest source of learning."
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          authorIconSrc={author}
          authorName="John Doe"
          authorProfession="Software Engineer"
        />

        <BlogCard
          imageSrc={hackathon}
          date="July 23, 2023"
          tags="Business, Travel"
          borderColor="purple-100"
          title="Your most unhappy costumers are your greatest source of learning."
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          authorIconSrc={author}
          authorName="John Doe"
          authorProfession="Software Engineer"
        />

        <BlogCard
          imageSrc={hackathon}
          date="July 23, 2023"
          tags="Business, Travel"
          borderColor="purple-100"
          title="Your most unhappy costumers are your greatest source of learning."
          description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
          authorIconSrc={author}
          authorName="John Doe"
          authorProfession="Software Engineer"
        /> */}
      </div>
    </section>
  );
};

export default GuideBlog;
