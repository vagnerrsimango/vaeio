import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Button2 from "./Button2";
import Icon4 from "@/lib/img/DropdownIcon.svg";
import Link from "next/link";

const Contacts = () => {
  return (
    <section
      id="contact"
      className=" min-h-screen flex flex-col items-center justify-center text-center py-4 overflow-hidden"
    >
      <p className="text-primary-0 text-3xl font-bold mb-4">Entre em Contato</p>
      <div className="md:flex md:flex-row md:items-start md:justify-center w-full">
        <div className="md:w-1/2 text-primary-0 p-4">
          <div className="mb-4">
            <p className="text-lg text-black mb-2">
              Precisa de assistência? Estamos aqui para ajudar!
            </p>
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Nome Completo"
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <Link href="#">
              <div className="mx-4 hover:scale-110 transition-transform">
                <FaWhatsapp className="text-4xl text-white hover:text-green-500" />
              </div>
            </Link>
            <Link href="#">
              <div className="mx-4 hover:scale-110 transition-transform">
                <FaFacebook className="text-4xl text-white hover:text-blue-300" />
              </div>
            </Link>
            <Link href="#">
              <div className="mx-4 hover:scale-110 transition-transform">
                <FaLinkedin className="text-4xl text-white hover:text-blue-300" />
              </div>
            </Link>
            <Link href="#">
              <div className="mx-4 hover:scale-110 transition-transform">
                <FaInstagram className="text-4xl text-white hover:text-purple-500" />
              </div>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 p-4 md:ml-auto">
          <form className="max-w-md w-full mx-auto">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Seu Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Assunto"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Como podemos ajudar você?"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button2 type="button" title="Enviar Mensagem" icon={Icon4} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
