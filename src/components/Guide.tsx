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
import "animate.css";
import "@/app/styles/animations.css";
import {
  FaShoppingCart,
  FaStore,
  FaCreditCard,
  FaUsers,
  FaBook,
  FaMoneyBill,
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaCogs,
  FaDatabase,
  FaMagic,
  FaTv,
  FaReceipt,
  FaMailBulk,
} from "react-icons/fa";
import ModuleButton from "./ModuleButton";
import Link from "next/link";

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
    <section className="  min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold mt-20 animate__animated animate__fadeIn">
        CONHEÇA AS NOSSAS SOLUÇÕES PARA A SUA EMPRESA
      </p>

      <div className="flex flex-col lg:flex-row w-full mt-8 p-8">
        <div className="lg:w-1/2 p-8 animate__animated animate__fadeInLeft">
          <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              type="button"
              title="Prímula"
              icon={Icon1}
              bg={
                tab === "primula"
                  ? "bg-blue-600 shadow shadow-green-500"
                  : "bg-blue-400"
              }
              onClick={() => handleTabChange("primula")}
              className={`transition-all duration-300 ease-in-out p-2 rounded-md`}
            />
            <Button
              type="button"
              title="Soluções TI"
              icon={Icon2}
              bg={
                tab === "solutionti"
                  ? "bg-blue-600 shadow shadow-green-500"
                  : "bg-blue-400"
              }
              onClick={() => handleTabChange("solutionti")}
              className={`transition-all duration-300 ease-in-out p-2 rounded-md`}
            />
            <Button
              type="button"
              title="Consultoria"
              icon={Icon3}
              bg={
                tab === "consultoria"
                  ? "bg-blue-600 shadow shadow-green-500"
                  : "bg-blue-400"
              }
              onClick={() => handleTabChange("consultoria")}
              className={`transition-all duration-300 ease-in-out p-2 rounded-md`}
            />
          </div>

          {tab === "primula" ? (
            <div className="mb-6 text-primary-0">
              <p className="text-2xl font-bold mb-6">O Que É Prímula?</p>
              <p className="font-normal mb-6">
                O Prímula é uma plataforma de gestão de negócios desenvolvida
                para pequenas e médias empresas.
              </p>
              <p className="text-2xl font-bold mb-6">Principais Módulos</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center items-center text-primary-0 mb-6 transition-all duration-300">
                <ModuleButton
                  icon={FaShoppingCart}
                  colorFrom="yellow"
                  colorTo="red"
                  text="Compras"
                />
                <ModuleButton
                  icon={FaStore}
                  colorFrom="green"
                  colorTo="blue"
                  text="Comercial"
                />
                <ModuleButton
                  icon={FaCreditCard}
                  colorFrom="blue"
                  colorTo="indigo"
                  text="Contabilidade"
                />
                <ModuleButton
                  icon={FaUsers}
                  colorFrom="purple"
                  colorTo="pink"
                  text="Recursos Humanos"
                />
                <ModuleButton
                  icon={FaReceipt}
                  colorFrom="indigo"
                  colorTo="blue"
                  text="POS"
                />
                <ModuleButton
                  icon={FaMoneyBill}
                  colorFrom="pink"
                  colorTo="red"
                  text="Finanças"
                />
              </div>
            </div>
          ) : tab === "solutionti" ? (
            <div className="flex flex-col md:flex-row justify-center items-center text-primary-0 mb-6 transition-all duration-300">
              <p className="text-2xl font-bold mb-6">Principais Serviços</p>
              <div className="flex flex-wrap justify-center md:justify-start items-center md:w-1/2">
                <ModuleButton
                  icon={FaGlobe}
                  colorFrom="yellow"
                  colorTo="red"
                  text="Desenvolvimento de Websites"
                />
                <div className="md:ml-4 mt-4 md:mt-0">
                  <ModuleButton
                    icon={FaMobileAlt}
                    colorFrom="green"
                    colorTo="blue"
                    text="Desenvolvimento de Aplicativos Mobile"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end items-center md:w-1/2 mt-4 md:mt-0">
                <div className="md:mr-4">
                  <ModuleButton
                    icon={FaDesktop}
                    colorFrom="indigo"
                    colorTo="blue"
                    text="Desenvolvimento de Sistemas de Gestão"
                  />
                </div>
                <div className="md:mr-4 mt-4 md:mt-0">
                  <ModuleButton
                    icon={FaMailBulk}
                    colorFrom="purple"
                    colorTo="pink"
                    text="E-Mails Corporativos"
                  />
                </div>
              </div>
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
          {/* <Link href="/primula">
            {" "}
            <Button2 type="button" title="Saber Mais" icon={Icon4} />
          </Link> */}
        </div>

        <div className="lg:w-1/2 p-8 animate__animated animate__fadeInRight">
          <div className="max-w-400 max-h-400 overflow-hidden">
            <Image
              src={selectBtn}
              alt="logo"
              width={400}
              height={400}
              className="object-cover flex justify-center align-middle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
