import React from "react";
import Image from "next/image";
import trackPNG from "@/lib/img/trackingfake.png";
import Icon4 from "@/lib/img/DropdownIcon.svg";
import Button2 from "./Button2";

const Portfolio = () => {
  return (
    <section className=" min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold mb-8">
        TRABALHOS DESENVOLVIDOS POR NÓS
      </p>

      <div className="flex flex-col sm:flex-row mt-8 p-8">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="w-full sm:w-auto aspect-w-1 aspect-h-1">
            <Image
              className="object-cover w-full h-full"
              src={trackPNG}
              alt="Portfolio Work"
            />
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-8 mt-4 sm:mt-0">
          <div className="flex flex-col items-start">
            <p className="text-primary-0 text-3xl mb-4">GEOME</p>
            <p className="text-primary-0 mb-4 text-left">
              Geome é uma aplicação de tracking desenvolvida para fornecer uma
              solução eficaz e inteligente para rastreamento de dados. Com
              recursos avançados e uma interface amigável, permite monitorar e
              analisar dados de forma precisa e em tempo real.
            </p>
            <Button2 type="button" title="Saber Mais" icon={Icon4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
