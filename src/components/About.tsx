import React from "react";
import Image from "next/image";
import Vector from "@/lib/img/vector.png";

const About = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us & Services</h1>

        <p className="text-lg mb-8">
          Với nhiều năm kinh nghiệm thực chiến qua các dự án, đội ngũ giảng viên
          tại TD Marketing tự tin là những người đồng hành xuất sắc sẽ đồng hành
          và hỗ trợ học viên trong suốt hành trình
        </p>

        <div className="flex justify-center space-x-8">
          <div className="card bg-white rounded-lg shadow-lg w-64 h-64 flex flex-col items-center justify-center p-6 border border-primary-500">
            <Image src={Vector} width={40} height={40} alt="Logo" />
            <h2 className="text-xl font-bold mt-4">Phạm Thị Ngọc Hà</h2>
            <p className="text-sm text-gray-500 mt-2">
              Head of Marketing Dept Viettel Digital services
            </p>
          </div>

          <div className="card bg-white rounded-lg shadow-lg w-64 h-64 flex flex-col items-center justify-center p-6 border border-primary-500">
            <Image src={Vector} width={40} height={40} alt="Logo" />
            <h2 className="text-xl font-bold mt-4">Phạm Thị Ngọc Hà</h2>
            <p className="text-sm text-gray-500 mt-2">
              Head of Marketing Dept Viettel Digital services
            </p>
          </div>

          <div className="card bg-white rounded-lg shadow-lg w-64 h-64 flex flex-col items-center justify-center p-6 border border-primary-500">
            <Image src={Vector} width={40} height={40} alt="Logo" />
            <h2 className="text-xl font-bold mt-4">Phạm Thị Ngọc Hà</h2>
            <p className="text-sm text-gray-500 mt-2">
              Head of Marketing Dept Viettel Digital services
            </p>
          </div>

          <div className="card bg-white rounded-lg shadow-lg w-64 h-64 flex flex-col items-center justify-center p-6 border border-primary-500">
            <Image src={Vector} width={40} height={40} alt="Logo" />
            <h2 className="text-xl font-bold mt-4">Phạm Thị Ngọc Hà</h2>
            <p className="text-sm text-gray-500 mt-2">
              Head of Marketing Dept Viettel Digital services
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
