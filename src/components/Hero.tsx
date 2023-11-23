import React from "react";
import Link from "next/link";
import Image from "next/image";
import Circles from "@/lib/img/circles+icons.svg";
import Logo from "@/lib/img/vaeio.png";

const Hero = () => {
  return (
    <section className="bg-blue-500 max-container padding-container items-center justify-center  flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <Link href="/">
        <div className="flex items-center justify-center relative">
          <Image src={Circles} alt="logo" width={400} height={400} />
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-2xl font-bold">SOLUÇÕES PARA O SEU</p>
            <p className="text-2xl font-bold"> NEGÓCIO</p>
          </div> */}
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </Link>
    </section>
  );
};

export default Hero;
