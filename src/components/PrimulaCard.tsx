import React from "react";
import Image from "next/image";
import Button3 from "./Button3";
import Icon4 from "@/lib/img/DropdownIcon.svg";

const PrimulaCard = ({ icon, borderColor, title, subtitle, description }) => {
  return (
    <div className={`border-${borderColor}-50 border-2 rounded-lg m-6 p-4`}>
      <div className="flex flex-col items-center">
        <div className="flex justify-start items-center mb-2">
          <Image src={icon} alt="logo" className="mr-2" />
          <div>
            <p className="text-white font-bold text-sm">{title}</p>
            <p className="text-white text-xs">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className={`border-${borderColor}-50 border-2 mt-2 p-2 mb-4`}>
        <p className="text-white text-xs">{description}</p>
      </div>

      <Button3 type="button" title="Saber Mais" icon={Icon4} />
    </div>
  );
};

export default PrimulaCard;
