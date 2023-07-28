import React from "react";
import Image from "next/image";
import Vector from "@/lib/img/vector.png";

const Hero = () => {
  return (
    <section className="bg-primary-500 p-5 h-screen">
      <div className="container flex flex-col-reverse md:flex-row  items-center justify-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 h-full">
        <div className="flex items-center">
          <Image src={Vector} width={50} height={50} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
