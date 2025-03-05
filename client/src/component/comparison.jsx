import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets.js";

function Comparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const handlesliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  return (
    <div className="px-4 mt-10 lg:px-44 sm:mt-20">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-gradient-to-r from-gray-800 to-neutral-400 bg-clip-text text-transparent cursor-default">
        Remove background with high
        <br /> Quality and Acuracy{" "}
      </h2>
      <div className="mb-12 relative w-full max-w-3xl overflow-hidden m-auto rounded-xl mt-14">
        {/* Background Image */}

        <img
          src={assets.image_w_bg}
          alt=""
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
        />

        {/* Foreground Image */}

        <img
          src={assets.image_wo_bg}
          alt=""
          className="absolute top-0 left-0 w-full h-full"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />

        {/* Slider Value  */}
        <input
          type="range"
          // value={sliderPosition}
          // min={0}
          // max={0}
          className="absolute top-1/2 left-1/2 w-full transfrom -translate-x-1/2 -translate-y-1/2 slider"
          onChange={(e) => {
            handlesliderChange(e);
          }}
        />
      </div>
    </div>
  );
}

export default Comparison;
