import React from "react";
import Image from "next/image";
import Vector from "@/lib/img/vector.png";

const Intro = () => {
  return (
    <div className="flex gap-2  py-24 items-center justify-evenly">
      <div className="bg-primary-400 w-2/6 h-96 rounded-lg shadow-lg flex items-center justify-center">
        <div className="bg-gray-900  p-8 flex items-center justify-center">
          <Image src={Vector} width={80} height={80} alt="Logo" />
        </div>
      </div>

      <div className="w-1/2">
        <div className="bg-white p-8">
          <h2 className="text-4xl font-bold mb-6">What is PRIMULA?</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pharetra elit in quam feugiat, quis rutrum libero feugiat. Nullam
            quis fringilla est, sit amet scelerisque felis. Nam efficitur metus
            eu mi facilisis, sit amet sagittis turpis mollis. Sed hendrerit est
            sit amet nibh iaculis, a auctor tortor feugiat. Sed volutpat velit
            in velit tempor, a pharetra nisi rhoncus. Nulla facilisi. Duis
            facilisis ipsum quis elit dictum, eget tristique est vehicula.
          </p>
          <p className="text-lg mb-4">
            Phasellus blandit ac libero eu vulputate. Curabitur mollis, felis
            vel consectetur hendrerit, elit orci mollis metus, vel malesuada
            arcu nisl eu ipsum. Nullam efficitur dapibus mi eu tincidunt.
            Integer et felis et lectus maximus tincidunt vel et elit. Vivamus
            eget semper enim, ac suscipit odio. Quisque interdum, libero ut
            ullamcorper vulputate, neque ligula faucibus turpis, ut aliquam
            ligula odio quis magna.
          </p>
          <div className="mt-6">
            <button className="bg-primary-400 px-6 py-3 rounded-md text-lg font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
