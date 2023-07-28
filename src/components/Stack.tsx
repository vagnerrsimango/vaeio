import React from "react";

const Stack = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4 text-center bg-primary-400 rounded-lg shadow-lg flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold mb-6">Our Tech Stack</h1>

        <div className="flex justify-center space-x-12">
          {/* Placeholder circles for tech stack */}
          <div className="tech-icon bg-primary-0 rounded-full shadow-md w-20 h-20 flex items-center justify-center">
            {/* Add your first tech stack icon here */}
          </div>

          <div className="tech-icon bg-primary-0 rounded-full shadow-md w-20 h-20 flex items-center justify-center">
            {/* Add your second tech stack icon here */}
          </div>

          <div className="tech-icon bg-primary-0 rounded-full shadow-md w-20 h-20 flex items-center justify-center">
            {/* Add your third tech stack icon here */}
          </div>

          <div className="tech-icon bg-primary-0 rounded-full shadow-md w-20 h-20 flex items-center justify-center">
            {/* Add your fourth tech stack icon here */}
          </div>

          <div className="tech-icon bg-primary-0 rounded-full shadow-md w-20 h-20 flex items-center justify-center">
            {/* Add your fifth tech stack icon here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
