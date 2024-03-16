import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import bgImage from "@/lib/img/cardbg.svg";

interface Project {
  title: string;
  description: string;
  image: any;
  link: string;
  details: string; // Additional details about the project
  photos: string[]; // Array of photo URLs for the gallery
}

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openImage = (photo: string) => {
    setSelectedImage(photo);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="w-80 h-auto p-4 rounded-lg shadow-md m-10 overflow-hidden flex flex-col">
        <div className="h-48 relative">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <div className="flex-grow">
            <h2 className="text-primary-0 text-xl font-semibold mb-2 overflow-hidden">
              {project.title}
            </h2>
            <p className="text-primary-0 mb-4 overflow-hidden">
              {project.description}
            </p>
          </div>
          <div>
            <Button type="button" title="Saber Mais" onClick={toggleModal} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="w-96 bg-white rounded-lg relative z-50">
            <button
              className="absolute top-0 right-0 m-4 text-black font-semibold"
              onClick={toggleModal}
            >
              &times;
            </button>
            <div className="p-8">
              <h3 className="text-black text-lg font-semibold mb-2">
                Detalhes do Projeto:
              </h3>
              <p className="text-black mb-4">{project.details}</p>
              <div className="grid grid-cols-3 gap-4">
                {project.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative h-40 cursor-pointer"
                    onClick={() => openImage(photo)}
                  >
                    <Image
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
