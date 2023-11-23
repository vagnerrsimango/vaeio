import React from "react";
import Link from "next/link";
import Image from "next/image";
import Circles from "@/lib/img/circles+icons.svg";
import Logo from "@/lib/img/vaeio.png";

const Hero = () => {
  return (
    <section className="bg-blue-500 max-container padding-container items-center justify-center  flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <Link href="/">
        <div className="flex items-center justify-center">
          <Image
            src={Circles}
            alt="logo"
            width={300}
            height={300}
            className="ml-16"
          />
        </div>
      </Link>
    </section>
  );
};

export default Hero;
