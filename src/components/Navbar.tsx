"use client";
import React from "react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { FaPhoneSquareAlt } from "react-icons/fa";

import LogoWhite from "@/lib/img/logo-white.svg";

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

  const isPageActive = (path) => {
    return pathname === path;
  };

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
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            isActive={isPageActive(
              item === "Soluções TI" ? "/itsolutions" : `/${item.toLowerCase()}`
            )}
          >
            <Link
              color="secondary"
              href={
                item === "Soluções TI"
                  ? "/itsolutions"
                  : `/${item.toLowerCase()}`
              }
              aria-current="page"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" href="#contacts" variant="flat">
            Contacte-nos!
            <FaPhoneSquareAlt className="text-xl" />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-blue-500">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="secondary"
              href={
                item === "Soluções TI"
                  ? "/itsolutions"
                  : `/${item.toLowerCase()}`
              }
              aria-current="page"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
