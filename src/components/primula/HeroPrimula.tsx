import Image from "next/image";
import Logos from "@/lib/img/logos.svg";

const HeroPrimula = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex flex-col items-center justify-center py-10 px-4 md:py-20 md:px-0">
      <div className="text-center md:text-left md:flex md:items-center">
        <div className="md:w-1/2 md:order-2 mb-8 md:mb-0 md:ml-16 md:mr-8">
          <div className="inline-block">
            <Image src={Logos} alt="logo" />
          </div>
        </div>
        <div className="md:w-1/2 md:order-1 md:ml-20">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            <span className="text-green-100 font-extralight">
              GESTÃO DE NEGÓCIOS
            </span>
          </h1>
          <div className="flex flex-col items-center md:items-start mb-8">
            <p className="text-white text-2xl md:text-3xl font-medium">
              Pequenas
            </p>
            <p className="text-white text-2xl md:text-3xl font-medium">
              Médias
            </p>
            <p className="text-white text-2xl md:text-3xl font-medium">
              Empresas
            </p>
          </div>
          <p className="text-green-100 text-center md:text-left text-xs md:text-base max-w-md md:max-w-none">
            O Prímula é uma plataforma de gestão de negócios desenvolvida para
            pequenas e médias empresas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPrimula;
