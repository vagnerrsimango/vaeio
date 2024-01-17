"use client";
import React, { useState, useEffect } from "react";
import cover from "@/lib/img/impdigital.jpg";
import hackathon from "@/lib/img/hackathon.jpg";
import Image from "next/image";
import Button3 from "../Button3";
import Icon4 from "@/lib/img/DropdownIcon.svg";
import "animate.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GuideBlog = () => {
  const [currentImage, setCurrentImage] = useState(cover);
  const [title, setTitle] = useState(
    "Jovem Moçambicano Desenvolve Tecnologia 3D Para Impressão de Peças de Veículos"
  );
  const [tags, setTags] = useState("#Destaque #Nacional");

  useEffect(() => {
    const handleScroll = () => {
      const textContainer = document.getElementById("textContainer");
      const isVisible =
        textContainer.getBoundingClientRect().top < window.innerHeight;

      textContainer.classList.toggle("animate__animated", isVisible);
      textContainer.classList.toggle("animate__fadeIn", isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === cover ? hackathon : cover));
      setTitle((prevTitle) =>
        prevTitle ===
        "Jovem Moçambicano Desenvolve Tecnologia 3D Para Impressão de Peças de Veículos"
          ? "Moçambique participa de Hackathon na Guiné-Equatorial"
          : "Jovem Moçambicano Desenvolve Tecnologia 3D Para Impressão de Peças de Veículos"
      );
      setTags((prevTags) =>
        prevTags === "#Destaque #Nacional"
          ? "#Inovação #Tecnologia #Hackathon"
          : "#Destaque #Nacional"
      );
    }, 5000); // Change image every 5 seconds

    // Clear interval on unmount
    return () => clearInterval(intervalId);
  }, [currentImage]);

  const switchImage = () => {
    setCurrentImage((prevImage) => (prevImage === cover ? hackathon : cover));
    setTitle((prevTitle) =>
      prevTitle ===
      "Jovem Moçambicano Desenvolve Tecnologia 3D Para Impressão de Peças de Veículos"
        ? "Moçambique participa de Hackathon na Guiné-Equatorial"
        : "Jovem Moçambicano Desenvolve Tecnologia 3D Para Impressão de Peças de Veículos"
    );
    setTags((prevTags) =>
      prevTags === "#Destaque #Nacional"
        ? "#Inovação #Tecnologia #Hackathon"
        : "#Destaque #Nacional"
    );
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-wrap justify-center items-center text-primary-0 mb-6 transition-all duration-300">
        <Button3
          type="button"
          title="Tecnologia"
          className="mb-4 mr-6"
          icon={Icon4}
        />
        <Button3
          type="button"
          title="Ensino Superior"
          className="mb-4 mr-6"
          icon={Icon4}
        />
        <Button3
          type="button"
          title="Mercado de Emprego"
          className="mb-4 mr-6"
          icon={Icon4}
        />
        <Button3
          type="button"
          title="Vídeos"
          className="mb-4 mr-6"
          icon={Icon4}
        />
      </div>

      <div className="relative">
        <Image
          src={currentImage}
          alt="Digital Impact"
          className="rounded-lg w-full h-auto mb-20 animate__animated animate__fadeIn"
        />
        <div
          id="textContainer"
          className="absolute text-primary-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>
          <p className="text-sm font-light text-white">{tags}</p>
        </div>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <FaChevronLeft size={30} color="white" onClick={switchImage} />
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <FaChevronRight size={30} color="white" onClick={switchImage} />
        </div>
      </div>
    </section>
  );
};

export default GuideBlog;
