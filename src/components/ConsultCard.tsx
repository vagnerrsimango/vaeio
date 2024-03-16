import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Button } from "@nextui-org/react";
import { FaTimes } from "react-icons/fa";
import type { StaticImageData } from "next/image";

interface PrimulaCardProps {
  icon: StaticImageData;
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
        <div className="w-12 h-12 mr-4">
          <Image {...icon} alt="logo" className="rounded-full" />
        </div>
        <div className="flex flex-col">
          <p className={`text-${textColor} text-sm font-bold`}>{subtitle}</p>
        </div>
      </div>
      <div className={`border-${borderColor} border mt-2 p-2 mb-4 rounded-md`}>
        <p className={`text-${textColor} text-left text-sm`}>{description}</p>
      </div>

      <Button
        type="button"
        className={`flex items-center rounded-lg gap-4 h-10 bg-primary-800 bg-opacity-10 w-full`}
        title="Saber Mais"
        onClick={() => setShowModal(true)}
      >
        <label
          className={`text-${textColor} whitespace-nowrap cursor-pointer font-semibold`}
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
          <div className="relative bg-white p-8 rounded-lg shadow-xl z-10 max-w-3xl w-full max-h-full overflow-y-auto">
            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-black focus:outline-none"
              onClick={() => setShowModal(false)}
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
                  stroke="blue-500"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="mb-6">
              <div className="mb-4">
                <h3 className="text-black text-2xl font-semibold text-left border-b-2 border-blue-500 pb-2">
                  Descrição:
                </h3>
                <p className="text-black text-sm text-left">{description}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-black text-2xl font-semibold text-left border-b-2 border-blue-500 pb-2">
                  Serviços Específicos:
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
