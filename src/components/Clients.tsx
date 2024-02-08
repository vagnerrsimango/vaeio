import React from "react";
import Image from "next/image";
import logo1 from "@/lib/img/logo1.png";
import logo2 from "@/lib/img/logo2.png";
import logo3 from "@/lib/img/logo3.png";
import logo4 from "@/lib/img/logo4.png";
import logo5 from "@/lib/img/logo5.png";
import logo6 from "@/lib/img/logo6.png";

const Clients = () => {
  const allLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen text-center p-4">
      <p className="text-primary-0 text-3xl font-bold mb-4">NOSSOS CLIENTES</p>
      <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center ">
        {allLogos.map((logo, index) => (
          <div key={index} className="flex items-center mt-48 justify-center">
            <Image src={logo} alt="img" className="m-2 opacity-100 w-32 h-32" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
