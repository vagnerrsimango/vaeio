import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/lib/img/vaeio.png";
import Menu from "@/lib/img/menu.svg";

function Navbar() {
  return (
    <nav className="border-2 bg-blue-70 border-yellow-50 flexBetween max-container relative z-30 py-5">
      <Link href="/">
        <Image className="ml-6" src={Logo} width={74} height={29} alt="Logo" />
      </Link>

      {/* Menu Icon */}
      <Image
        src={Menu}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden ml-auto mr-4"
      />

      {/* Menu Items */}
      <ul className={`lg:flex ml-8 `}>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="mr-6">
            <Link
              href={link.href}
              className="regular-16 text-primary-0 hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/lib/img/vaeio.png";
import Menu from "@/lib/img/menu.svg";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={Logo} alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <Image
        src={Menu}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:flexCenter"
      />
    </nav>
  );
};

export default Navbar;
