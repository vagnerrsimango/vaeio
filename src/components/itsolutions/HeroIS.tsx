import React from "react";
import Image from "next/image";
import Showcase1 from "@/lib/img/showcase.svg";

const HeroIS = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col items-center justify-center py-10 px-4 md:py-20 md:px-0">
      <div className="text-center md:text-left md:flex md:items-center">
        <div className="md:w-1/2 md:order-2 mb-8 md:mb-0 md:ml-16 md:mr-8">
          <Image src={Showcase1} alt="logo" />
        </div>
        <div className="md:w-1/2 md:order-1 md:ml-20">
          <p className="text-white text-4xl md:text-3xl lg:text-6xl font-outfit font-light mb-4">
            <span className="text-green-100 font-extralight">
              SOLUÇÕES DE TECNOLOGIA
            </span>
          </p>
          <div className="flex flex-col items-start">
            <p className="text-white text-4xl md:text-3xl lg:text-3xl font-medium mb-6">
              <span className="text-primary-0 text-left text-3xl font-medium">
                Inovações Tecnológicas para a sua Empresa
              </span>
            </p>

            <p className="text-green-100 text-center md:text-left text-lg md:text-base max-w-md md:max-w-none">
              Desenvolvemos soluções de tecnologia inovadoras para impulsionar o
              crescimento e eficiência das empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIS;
