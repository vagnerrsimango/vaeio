import React from "react";

import GeomeLogo from "@/lib/img/GeomeLogo.svg";
import MJCLogo from "@/lib/img/MJCLogo.svg";
import Queemo from "@/lib/img/Queemo.svg";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "Geome",
      description:
        "Geome é uma aplicação de rastreamento desenvolvida para fornecer uma solução eficaz e inteligente para o rastreamento de dados. Com recursos avançados e uma interface amigável, permite monitorar e analisar dados com precisão e em tempo real.",
      image: GeomeLogo, // Substitua pelo caminho real da imagem
      link: "/geome", // Substitua pelo link real
    },
    {
      title: "Manjacacizano",
      description:
        "Manjacaziano é um sistema de vendas desenvolvido para uma barbearia, oferecendo uma solução completa para gerenciamento de vendas, estoque e clientes. Com uma interface intuitiva e funcionalidades avançadas, permite que a barbearia atenda às necessidades dos clientes de forma eficiente e organizada.",
      image: MJCLogo, // Substitua pelo caminho real da imagem
      link: "/geome", // Substitua pelo link real
    },
    {
      title: "Quizmo",
      description:
        "Quizmo é uma aplicação de quiz que oferece uma ampla variedade de quizzes divertidos e interativos para usuários de todas as idades. Com uma interface amigável e cativante, Quizmo proporciona uma experiência de aprendizado e entretenimento enquanto desafia os usuários a testarem seus conhecimentos em diversos temas.",
      image: Queemo, // Substitua pelo caminho real da imagem
      link: "/geome", // Substitua pelo link real
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold m-8">
        TRABALHOS DESENVOLVIDOS POR NÓS
      </p>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
