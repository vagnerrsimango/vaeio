import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import logo1 from "@/lib/img/logo1.png";
import logo2 from "@/lib/img/logo2.png";
import logo3 from "@/lib/img/logo3.png";
import logo4 from "@/lib/img/logo4.png";
import logo5 from "@/lib/img/logo5.png";

const Clients = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of logos to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold mb-8">NOSSOS CLIENTES</p>

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="m-6">
            <Image
              src={logo}
              alt={`Client Logo ${index + 1}`}
              width={150}
              height={150}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Clients;
