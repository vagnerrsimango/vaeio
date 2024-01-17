"use client";
import React from "react";
import { FaCogs, FaDesktop, FaGlobe, FaMobileAlt } from "react-icons/fa";
import "animate.css";
import PrimulaCard from "./ISCard";
import logo1 from "@/lib/img/modlog1.svg";
import logo2 from "@/lib/img/modlog2.svg";
import logo3 from "@/lib/img/modlog3.svg";
import logo4 from "@/lib/img/modlog4.svg";
import Icon4 from "@/lib/img/DropdownIcon.svg"; // Assuming this is the icon for "Saber Mais" button

const GuideIT = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 flex flex-wrap justify-center items-center text-primary-0 mb-6 transition-all duration-300">
      <div className="grid grid-cols-3 gap-6">
        <PrimulaCard
          icon={{ src: logo1, width: 40, height: 40 }}
          borderColor="yellow"
          title="Websites Comerciais"
          subtitle="& Corporativos"
          description="Desenvolvemos websites modernos e atrativos para empresas comerciais e corporativas, proporcionando uma presença online impactante."
        />

        <PrimulaCard
          icon={{ src: logo2, width: 40, height: 40 }}
          borderColor="green"
          title="Aplicativos para"
          subtitle="Celulares"
          description="Crie experiências móveis excepcionais com nossos aplicativos personalizados, desenvolvidos para atender às suas necessidades específicas e encantar seus usuários."
        />

        <PrimulaCard
          icon={{ src: logo3, width: 40, height: 40 }}
          borderColor="blue"
          title="Sistemas de Gestão para"
          subtitle="Empresas"
          description="Optimize a eficiência e organização de sua empresa com nossos sistemas de gestão personalizados, projetados para simplificar processos e impulsionar a produtividade."
        />

        <PrimulaCard
          icon={{ src: logo4, width: 40, height: 40 }}
          borderColor="purple"
          title="Arquitetura de"
          subtitle="Softwares"
          description="Construímos arquiteturas de software robustas e escaláveis, adaptadas às suas necessidades, para garantir um desempenho excepcional e uma base sólida para o crescimento futuro."
        />
      </div>
    </section>
  );
};

export default GuideIT;
