import React from "react";
import Image from "next/image";
import author from "@/lib/img/cybersecurity.jpeg";
import BlogCard from "./BlogCard"; // Assuming BlogCard component is in the same directory

const HighlightSection = () => {
  // Fictional data for demonstration
  const posts = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      author: "John Doe",
      date: "March 1, 2024",
      image: author, // Assuming you have images in the public/images folder
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      title: "Consectetur Adipiscing Elit",
      author: "Jane Doe",
      date: "March 3, 2024",
      image: author, // Assuming you have images in the public/images folder
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      id: 3,
      title: "Ut Labore Et Dolore Magna Aliqua",
      author: "Alice Smith",
      date: "March 5, 2024",
      image: author, // Assuming you have images in the public/images folder
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    },
  ];

  return (
    <section className="min-h-full max-container padding-container flex items-center justify-center flex-col gap-8 py-10 pb-16 md:gap-16 lg:py-20 xl:flex-row min-w-full">
      <div className="mx-auto flex-grow flex flex-col items-center justify-center text-center m-10 md:w-3/4 md:text-left md:flex-row md:items-start md:justify-between md:ml-24">
        <div className="transition-transform duration-1000 transform hover:translate-y-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-green-100 text-3xl md:text-4xl lg:text-4xl font-medium">
              <span className="text-blue-300 md:text-6xl lg:text-6xl font-medium">
                Últimas Notícias
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
