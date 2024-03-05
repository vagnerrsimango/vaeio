"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button3 from "../Button3";
import { FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";
import BlogCard from "./BlogCard";
import author from "@/lib/img/cybersecurity.jpeg";
import Link from "next/link";
import ArticleModal from "../ArticleModal";

const GuideBlog = () => {
  const [showModal, setShowModal] = useState(false);

  // Sample blog data
  const blogData = [
    {
      id: 1,
      title: "A Jornada da Inovação",
      author: "Elon Musk",
      date: "1 de Março de 2024",
      image: author,
      content:
        "O primeiro passo é estabelecer que algo é possível; então a probabilidade ocorrerá.",
    },
    {
      id: 2,
      title: "Abraçando a Mudança",
      author: "Satya Nadella",
      date: "2 de Março de 2024",
      image: author,
      content:
        "A inovação vem da capacidade de correlacionar informações entre diferentes domínios.",
    },
    {
      id: 3,
      title: "O Poder da Tecnologia",
      author: "Steve Jobs",
      date: "3 de Março de 2024",
      image: author,
      content:
        "Design não é apenas como algo se parece e se sente. Design é como funciona.",
    },
    {
      id: 4,
      title: "Construindo o Futuro",
      author: "Jeff Bezos",
      date: "4 de Março de 2024",
      image: author,
      content:
        "Sua marca é o que outras pessoas dizem sobre você quando você não está na sala.",
    },
    {
      id: 4,
      title: "Construindo o Futuro",
      author: "Jeff Bezos",
      date: "4 de Março de 2024",
      image: author,
      content:
        "Sua marca é o que outras pessoas dizem sobre você quando você não está na sala.",
    },
    {
      id: 4,
      title: "Construindo o Futuro",
      author: "Jeff Bezos",
      date: "4 de Março de 2024",
      image: author,
      content:
        "Sua marca é o que outras pessoas dizem sobre você quando você não está na sala.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-8">
      <div className="max-w-6xl w-full px-4">
        {" "}
        {/* Adjusted max-width to 6xl */}
        <h1 className="text-4xl font-bold text-black mb-8">Artigos</h1>
        <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {" "}
          {/* Adjusted grid layout to display 3 cards per row */}
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <Link
          href="/alist"
          className="text-text-green-100 hover:underline mt-4 block cursor-pointer"
        >
          Todos os Artigos
        </Link>
      </div>
    </section>
  );
};

export default GuideBlog;
