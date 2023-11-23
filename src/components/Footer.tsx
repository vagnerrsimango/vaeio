import React from "react";
import Image from "next/image";
import Button from "./Button";
import LogoWhiteText from "@/lib/img/logotext.svg";
import Showcase2 from "@/lib/img/showcase2.svg";
import Icon1 from "@/lib/img/icon1.svg";
import Icon2 from "@/lib/img/icon2.svg";
import Icon3 from "@/lib/img/icon3.svg";
import Icon4 from "@/lib/img/more.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      {/* Three Columns */}
      <div className="flex justify-around max-container">
        <div className="flex flex-col items-center">
          <Image src={LogoWhiteText} alt="Icon 1" width={172} height={54} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="regular-16 font-bold text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all ">
              Soluções
            </p>

            <p className="regular-10 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all ">
              Prímula
            </p>
            <p className="regular-10 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all ">
              T.I
            </p>
            <p className="regular-10 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all ">
              Consultoria
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center">
          <p className="regular-16 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            Conecta-te à nós
          </p>
        </div>
      </div>

      {/* Additional Footer Content */}
      <div className="mt-4 text-center regular-16 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all ">
        <p>&copy; 2023 VAE.IO. Todos os direitos são reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
