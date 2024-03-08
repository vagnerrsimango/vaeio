import React from "react";
import Image from "next/image";
import Showcase1 from "@/lib/img/showcase3.svg";
import Button2 from "../Button2";
import Icon4 from "@/lib/img/DropdownIcon.svg";

const HeroC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-10 px-4 md:py-20 md:px-0">
      <div className="text-center md:text-left md:flex md:items-center">
        <div className="md:w-1/2 md:order-2 mb-8 md:mb-0 md:ml-16 md:mr-8">
          <Image src={Showcase1} alt="logo" />
        </div>
        <div className="md:w-1/2 md:order-1 md:ml-20">
          <p className="text-white text-4xl md:text-3xl lg:text-6xl font-outfit font-light mb-4">
            <span className="text-green-100 font-extralight">
              CONSULTORIA FINANCEIRA
            </span>
          </p>
          <div className="flex flex-col items-start">
            <p className="text-white text-4xl md:text-3xl lg:text-3xl font-medium mb-6">
              <span className="text-primary-0 text-left text-3xl font-medium">
                Gestão Financeira Inteligente para sua Empresa
              </span>
            </p>

            <p className="text-green-100 text-center mb-4 md:text-left text-lg md:text-base max-w-md md:max-w-none">
              Oferecemos soluções de consultoria financeira estratégica para
              otimizar a gestão financeira e maximizar os resultados da sua
              empresa.
            </p>
            <Button2 type="button" title="Saber Mais" icon={Icon4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroC;
