import Image from "next/image";
import Link from "next/link";
import {
  FaBeer,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Logo from "@/lib/img/vaelogo.png";

const Footer = () => {
  return (
    <footer className="bg-black-500">
      <div className="container text-primary-0 grid grid-cols-1 gap-8 px-6 py-10 mx-auto md:grid-cols-4">
        <div className="space-y-8 md:space-y-12 md:items-start">
          <b>LOGO</b>

          <p>
            <FaMapMarkerAlt /> Av. Martires da Machava 252, 5o andar, flat 3
            1100 MAPUTO
          </p>
          <p>
            <FaMapMarkerAlt /> Av. 24 de Julho 133, 1o andar, flat 2 MAPUTO
          </p>
        </div>
        <div className="space-y-8 md:space-y-12 md:items-start">
          <p>Khóa học</p>
          <p>Facebook Advertisement</p>
          <p>Google Advertisement</p>
          <p>Nuôi tài khoản Facebook</p>
        </div>
        <div className="space-y-8 md:space-y-12 md:items-start">
          <p>Khóa học</p>
          <p>Facebook Advertisement</p>
          <p>Google Advertisement</p>
          <p>Nuôi tài khoản Facebook</p>
        </div>
        <div className="space-y-8 md:space-y-12 md:items-start">
          <p>Join our community.</p>
          <div className="flex space-x-4 text-white">
            <Link href="https://www.linkedin.com/" passHref>
              <FaLinkedin />
            </Link>
            <Link href="https://www.facebook.com/" passHref>
              <FaFacebook />
            </Link>
            <Link href="https://www.instagram.com/" passHref>
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com/" passHref>
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
