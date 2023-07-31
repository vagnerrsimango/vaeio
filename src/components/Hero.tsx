import React from "react";
import Image from "next/image";
import Vector from "@/lib/img/vector.png";

const Hero = () => {
  return (
    <section className="bg-primary-500 py-8 md:py-12 h-[500px] animated fadeIn">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center px-6">
          <div className="flex items-center">
            <Image src={Vector} width={50} height={50} alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
