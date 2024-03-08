import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Button } from "@nextui-org/react";
import { FaTimes } from "react-icons/fa";

interface PrimulaCardProps {
  icon: ImageProps;
  textColor: string;
  borderColor: string;
  bgColor: string;
  subtitle: string;
  description: string;
  dtdescription: React.ReactNode;
}

const ConsultCard: React.FC<PrimulaCardProps> = ({
  icon,
  textColor,
  borderColor,
  bgColor,

  subtitle,
  description,
  dtdescription,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`border-${borderColor} border rounded-lg m-6 p-4 relative bg-${bgColor} shadow-md`}
    >
      <div className="flex items-start">
        <Image {...icon} alt="logo" className="w-12 h-12 mr-4 rounded-full" />
        <div className="flex flex-col">
          <p className={`text-${textColor} text-sm`}>{subtitle}</p>
        </div>
      </div>
      <div className={`border-${borderColor} border mt-2 p-2 mb-4 rounded-md`}>
        <p className={`text-${textColor} text-left text-xs md:text-sm `}>
          {description}
        </p>
      </div>

      <Button
        type="button"
        className={`flex items-center rounded-lg gap-4 h-10 bg-primary-800 bg-opacity-10 w-full `}
        title="Saber Mais"
        onClick={() => setShowModal(true)}
      >
        <label className={`text-${textColor} whitespace-nowrap cursor-pointer`}>
          Saber Mais
        </label>
      </Button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-white p-8 rounded-lg shadow-xl z-10 max-w-3xl w-full max-h-full overflow-y-auto">
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
            <div className="mb-6">
              <div className="mb-4">
                <h3 className="text-black text-2xl font-semibold text-left">
                  Descrição:
                </h3>
                <p className="text-black text-sm text-left">{description}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-black text-lg font-semibold text-left">
                  Descrição Detalhada:
                </h3>
                <p className="text-black text-sm text-left">{dtdescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultCard;
