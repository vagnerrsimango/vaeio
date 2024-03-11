import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import bgImage from "@/lib/img/stacks.svg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiElectron,
  SiGooglecloud,
  SiFlutter,
  SiSwift,
  SiLaravel,
  SiAndroidstudio,
} from "react-icons/si";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  benefits?: string[];
  technologies?: string[];
}

const iconMap: { [key: string]: ReactNode } = {
  HTML: <SiHtml5 className="text-2xl mr-1" />,
  CSS: <SiCss3 className="text-2xl mr-1" />,
  JavaScript: <SiJavascript className="text-2xl mr-1" />,
  "React.js": <SiReact className="text-2xl mr-1" />,
  "Next.js": <SiReact className="text-2xl mr-1" />,
  "Electron.js": <SiElectron className="text-2xl mr-1" />,
  JavaFX: <SiReact className="text-2xl mr-1" />,
  "Microsoft Exchange": <SiGooglecloud className="text-2xl mr-1" />,
  "Google Workspace": <SiGooglecloud className="text-2xl mr-1" />,
  "React Native": <SiReact className="text-2xl mr-1" />,
  Flutter: <SiFlutter className="text-2xl mr-1" />,
  "Kotlin/Java": <SiAndroidstudio className="text-2xl mr-1" />,
  Swift: <SiSwift className="text-2xl mr-1" />,
  Laravel: <SiLaravel className="text-2xl mr-1" />,
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  benefits,
  technologies,
}) => {
  return (
    <motion.div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        width: "100%",
        height: "100%",
      }}
      className="relative flex flex-col items-center justify-between bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex-shrink-0 w-16 h-16 mb-4">{icon}</div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        <p className="text-sm text-center mb-2">{description}</p>

        {technologies && (
          <div className="mb-2">
            <h4 className="font-semibold mb-1">Stacks usadas:</h4>
            <ul className="list-disc list-inside">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center mb-1">
                  {iconMap[tech]}
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out">
        Saber Mais
      </button>
    </motion.div>
  );
};

export default ServiceCard;
