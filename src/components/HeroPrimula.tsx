import React from "react";
import Image from "next/image";
import Logos from "@/lib/img/logos.svg";

const HeroPrimula = () => {
  return (
    <section className="min-h-full bg-gradient-to-r from-purple-200 to-purple-400 max-container padding-container flex items-center justify-center flex-col gap-8 py-10 pb-32 md:gap-16 lg:py-20 xl:flex-row min-w-full">
      <div className="mx-auto flex-grow flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <div className="text-center m-10 md:w-1/2 transition-transform duration-1000 transform hover:translate-y-4">
          <p className="text-white text-4xl md:text-3xl lg:text-3xl font-outfit font-light mb-4">
            <span className="text-purple-500 font-extralight">
              GESTÃO DE NEGÓCIOS
            </span>
          </p>
          <div className="flex flex-col items-center">
            {" "}
            {/* New container for centering */}
            <p className="text-white text-4xl md:text-3xl lg:text-3xl font-medium">
              <span className="text-primary-0 text-6xl font-medium">
                Pequenas
              </span>
            </p>
            <p className="text-white text-4xl md:text-3xl lg:text-3xl font-medium">
              <span className="text-primary-0 text-6xl font-medium">
                Médias
              </span>
            </p>
            <p className="text-white text-4xl md:text-3xl mb-8 lg:text-3xl font-medium">
              <span className="text-primary-0 text-6xl font-medium">
                Empresas
              </span>
            </p>
            <p className="text-green-100 text-lg md:text-base w-64 ">
              O QUE É O PRÍMULA?
            </p>
            <p className="text-primary-0 text-xs md:text-base w-64 transition-opacity duration-1000 opacity-0 hover:opacity-100">
              O Prímula é uma plataforma de gestão de negócios desenvolvida para
              pequenas e médias empresas.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center transition-transform duration-1000 transform hover:translate-y-4">
          <Image src={Logos} alt="logo" className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroPrimula;
