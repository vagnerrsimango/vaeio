import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import author from "@/lib/img/cybersecurity.jpeg";
import bgImage from "@/lib/img/blog2.svg";

const AllArticles = ({ articles }) => {
  // Dummy articles data
  const dummyArticles = [
    {
      id: 1,
      title: "A Importância da Cibersegurança",
      author: "João Silva",
      date: "2 de Março de 2024",
      content: [
        "A cibersegurança é crucial na era digital.",
        "Proteger dados sensíveis é essencial para empresas e indivíduos.",
      ],
    },
    {
      id: 2,
      title: "O Futuro da Inteligência Artificial",
      author: "Maria Santos",
      date: "3 de Março de 2024",
      content: [
        "A IA está transformando todos os setores da sociedade.",
        "É fundamental entender seus impactos e desafios.",
      ],
    },
    {
      id: 3,
      title: "Inovações em Tecnologia Móvel",
      author: "Pedro Almeida",
      date: "4 de Março de 2024",
      content: [
        "Os avanços em dispositivos móveis estão moldando nosso futuro.",
        "Novas tecnologias como 5G e realidade aumentada estão surgindo.",
      ],
    },
    {
      id: 4,
      title: "Segurança de Dados em Nuvem",
      author: "Ana Oliveira",
      date: "5 de Março de 2024",
      content: [
        "A computação em nuvem oferece muitos benefícios, mas também apresenta desafios de segurança.",
        "É importante implementar práticas sólidas de segurança de dados.",
      ],
    },
    {
      id: 5,
      title: "Impacto da Internet das Coisas (IoT)",
      author: "Rui Costa",
      date: "6 de Março de 2024",
      content: [
        "A IoT está conectando dispositivos e transformando nossas vidas.",
        "Os benefícios são enormes, mas também há preocupações com privacidade e segurança.",
      ],
    },
    {
      id: 6,
      title: "Desafios da Transformação Digital",
      author: "Sofia Carvalho",
      date: "7 de Março de 2024",
      content: [
        "A transformação digital é essencial para a sobrevivência e o sucesso das empresas modernas.",
        "No entanto, enfrentar os desafios é fundamental para garantir uma transição suave.",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
      <div className="max-w-4xl w-full px-4 pt-16">
        {dummyArticles.map((article) => (
          <div key={article.id} className="mb-8 flex flex-col md:flex-row">
            {/* Article Image */}
            <div className="relative h-48 w-full md:w-48 mr-4">
              <Image
                src={author}
                alt="Artigo do Blog"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Article Content */}
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 flex flex-col justify-between w-full">
              <div>
                {/* Article Title */}
                <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                  {article.title}
                </h2>
                {/* Article Meta */}
                <div className="flex items-center text-gray-600 mb-4">
                  <FaUser className="mr-1" />
                  <span>{article.author}</span>
                </div>
                {/* Article Date */}
                <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                {/* Article Content */}
                {article.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* Ler Mais Button */}
              <Link href={`/article/`}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Ler Mais
                </button>
              </Link>
            </div>
          </div>
        ))}
        {/* Back Button */}
        <Link href="/blog">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-8">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllArticles;
