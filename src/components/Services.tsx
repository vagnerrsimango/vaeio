import React from "react";
import Image from "next/image";
import Vector from "@/lib/img/vector.png";

const Services = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-left">
        <h1 className="text-4xl font-bold mb-4">Main Functionalities</h1>

        <p className="text-lg mb-8 text-left">
          Các khóa học Tại TD Marketsing danh cho ai?
        </p>

        {/* Three grey divs resembling cards */}
        <div className="flex justify-center space-x-40 mt-10">
          {" "}
          {/* Adjust space between cards */}
          <div className="card">
            <div className="w-80 h-60 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
              {" "}
              {/* Increase width and height */}
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
            <div className="w-80 h-60 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
              {" "}
              {/* Increase width and height */}
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
            <div className="w-80 h-60 bg-primary-400 rounded-lg shadow-lg flex items-center justify-center">
              {" "}
              {/* Increase width and height */}
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
