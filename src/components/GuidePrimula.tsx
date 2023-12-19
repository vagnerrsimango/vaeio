import React from "react";
import Image from "next/image";
import logo2 from "@/lib/img/modlog2.svg";
import Button2 from "./Button2";
import Icon4 from "@/lib/img/DropdownIcon.svg";
import PrimulaCard from "./PrimulaCard";

const GuidePrimula = () => {
  return (
    <section className="bg-gradient-to-r from-purple-200 to-purple-600 min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-green-300 mt-8 text-3xl font-bold mb-4">
        MÓDULOS DO PRIMULA
      </p>
      <p className="text-primary-0">
        Composto por um total de 6 módulos, o prímula te oferece as ferramentas
        indispensáveis para a sua empresa
      </p>

      <div className="grid grid-cols-3 gap-6">
        <PrimulaCard
          icon={logo2}
          borderColor="purple-100"
          title="PRÍMULA"
          subtitle="MÓDULO FINANÇAS"
          description="Fornece às empresas as ferramentas necessárias para gerir eficazmente as suas operações financeiras, monitorizar os fluxos de tesouraria e tomar decisões informadas com base em dados financeiros precisos."
        />

        <PrimulaCard
          icon={logo2}
          borderColor="purple-100"
          title="PRÍMULA"
          subtitle="MÓDULO FINANÇAS"
          description="Fornece às empresas as ferramentas necessárias para gerir eficazmente as suas operações financeiras, monitorizar os fluxos de tesouraria e tomar decisões informadas com base em dados financeiros precisos."
        />

        <PrimulaCard
          icon={logo2}
          borderColor="purple-100"
          title="PRÍMULA"
          subtitle="MÓDULO FINANÇAS"
          description="Fornece às empresas as ferramentas necessárias para gerir eficazmente as suas operações financeiras, monitorizar os fluxos de tesouraria e tomar decisões informadas com base em dados financeiros precisos."
        />

        <PrimulaCard
          icon={logo2}
          borderColor="purple-100"
          title="PRÍMULA"
          subtitle="MÓDULO FINANÇAS"
          description="Fornece às empresas as ferramentas necessárias para gerir eficazmente as suas operações financeiras, monitorizar os fluxos de tesouraria e tomar decisões informadas com base em dados financeiros precisos."
        />
      </div>
    </section>
  );
};

export default GuidePrimula;
