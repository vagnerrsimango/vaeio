import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/lib/img/vaelogo.png";
import Menu from "@/lib/img/menu.png";

const Navbar = () => {
  return (
    <nav className="relative bg-primary-0">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <div className="flex items-center">
            <Image src={Logo} width={50} height={50} alt="Logo" />
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <Image src={Menu} width={50} height={50} alt="Menu" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
