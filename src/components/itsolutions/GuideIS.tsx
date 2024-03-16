import React from "react";
import {
  FaGlobe,
  FaEnvelope,
  FaDesktop,
  FaMobileAlt,
  FaTasks,
} from "react-icons/fa";
import ServiceCard from "../ServiceCard";

const GuideIT = () => {
  const features = [
    {
      title: "Design Personalizado",
      description:
        "Criamos websites que não apenas impressionam visualmente, mas também refletem a identidade e os valores da sua marca.",
    },
    {
      title: "Funcionalidades Avançadas",
      description:
        "Implementamos recursos avançados, como e-commerce, formulários personalizados, integração de redes sociais e muito mais, para melhorar a experiência do usuário e impulsionar as conversões.",
    },
    {
      title: "Optimização para Mecanismos de Busca (SEO)",
      description:
        "Utilizamos as melhores práticas de SEO para garantir que seu site seja facilmente encontrado pelos motores de busca, aumentando assim sua visibilidade online.",
    },
  ];
  return (
    <section className="p-10">
      <p className="text-primary-0 text-3xl text-center mb-16 font-bold animate__animated animate__fadeIn">
        CONHEÇA AS NOSSAS SOLUÇÕES PARA A SUA EMPRESA
      </p>
      <div className="max-w-5xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard
          icon={<FaGlobe className="text-4xl text-white" />}
          title="Desenvolvimento de Websites"
          description="Nosso serviço de Desenvolvimento de Websites é projetado sob medida para
          atender às necessidades específicas do seu negócio, uma oportunidade única para impulsionar sua
          presença online e alcançar seus objetivos comerciais com mais eficácia."
          technologies={["HTML", "CSS", "JavaScript", "Next.js"]}
          features={[
            {
              title: "Design Personalizado",
              description:
                "Criamos websites que não apenas impressionam visualmente, mas também reflectem a identidade e os valores da sua marca.",
            },
            {
              title: "Optimização para Mecanismos de Busca (SEO)",
              description:
                "Utilizamos as melhores práticas de SEO para garantir que seu site seja facilmente encontrado pelos motores de busca, aumentando assim sua visibilidade online.",
            },
            {
              title: "Responsividade e Compatibilidade",
              description:
                "Nossos websites são totalmente responsivos e compatíveis com uma variedade de dispositivos e navegadores, garantindo uma experiência consistente para todos os usuários.",
            },
            {
              title: "Suporte Contínuo",
              description:
                "Oferecemos suporte técnico contínuo para garantir que seu site funcione perfeitamente e permaneça actualizado com as últimas tecnologias.",
            },
          ]}
        />
        <ServiceCard
          icon={<FaEnvelope className="text-4xl text-white" />}
          title="E-mails Corporativos"
          description="Nosso serviço de fornecimento de e-mails corporativos oferece uma solução completa e personalizada para as necessidades de comunicação das empresas. Com uma abordagem profissional e confiável, ajudamos as empresas a estabelecerem uma presença digital sólida e aprimorarem sua imagem de marca."
          technologies={["Gmail", "Outlook"]}
          features={[
            {
              title: "Endereços Personalizados",
              description:
                "Crie e-mails com o domínio da sua empresa ([seu_nome]@[sua_empresa].com), transmitindo uma imagem profissional e confiável.",
            },
            {
              title: "Segurança Avançada",
              description:
                "Proteja sua comunicação com criptografia SSL, autenticação de dois fatores e filtros antispam, garantindo a confidencialidade e integridade dos seus dados.",
            },
            {
              title: "Recursos de Produtividade",
              description:
                "Acesse e-mails, calendários, contatos e documentos em qualquer dispositivo, facilitando a colaboração e o trabalho em equipe.",
            },
            {
              title: "Suporte Técnico Especializado",
              description:
                "Conte com nossa equipe de especialistas para configuração, manutenção e suporte técnico contínuo, garantindo um funcionamento sem problemas do seu sistema de e-mails.",
            },
          ]}
        />

        <ServiceCard
          icon={<FaTasks className="text-4xl text-white" />}
          title="Desenvolvimento de Sistemas de Gestão"
          description="Nosso serviço de Desenvolvimento de Sistemas de Gestão é projetado para fornecer soluções tecnológicas personalizadas e eficientes que atendam às necessidades específicas da sua empresa. Por meio de uma abordagem consultiva e colaborativa, trabalhamos em estreita colaboração com você para entender os processos internos."
          technologies={["Java", "Python", "Laravel"]}
          features={[
            {
              title: "Soluções Personalizadas",
              description:
                "Desenvolvemos sistemas sob medida para atender às necessidades específicas da sua empresa, garantindo uma integração perfeita com seus processos existentes.",
            },
            {
              title: "Automatização Inteligente",
              description:
                "Automatizamos tarefas manuais e repetitivas, reduzindo erros e aumentando a eficiência operacional.",
            },
            {
              title: "Centralização de Dados",
              description:
                "Centralizamos informações em um único sistema, facilitando o acesso e compartilhamento de dados entre departamentos e equipes.",
            },
            {
              title: "Análise de Dados Avançada",
              description:
                "Implementamos recursos avançados de análise de dados para fornecer insights valiosos sobre o desempenho do seu negócio e auxiliar na tomada de decisões estratégicas.",
            },
            {
              title: "Escalabilidade e Flexibilidade",
              description:
                "Nossas soluções são escaláveis e flexíveis, permitindo que cresçam e se adaptem conforme as necessidades do seu negócio evoluem.",
            },
          ]}
        />

        <ServiceCard
          icon={<FaMobileAlt className="text-4xl text-white" />}
          title="Desenvolvimento de Aplicativos Mobile"
          description="Nosso serviço de Desenvolvimento de Aplicativos Mobile oferece uma solução completa e personalizada para empresas que desejam alcançar e engajar seus clientes por meio de dispositivos móveis. Combinando expertise técnica e criatividade, trabalhamos em estreita colaboração com nossos clientes para transformar suas ideias em aplicativos funcionais e impactantes."
          technologies={["React Native", "Flutter", "Swift", "Kotlin/Java"]}
          features={[
            {
              title: "Consultoria Especializada",
              description:
                "Trabalhamos em estreita colaboração com você para entender suas necessidades e objetivos, oferecendo orientação especializada para transformar sua ideia em um aplicativo mobile de sucesso.",
            },
            {
              title: "Design Personalizado",
              description:
                "Criamos interfaces de usuário intuitivas e atraentes que cativam e retêm os usuários, garantindo uma experiência memorável em cada interação.",
            },
            {
              title: "Desenvolvimento Ágil",
              description:
                "Utilizamos metodologias ágeis para desenvolver aplicativos rapidamente, permitindo que você entre no mercado mais rapidamente e teste suas ideias com o público-alvo.",
            },
            {
              title: "Compatibilidade Multiplataforma",
              description:
                "Desenvolvemos aplicativos para iOS e Android, garantindo que você alcance uma ampla base de usuários em diferentes dispositivos e sistemas operacionais.",
            },
            {
              title: "Manutenção e Suporte Contínuo",
              description:
                "Oferecemos serviços de manutenção e suporte contínuo para garantir que seu aplicativo funcione perfeitamente e permaneça atualizado com as últimas tecnologias e tendências do mercado.",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default GuideIT;
