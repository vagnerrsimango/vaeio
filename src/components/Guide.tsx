import React from "react";
import Image from "next/image";
import Button from "./Button";
import Logo from "@/lib/img/vaeio.png";
import Showcase2 from "@/lib/img/showcase2.svg";
import Icon1 from "@/lib/img/icon1.svg";
import Icon2 from "@/lib/img/icon2.svg";
import Icon3 from "@/lib/img/icon3.svg";
import Icon4 from "@/lib/img/more.svg";

const Guide = () => {
  return (
    <section className="bg-blue-500 h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold">
        CONHEÇA AS SOLUÇÕES PARA O SEU NEGÓCIO
      </p>

      <div className="flex w-full mt-8">
        <div className="flex flex-col justify-center items-center w-1/2 p-8 pr-8">
          <div className="flex justify-between mb-6">
            <Button type="button" title="Prímula" icon={Icon1} />
            <Button type="button" title="Soluções TI" icon={Icon2} />
            <Button type="button" title="Consultoria" icon={Icon3} />
          </div>

          <p className="text-primary-0 font-bold mb-6">O Que É Prímula?</p>
          <p className="text-primary-0 mb-6">
            O Prímula é uma plataforma de gestão de negócios desenvolvida para
            pequenas e médias empresas.
          </p>
          <p className="text-primary-0 font-bold mb-6">Principais Módulos</p>
          <p className="text-primary-0 mb-6">
            Compras | POS | Comercial | Recursos Humanos | Contabilidade |
            Finanças
          </p>
          <Button type="button" title="Saber Mais" icon={Icon4} />
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-8 ml-auto">
          {/* Just the logo for now */}
          <Image src={Showcase2} alt="logo" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Guide;
