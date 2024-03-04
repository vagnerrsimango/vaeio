import React from "react";
import Image from "next/image";
import Circles from "@/lib/img/circles+icons.svg";
import "@/app/styles/animations.css";

const Hero = () => {
  return (
    <section className="  container items-center justify-center flex flex-col py-10 pb-4 md:gap-28 lg:py-20 xl:flex-row animate-fade-in-up">
      <div className="flex justify-center align-middle transition-all duration-500 transform-gpu hover:scale-105 ">
        <Image
          src={Circles}
          alt="logo"
          layout="responsive"
          width={300}
          height={300}
          className="sm:w-300 sm:h-300 md:w-500 md:h-500"
        />
      </div>
    </section>
  );
};

export default Hero;
