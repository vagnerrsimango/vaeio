import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Button2 from "./Button2";
import Icon4 from "@/lib/img/DropdownIcon.svg";

const Contacts = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-4xl font-bold mb-8">Contatos</p>
      <div className="md:flex md:flex-row md:items-start md:justify-center">
        <div className="md:w-1/2 text-primary-0 p-4">
          <div className="mb-4">
            <p className="text-lg text-black mb-2">
              Precisa de assistência? Entre em contato conosco!
            </p>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Nome Completo"
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <FaWhatsapp className="text-primary-0 mx-4 text-4xl hover:text-gray-200 transition-colors duration-300 ease-in-out" />
            <FaFacebook className="text-primary-0 mx-4 text-4xl hover:text-gray-200 transition-colors duration-300 ease-in-out" />
            <FaLinkedin className="text-primary-0 mx-4 text-4xl hover:text-gray-200 transition-colors duration-300 ease-in-out" />
            <FaInstagram className="text-primary-0 mx-4 text-4xl hover:text-gray-200 transition-colors duration-300 ease-in-out" />
          </div>
        </div>

        <div className="md:w-1/2 p-4">
          <form className="max-w-md w-full mx-auto">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                placeholder="Assunto"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Sua Mensagem"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <Button2 type="button" title="Enviar" icon={Icon4} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
