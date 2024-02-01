"use client";
import React from "react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  FaPhone,
  FaPhoneAlt,
  FaPhoneSlash,
  FaPhoneSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { NAV_LINKS } from "@/constants";
import LogoWhite from "@/lib/img/logo-white.svg";
import MenuIcon from "@/lib/img/menu.svg";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import useNavScroll from "@/hooks/useNavScroll";

const menuItems = ["Primula", "Soluções TI", "Consultoria", "Blog"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scroll } = useNavScroll();
  const pathname = usePathname();
  return (
    <Navbar
      className={`fixed shadow-sm ${
        scroll > 0
          ? "bg-black-500 transition-colors shadow-black-400"
          : "bg-blue-500"
      } top-0 left-0 right-0 w-full z-30`}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-primary-300"
        />
        <NavbarBrand>
          <Link href="/">
            <Image alt="logo" src={LogoWhite} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="secondary" href="/primula">
            Primula
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="secondary" href="/itsolutions" aria-current="page">
            Soluções TI
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="/consultoria" aria-current="page">
            Consultoria
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="/blog">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="flat">
            Contacte-nos!
            <FaPhoneSquareAlt className="text-xl" />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-blue-500">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-primary-0" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
