import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/lib/img/vaelogo.png";
import Menu from "@/lib/img/menu.png";

const Navbar = () => {
  return (
    <nav className="relative bg-primary-0 sticky top-0">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src={Logo} width={100} height={100} alt="Logo" />
          <span className="text-black-500 font-bold text-3xl mr-2">VAEIO</span>
        </div>

        <div className="flex items-center">
          <Image src={Menu} width={80} height={80} alt="Menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
