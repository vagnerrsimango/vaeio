import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold">Logo</h2>
          <div className="mt-2">
            <p className="text-sm">Random Line 1</p>
            <p className="text-sm">Random Line 2</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          <div>
            <p className="text-sm">Short Text 1</p>
            <p className="text-sm">Short Text 2</p>
            <p className="text-sm">Short Text 3</p>
            <p className="text-sm">Short Text 4</p>
          </div>
          <div>
            <p className="text-sm">Short Text 1</p>
            <p className="text-sm">Short Text 2</p>
            <p className="text-sm">Short Text 3</p>
            <p className="text-sm">Short Text 4</p>
          </div>
          <div>
            <p className="text-sm">Short Text 1</p>
            <p className="text-sm">Short Text 2</p>
            <p className="text-sm">Short Text 3</p>
            <p className="text-sm">Short Text 4</p>
          </div>
          <div>
            <p className="text-sm">Short Text 1</p>
            <p className="text-sm">Short Text 2</p>
            <p className="text-sm">Short Text 3</p>
            <p className="text-sm">Short Text 4</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
