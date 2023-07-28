import React from "react";
import Image from "next/image";
import Vector from "@/lib/img/vector.png";

const Partner = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Partners</h1>

        <p className="text-lg mb-8 text-center">
          Bênh cạnh là 1 đơn vị đào tạo, chúng tôi còn cung cấp các giải pháp về
          social netwwork, TMĐT
        </p>

        <div className="flex flex-wrap justify-center space-x-4">
          <div className="card w-64 h-48 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
            <div className="bg-gray-900 w-1/3 p-4 flex items-center justify-center">
              <Image src={Vector} width={40} height={40} alt="Logo" />
            </div>
          </div>

          <div className="card w-64 h-48 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
            <div className="bg-gray-900 w-1/3 p-4 flex items-center justify-center">
              <Image src={Vector} width={40} height={40} alt="Logo" />
            </div>
          </div>

          <div className="card w-64 h-48 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
            <div className="bg-gray-900 w-1/3 p-4 flex items-center justify-center">
              <Image src={Vector} width={40} height={40} alt="Logo" />
            </div>
          </div>

          <div className="card w-64 h-48 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
            <div className="bg-gray-900 w-1/3 p-4 flex items-center justify-center">
              <Image src={Vector} width={40} height={40} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
