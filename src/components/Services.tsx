import React from "react";
import Image from "next/image";
import Vector from "@/lib/img/vector.png";

const Services = () => {
  return (
    <section className="bg-gray-100 py-12 p-8">
      <div className=" text-left">
        <h1 className="text-4xl font-bold mb-4 ml-40">Main Functionalities</h1>

        <p className="text-lg text-left ml-40">
          Các khóa học Tại TD Marketsing danh cho ai?
        </p>

        <div className="flex py-24 justify-around">
          <div className="card">
            <div className="w-96 h-80 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-gray-900 w-1/3 p-4 flex items-center justify-center">
                <Image src={Vector} width={40} height={40} alt="Logo" />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">Card 1 Title</h3>
              <p className="text-sm text-gray-600">Subtitle for Card 1</p>
            </div>
          </div>

          <div className="card">
            <div className="w-96 h-80 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-gray-900 w-1/3 p-4 flex items-center justify-center">
                <Image src={Vector} width={40} height={40} alt="Logo" />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">Card 2 Title</h3>
              <p className="text-sm text-gray-600">Subtitle for Card 2</p>
            </div>
          </div>
          <div className="card">
            <div className="w-96 h-80 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
              <div className="bg-gray-900 w-1/3 p-4 flex items-center justify-center">
                <Image src={Vector} width={40} height={40} alt="Logo" />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">Card 3 Title</h3>
              <p className="text-sm text-gray-600">Subtitle for Card 3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
