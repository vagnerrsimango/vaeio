import React, { useState } from "react";
import GeomeLogo from "@/lib/img/GeomeLogo.svg";
import MJCLogo from "@/lib/img/MJCLogo.svg";
import Queemo from "@/lib/img/Queemo.svg";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [filter, setFilter] = useState("all"); // State for filtering
  const projects = [
    {
      title: "Geome",
      description:
        "Geome é uma aplicação de rastreamento desenvolvida para fornecer uma solução eficaz e inteligente para o rastreamento de dados. Com recursos avançados e uma interface amigável, permite monitorar e analisar dados com precisão e em tempo real.",
      image: GeomeLogo,
      category: "pages",
      link: "/geome",
      details:
        "Geome foi desenvolvido utilizando React.js e Node.js. Ele inclui recursos como monitoramento de dados em tempo real, painéis personalizáveis e gerenciamento de usuários.",
      photos: [GeomeLogo, Queemo, MJCLogo],
    },
    {
      title: "Manjacacizano",
      description:
        "Manjacaziano é um sistema de vendas desenvolvido para uma barbearia, oferecendo uma solução completa para gerenciamento de vendas, estoque e clientes. Com uma interface intuitiva e funcionalidades avançadas, permite que a barbearia atenda às necessidades dos clientes de forma eficiente e organizada.",
      image: MJCLogo,
      category: "apps",
      link: "/manjacacizano",
      details:
        "Manjacacizano é uma aplicação web construída utilizando React.js e MongoDB. Inclui recursos como gerenciamento de estoque, banco de dados de clientes e análise de vendas.",
      photos: [GeomeLogo, Queemo, MJCLogo],
    },
    {
      title: "Quizmo",
      description:
        "Quizmo é uma aplicação de quiz que oferece uma ampla variedade de quizzes divertidos e interativos para usuários de todas as idades. Com uma interface amigável e cativante, o Quizmo proporciona uma experiência de aprendizado e entretenimento enquanto desafia os usuários a testarem seus conhecimentos em diversos temas.",
      image: Queemo,
      category: "apps",
      link: "/quizmo",
      details:
        "Quizmo é um aplicativo móvel construído com React Native. Oferece uma vasta biblioteca de quizzes em diversos tópicos, personalização de perfil de usuário e funcionalidade de leaderboard.",
      photos: [GeomeLogo, Queemo, MJCLogo],
    },
  ];

  // Filter projects based on category
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold m-8">
        TRABALHOS DESENVOLVIDOS POR NÓS
      </p>
      {/* Filtering options */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`text-primary-0 filter-btn ${
            filter === "all" && "active"
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter("pages")}
          className={`text-primary-0 filter-btn ${
            filter === "pages" && "active"
          }`}
        >
          Páginas Web
        </button>
        <button
          onClick={() => setFilter("apps")}
          className={`text-primary-0 filter-btn ${
            filter === "apps" && "active"
          }`}
        >
          Aplicativos
        </button>
      </div>
      {/* Grid/gallery of projects with stunning animations */}
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
