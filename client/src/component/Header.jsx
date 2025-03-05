import React from "react";
import { assets } from "../assets/assets.js";
function Header() {
  return (
    <div className="flex items-center justify-between max-sm:flex-col gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* ----------Left Side---------- */}
      <div className="">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-800 leading-tight">
          Remove the <br className="max-md-hidden" />{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md-hidden" /> images for free
        </h1>
        <p className="my-6 text-[15px] sm:text-[18px] text-gray-600">
          Instantly remove backgrounds from your images with AI precision.{" "}
          <br className="max-sm-hidden" />
          <span className="font-semibold">Simple, fast, and free</span>—just
          upload and let the magic happen.🚀
        </p>
        <input type="file" name="" id="upload1" hidden />
        <label
          htmlFor="upload1"
          className="inline-flex gap-3 px-8 py-3.5 text-center rounded-full cursur-pointer bg-gradient-to-r from-violet-600 to-fuchsia-600 m-auto hover:scale-105 transition-all duration-700"
        >
          <img src={assets.upload_btn_icon}></img>
          <p className="text-white text-xl text-name font-bold">Upload Image</p>
        </label>
      </div>
      {/* ----------Right Side---------- */}
      <div className="w-full max-w-md">{<img src={assets.header_img} />}</div>
    </div>
  );
}

export default Header;
