import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import author from "@/lib/img/miacouto.jpg";
import bgImage from "@/lib/img/blog2.svg";

const ExpandedBlogPage = ({ post }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        width: "100%",
        height: "100%",
      }}
      className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8"
    >
      <div className="max-w-4xl w-full px-4 pt-16">
        {/* Imagem do Blog */}
        <div className="relative h-96 mb-8">
          <Image
            src={author}
            alt="Artigo do Blog"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Conteúdo do Blog */}
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
          {/* Título do Blog */}
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            A Importância da Cibersegurança e Compreensão dos Seus Riscos
          </h2>
          {/* Meta do Blog */}
          <div className="flex items-center text-gray-600 mb-4">
            <FaUser className="mr-1" />
            <span>Vagner Caetano Simango</span>
          </div>
          {/* Data do Blog */}
          <p className="text-sm text-gray-500 mb-4">4 de Março de 2024</p>
          {/* Conteúdo do Blog */}
          <p className="text-gray-700 mb-4">
            A cibersegurança é um aspecto crucial da vida moderna, impactando
            indivíduos, empresas e governos. Com a crescente dependência de
            tecnologias digitais e da internet, a importância da cibersegurança
            não pode ser subestimada.
          </p>
          <p className="text-gray-700 mb-4">
            Um dos principais riscos dos ataques de cibersegurança é o roubo de
            dados. Hackers e criminosos cibernéticos frequentemente visam
            informações sensíveis, como dados pessoais, registros financeiros e
            propriedade intelectual. Um roubo de dados pode ter consequências
            graves, incluindo perda financeira, danos à reputação e ramificações
            legais.
          </p>
          <p className="text-gray-700 mb-4">
            Outro risco significativo é a interrupção da infraestrutura e
            serviços críticos. Ataques cibernéticos direcionados a sistemas
            essenciais, como redes elétricas, redes de transporte e instalações
            de saúde, podem ter consequências de longo alcance, impactando a
            segurança pública e a segurança nacional.
          </p>
          <p className="text-gray-700 mb-4">
            Além disso, as ameaças de cibersegurança continuam a evoluir, com os
            agressores empregando táticas e técnicas cada vez mais sofisticadas.
            Desde golpes de phishing e ataques de malware até ransomware e
            ataques de negação de serviço distribuído (DDoS), as organizações
            devem permanecer vigilantes e proativas na defesa contra ameaças
            cibernéticas.
          </p>
          <p className="text-gray-700 mb-4">
            Em conclusão, a cibersegurança é essencial para proteger indivíduos,
            empresas e a sociedade como um todo dos riscos apresentados pelas
            ameaças cibernéticas. Ao compreender a importância da cibersegurança
            e adotar medidas proativas para mitigar os riscos, podemos garantir
            um ambiente digital mais seguro para todos.
          </p>
          {/* Botão de Voltar */}
          <Link href="/blog">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Voltar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpandedBlogPage;
