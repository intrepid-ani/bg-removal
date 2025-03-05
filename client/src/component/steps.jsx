import React from "react";
import { assets } from "../assets/assets";

function Steps() {
  const steps = [
    {
      imgSrc: assets.upload_icon,
      title: "Upload Image",
      description: "Upload an image from your device to get started.",
    },
    {
      imgSrc: assets.remove_bg_icon,
      title: "Remove Background",
      description: "Our AI will automatically remove the background.",
    },
    {
      imgSrc: assets.download_icon,
      title: "Download Image",
      description: "Download your background-free image instantly.",
    },
  ];

  return (
    <div className="m-2 lg:mx-44 lg:my-20 py-15 xl:py-22">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-gradient-to-r from-gray-800 to-neutral-400 bg-clip-text text-transparent cursor-default">
        Steps To Remove The Background <br />
        Image In Seconds
      </h2>
      <div className="flex gap-4 flex-wrap lg:flex-nowrap items-start justify-center mt-16 xl:mt-24">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex gap-2 items-start bg-white border-purple-200 drop-shadow-lg p-7 pb-10 rounded transition-all hover:scale-105 cursor-default"
          >
            <img src={step.imgSrc} className="max-w-9" alt="" />
            <div>
              <p className="font-medium text-xl">{step.title}</p>
              <p className="mt-1 text-sm text-neutral-500">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
