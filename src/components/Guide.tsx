"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Showcase1 from "@/lib/img/showcase.svg";
import Showcase2 from "@/lib/img/showcase2.svg";
import Showcase3 from "@/lib/img/showcase3.svg";
import Icon1 from "@/lib/img/icon1.svg";
import Icon2 from "@/lib/img/icon2.svg";
import Icon3 from "@/lib/img/icon3.svg";
import Icon4 from "@/lib/img/DropdownIcon.svg";
import Button2 from "./Button2";
import { useState } from "react";

const Guide = () => {
  const [selectBtn, setSelectBtn] = useState(Showcase2);
  const [tab, setTab] = useState("primula");

  const handleBtnClick = () => {
    window.alert("Button clicked!");
  };

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
    updateSelectBtn(newTab);
  };

  const updateSelectBtn = (tab: string) => {
    switch (tab) {
      case "primula":
        setSelectBtn(Showcase2);
        break;
      case "solutionti":
        setSelectBtn(Showcase1);
        break;
      case "consultoria":
        setSelectBtn(Showcase3);
        break;
      default:
        setSelectBtn(Showcase1);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold">
        CONHEÇA AS NOSSAS SOLUÇÕES PARA A SUA EMPRESA
      </p>

      <div className="flex flex-col-reverse lg:flex-row w-full mt-8 p-8">
        <div className="lg:w-1/2 p-8">
          <div className="flex justify-between mb-6">
            <Button
              type="button"
              title="Prímula"
              icon={Icon1}
              onClick={() => handleTabChange("primula")}
              className={`transition-all duration-300 ease-in-out ${
                tab === "primula"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-black"
              } p-2 rounded-md`}
            />
            <Button
              type="button"
              title="Soluções TI"
              icon={Icon2}
              onClick={() => handleTabChange("solutionti")}
            />
            <Button
              type="button"
              title="Consultoria"
              icon={Icon3}
              onClick={() => handleTabChange("consultoria")}
            />
          </div>
          {tab === "primula" ? (
            <div>
              <p className="text-primary-0 text-2xl font-bold mb-6">
                O Que É Prímula?
              </p>
              <p className="text-primary-0 mb-6">
                O Prímula é uma plataforma de gestão de negócios desenvolvida
                para pequenas e médias empresas.
              </p>
              <p className="text-primary-0 font-bold mb-6">
                Principais Módulos
              </p>
              <p className="text-primary-0 mb-6">
                Compras | POS | Comercial | Recursos Humanos | Contabilidade |
                Finanças
              </p>
            </div>
          ) : tab === "solutionti" ? (
            <div>
              <p className="text-primary-0 text-2xl font-bold mb-6">
                O Que Oferecemos Em TI?
              </p>
              <p className="text-primary-0 mb-6">
                Websites Comerciais & Corporativos | Aplicativos para celulares
                | Sistemas de gestão para empresas | Arquitetura de Softwares |
                e MUITO mais.
              </p>
            </div>
          ) : tab === "consultoria" ? (
            <div>
              <p className="text-primary-0 text-2xl font-bold mb-6">
                Deixe a sua gestão conosco
              </p>
              <p className="text-primary-0 mb-6">
                Nossa expertise em gestão financeira, combinada ao compromisso
                inabalável com o sucesso de nossos clientes, você pode confiar
                em nós para fornecer soluções financeiras inteligentes e
                estratégicas que impulsionarão sua estabilidade financeira e o
                crescimento de seus negócios.
              </p>
              <p className="text-primary-0 mb-6">
                Entre em contato connosco hoje mesmo para começar a trilhar o
                caminho para uma gestão financeira sólida e eficaz.
              </p>
            </div>
          ) : null}
          <Button2 type="button" title="Saber Mais" icon={Icon4} />
        </div>

        <div className="lg:w-1/2 p-8">
          <Image
            src={selectBtn}
            alt="logo"
            width={400}
            height={400}
            className="object-cover flex justify-center align-middle"
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;
