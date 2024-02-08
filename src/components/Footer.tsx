import React from "react";
import Image from "next/image";
import LogoWhiteText from "@/lib/img/logotext.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 max-w-[1280px] text-primary-0 text-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4 ml-8">
          <Image src={LogoWhiteText} alt="Icon 1" width={100} height={32} />
        </div>

        <div className="flex items-center space-x-4 ml-auto mr-8">
          <p className="text-sm text-primary-0 hover:font-bold cursor-pointer hidden sm:block ">
            <a href="/terms">Termos e Condições | Cookies</a>
          </p>
          <p className="text-sm hover:font-bold text-primary-0 ">
            &copy; 2023 VAE.IO
          </p>
          <p className="text-sm hover:font-bold text-primary-0 hidden sm:block ">
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
