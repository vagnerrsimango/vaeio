import React, { ReactNode, useState } from "react";
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
  SiPython,
  SiSqlalchemy,
  SiDatacamp,
  SiGmail,
  SiMicrosoftoutlook,
} from "react-icons/si";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: { title: string; description: string }[];
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
  Java: <SiAndroidstudio className="text-2xl mr-1" />,
  Gmail: <SiGmail className="text-2xl mr-1" />,
  Outlook: <SiMicrosoftoutlook className="text-2xl mr-1" />,
  Gmail: <SiGmail className="text-2xl mr-1" />,
  "Microsoft Exchange": <SiGooglecloud className="text-2xl mr-1" />,
  "Google Workspace": <SiGooglecloud className="text-2xl mr-1" />,
  "React Native": <SiReact className="text-2xl mr-1" />,
  Flutter: <SiFlutter className="text-2xl mr-1" />,
  "Kotlin/Java": <SiAndroidstudio className="text-2xl mr-1" />,
  Swift: <SiSwift className="text-2xl mr-1" />,
  Python: <SiPython className="text-2xl mr-1" />,
  Laravel: <SiLaravel className="text-2xl mr-1" />,
  SQL: <SiDatacamp className="text-2xl mr-1" />,
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  technologies,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex items-center justify-center w-full">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-lg max-w-xl w-full mx-4 mt-20 mb-20 relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-100"
                onClick={toggleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-semibold mb-4">{title}</h2>
              <p className="mb-4">{description}</p>

              <div>
                <h3 className="text-lg font-semibold mb-2">Funcionalidades:</h3>
                <ul className="list-disc list-inside">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <strong>{feature.title}:</strong> {feature.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <motion.div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          width: "100%",
          height: "100%",
        }}
        className="relative flex flex-col items-center justify-between bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-6 shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex-shrink-0 w-16 h-16">{icon}</div>
        <div className="flex flex-col items-center justify-center flex-grow space-y-2">
          <h3 className="text-xl font-semibold mb-1 text-center">{title}</h3>
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
        <button
          className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out"
          onClick={toggleModal}
        >
          Saber Mais
        </button>
      </motion.div>
    </>
  );
};

export default ServiceCard;
