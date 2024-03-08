import React from "react";
import { Button } from "@nextui-org/react";

interface PrimulaModalProps {
  onClose: () => void;
}

const PrimulaModal: React.FC<PrimulaModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-8 rounded-lg shadow-xl z-10">
        {children}
        <Button type="button" onClick={onClose}>
          Fechar
        </Button>
      </div>
    </div>
  );
};

export default PrimulaModal;
