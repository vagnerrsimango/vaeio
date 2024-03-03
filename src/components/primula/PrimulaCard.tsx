import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Button } from "@nextui-org/react";
import { FaTimes } from "react-icons/fa";

interface PrimulaCardProps {
  icon: ImageProps;
  color: string; // New prop for color
  title: string;
  subtitle: string;
  description: string;
  dtdescription: string;
  func: string;
}

const PrimulaCard: React.FC<PrimulaCardProps> = ({
  icon,
  color,
  title,
  subtitle,
  description,
  dtdescription,
  func,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`border-primula-100 border rounded-lg m-6 p-4 relative`}>
      <div className="flex items-start">
        <Image {...icon} alt="logo" className="mr-2 md:mr-4" />
        <div className="flex flex-col">
          <p
            className={`text-primula-100 mt-2 mb-1 font-bold text-xs md:mt-0 md:mb-0 md:text-sm`}
          >
            {title}
          </p>
          <p className={`text-${color} text-sm`}>{subtitle}</p>
        </div>
      </div>

      <div className={`border-primula-100 border mt-2 p-2 mb-4`}>
        <p className={`text-${color} text-left text-xs md:text-sm`}>
          {description}
        </p>
      </div>

      <Button
        type="button"
        className={`flex items-center rounded-lg gap-4 mr-6 h-10 bg-blue-200 bg-opacity-10 w-full `}
        title="Saber Mais"
        onClick={() => setShowModal(true)}
      >
        <label
          className={`bold-16 text-${color} whitespace-nowrap cursor-pointer`}
        >
          Saber Mais
        </label>
      </Button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-white p-8 rounded-lg shadow-xl z-10 max-w-md">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className={`text-${color} text-2xl font-bold`}>PRÍMULA</h1>
                <Button
                  className="bg-transparent"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  <FaTimes />
                </Button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <Image {...icon} alt="logo" className="w-8 h-8 mr-2" />
                <h2 className={`text-${color} text-lg font-semibold `}>
                  {subtitle}
                </h2>
              </div>
              <div className={`border-b border-primula-100 mb-4`}></div>
              <div className="mb-4">
                <h3 className={`text-${color} text-lg font-semibold`}>
                  Descrição:
                </h3>
                <p className={`text-${color} text-sm text-left`}>
                  {description}
                </p>
              </div>
              <div className="mb-4">
                <h3 className={`text-${color} text-lg font-semibold`}>
                  Descrição Detalhada:
                </h3>
                <p className={`text-${color} text-sm text-left`}>
                  {dtdescription}
                </p>
              </div>
              <div className="mb-4">
                <h3 className={`text-${color} text-lg font-semibold text-left`}>
                  Funcionalidades:
                </h3>
                <p className={`text-${color} text-sm text-left`}>{func}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrimulaCard;
