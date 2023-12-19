import React from "react";
import Image from "next/image";
import Button3 from "./Button3";
import Icon4 from "@/lib/img/DropdownIcon.svg";

const PrimulaCard = ({ icon, borderColor, title, subtitle, description }) => {
  return (
    <div className={`border-${borderColor}-50 border-2 rounded-lg m-6 p-4`}>
      <div className="flex items-start mb-2">
        <Image src={icon} alt="logo" className="mr-2" />
        <div>
          <p className="text-primary-0  mt-2 text-xs">{title}</p>
          <p className="text-primary-0 font-bold text-sm">{subtitle}</p>
        </div>
      </div>

      <div className={`border-${borderColor}-50 border-2 mt-2 p-2 mb-4`}>
        <p className="text-primary-0 text-xs">{description}</p>
      </div>

      <Button3 type="button" title="Saber Mais" icon={Icon4} />
    </div>
  );
};

export default PrimulaCard;
