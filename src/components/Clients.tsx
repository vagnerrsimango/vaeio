import React from "react";
import Image from "next/image";
import logo1 from "@/lib/img/logo1.png";
import logo2 from "@/lib/img/logo2.png";
import logo3 from "@/lib/img/logo3.png";
import logo4 from "@/lib/img/logo4.png";
import logo5 from "@/lib/img/logo5.png";
import logo6 from "@/lib/img/logo6.png";
import mktech from "@/lib/img/mktech.png";
import GeomeLogo from "@/lib/img/GeomeLogo.svg";
import MJCLogo from "@/lib/img/MJCLogo.svg";

const Clients = () => {
  const allLogos = [GeomeLogo, MJCLogo];

  return (
    <section className=" text-center py-16">
      <p className="text-primary-0 text-4xl font-bold mb-8 md:mb-12">
        CLIENTES
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

export default Clients;
