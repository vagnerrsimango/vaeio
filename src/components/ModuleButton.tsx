import React from "react";
import { IconType } from "react-icons";
import {
  FaShoppingCart,
  FaStore,
  FaCreditCard,
  FaUsers,
  FaTv,
  FaMoneyBill,
} from "react-icons/fa";

interface ModuleComponentProps {
  icon: IconType;
  colorFrom: string;
  colorTo: string;
  text: string;
}

const ModuleComponent: React.FC<ModuleComponentProps> = ({
  icon: Icon,
  colorFrom,
  colorTo,
  text,
}) => {
  return (
    <div
      className={`flex items-center mb-4 p-3 bg-gradient-to-r from-${colorFrom}-400 to-${colorTo}-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300`}
    >
      {Icon && (
        <Icon size={24} className={`mr-2 text-${colorFrom}-900 w-6 h-6`} />
      )}
      <div>
        <p className="text-sm font-bold mb-1">{text}</p>
      </div>
    </div>
  );
};

export default ModuleComponent;
