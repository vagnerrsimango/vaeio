import React from "react";
import Image from "next/image";
import Logos from "@/lib/img/logos.svg";

const HeroPrimula = () => {
  return (
    <section className="bg-gradient-to-r min-h-screen from-blue-500 to-blue-700 flex flex-col justify-center py-10 px-4 lg:px-0">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-28">
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <p className="text-white text-3xl lg:text-6xl font-bold font-outfit mb-4">
            <span className="text-green-100 font-extralight">
              GESTÃO DE NEGÓCIOS
            </span>
          </p>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-white text-3xl lg:text-4xl font-medium mb-4">
              <span className="text-primary-0 font-medium">Pequenas</span>
            </p>
            <p className="text-white text-3xl lg:text-4xl font-medium mb-4">
              <span className="text-primary-0 font-medium">Médias</span>
            </p>
            <p className="text-white text-3xl lg:text-4xl font-medium mb-8">
              <span className="text-primary-0 font-medium">Empresas</span>
            </p>
            <p className="text-green-100 text-xs md:text-base">
              O Prímula é uma plataforma de gestão de negócios desenvolvida para
              pequenas e médias empresas.
            </p>
          </div>
        </div>
        {/* <div className="lg:w-1/2 flex justify-center">
          <div className="max-w-md">
            <Image src={Logos} alt="logo" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroPrimula;
