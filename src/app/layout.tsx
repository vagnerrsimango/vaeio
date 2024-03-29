import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Navb from "@/components/Navbar";
import PrimulaModal from "@/components/PrimulaModal";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VAEIO",
  description: "VAEIO Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <div className={outfit.className}>
          <div className="container">
            <Navb />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
