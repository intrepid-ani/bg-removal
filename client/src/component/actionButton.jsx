import React from "react";
import { assets } from "../assets/assets";

function Action() {
  return (
    <>
      <div className="px-4 mt-10 lg:px-44 sm:mt-20 ">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-gradient-to-r from-gray-800 to-neutral-400 bg-clip-text text-transparent cursor-default">
          Try It & See the Magic!
        </h2>
        <div className="w-full flex items-center mt-10">
          <input type="file" name="" id="upload2" hidden />
          <label
            htmlFor="upload2"
            className="inline-flex gap-3 px-6 py-3 text-center rounded-full cursur-pointer bg-gradient-to-r from-violet-600 to-fuchsia-600 m-auto hover:scale-105 transition-all duration-700 mb-15 lg:mb-22"
          >
            <img src={assets.upload_btn_icon}></img>
            <p className="text-white text-xl text-name font-bold">
              Upload Image
            </p>
          </label>
        </div>
      </div>
    </>
  );
}

export default Action;
