import React from "react";
import Image from "next/image";
import GeomeLogo from "@/lib/img/GeomeLogo.svg";
import MJCLogo from "@/lib/img/MJCLogo.svg";
import mktech from "@/lib/img/mktech.png";
import conedarte from "@/lib/img/conedarte.png";

const Partners = () => {
  const allLogos = [mktech];

  return (
    <section className=" text-center py-16">
      <p className="text-primary-0 text-4xl font-bold mb-8 md:mb-12">
        NOSSOS PARCEIROS
      </p>
      {/* <p className="text-white text-lg mx-auto max-w-md mb-8 md:mb-12">
        Trabalhamos em parceria com diversas empresas de todos os portes,
        ajudando-as a alcançar seus objetivos e elevar suas marcas ao próximo
        nível.
      </p> */}

      <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center">
        {allLogos.map((logo, index) => (
          <div key={index} className="flex items-center mx-2 mt-4 md:mt-0">
            <Image
              src={logo}
              alt="Logo da empresa"
              className="m-1 w-32 h-32 transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
