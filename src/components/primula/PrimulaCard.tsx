import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Button } from "@nextui-org/react";
import { FaTimes } from "react-icons/fa";

interface PrimulaCardProps {
  icon: ImageProps;
  textColor: string;
  borderColor: string;
  bgColor: string;
  title: string;
  subtitle: string;
  description: string;
  dtdescription: React.ReactNode;
  func: string;
}

const PrimulaCard: React.FC<PrimulaCardProps> = ({
  icon,
  textColor,
  borderColor,
  bgColor,
  title,
  subtitle,
  description,
  dtdescription,
  func,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`border-${borderColor} border rounded-lg m-6 p-4 relative bg-${bgColor}`}
    >
      <div className="flex items-start">
        <Image {...icon} alt="logo" className="mr-2 md:mr-4" />
        <div className="flex flex-col">
          <p
            className={`text-${textColor} mt-2 mb-1 font-bold text-xs md:mt-0 md:mb-0 md:text-sm`}
          >
            {title}
          </p>
          <p className={`text-${textColor} text-sm`}>{subtitle}</p>
        </div>
      </div>

      <div className={`border-${borderColor} border mt-2 p-2 mb-4`}>
        <p className={`text-${textColor} text-left text-xs md:text-sm`}>
          {description}
        </p>
      </div>

      <Button
        type="button"
        className={`flex items-center rounded-lg gap-4 mr-6 h-10 bg-primary-800 bg-opacity-10 w-full `}
        title="Saber Mais"
        onClick={() => setShowModal(true)}
      >
        <label
          className={`bold-16 text-${textColor} whitespace-nowrap cursor-pointer`}
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
                <div className="flex items-center">
                  <Image {...icon} alt="logo" className="w-8 h-8 mr-2" />
                  <h3 className="text-black text-2xl font-semibold text-left border-b-2 border-blue-500 pb-2">
                    {subtitle}
                  </h3>
                </div>

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

export default PrimulaCard;
