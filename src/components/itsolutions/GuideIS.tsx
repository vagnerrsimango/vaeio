import React from "react";
import { FaGlobe, FaEnvelope, FaDesktop, FaMobileAlt } from "react-icons/fa";
import ServiceCard from "../ServiceCard";

const GuideIT = () => {
  return (
    <section className="p-10">
      <p className="text-primary-0 text-3xl text-center mb-16 font-bold animate__animated animate__fadeIn">
        CONHEÇA AS NOSSAS SOLUÇÕES PARA A SUA EMPRESA
      </p>
      <div className="max-w-5xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard
          icon={<FaGlobe className="text-4xl text-white" />}
          title="Desenvolvimento de Websites"
          description="Nosso compromisso é criar websites de alta qualidade que representam a essência de sua marca, atraindo e retendo clientes com design elegante, funcionalidade impecável e experiências envolventes."
          technologies={["HTML", "CSS", "JavaScript", "Next.js"]}
        />
        <ServiceCard
          icon={<FaEnvelope className="text-4xl text-white" />}
          title="E-mails Corporativos"
          description="Fornecemos soluções de email corporativo confiáveis e seguras para fortalecer a comunicação interna e externa da sua empresa. Com suporte especializado e infraestrutura robusta, garantimos a entrega de mensagens de forma eficiente e profissional."
          technologies={["Microsoft Exchange", "Google Workspace"]}
        />
        <ServiceCard
          icon={<FaDesktop className="text-4xl text-white" />}
          title="Desenvolvimento de Sistemas de Gestão"
          description="Desenvolvemos sistemas de gestão personalizados para otimizar seus processos de negócio, aumentar a eficiência operacional e impulsionar o crescimento da sua empresa. Com funcionalidades abrangentes e interface intuitiva, nossos sistemas são projetados para atender às necessidades específicas da sua organização."
          technologies={["Laravel", "React.js"]}
        />
        <ServiceCard
          icon={<FaMobileAlt className="text-4xl text-white" />}
          title="Desenvolvimento de Aplicativos Mobile"
          description="Criamos aplicativos móveis de alta qualidade para ajudar sua empresa a alcançar seu público-alvo onde quer que estejam. Com design moderno, funcionalidades inovadoras e experiência do usuário excepcional, nossos aplicativos são a chave para o sucesso no mercado móvel."
          technologies={["React Native", "Flutter", "Kotlin/Java", "Swift"]}
        />
      </div>
    </section>
  );
};

export default GuideIT;
