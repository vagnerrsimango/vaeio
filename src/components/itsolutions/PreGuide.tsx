import React from "react";
import { FaTasks, FaDesktop, FaSearch, FaMobileAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import "animate.css";

const PreGuide = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 p-10">
      <div className="max-w-5xl mx-auto text-white grid grid-cols-3 gap-6">
        <div className="flex items-center justify-center bg-blue-600 rounded-lg p-4 animate__animated animate__fadeInLeft">
          <FaTasks className="text-4xl text-white mr-2" />
          <div>
            <h3 className="text-lg font-semibold mb-1">
              10 Projetos Concluídos
            </h3>
            <p className="text-sm">
              Entregamos um total de 10 projetos bem-sucedidos.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-blue-600 rounded-lg p-4 animate__animated animate__fadeIn">
          <FaDesktop className="text-4xl text-white mr-2" />
          <div>
            <h3 className="text-lg font-semibold mb-1">
              5 Softwares Desenvolvidos
            </h3>
            <p className="text-sm">
              Projetamos e desenvolvemos 5 aplicações de software.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-blue-600 rounded-lg p-4 animate__animated animate__fadeInRight">
          <FaSearch className="text-4xl text-white mr-2" />
          <div>
            <h3 className="text-lg font-semibold mb-1">
              33 Soluções Encontradas
            </h3>
            <p className="text-sm">
              Identificamos e implementamos 33 soluções eficazes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreGuide;
