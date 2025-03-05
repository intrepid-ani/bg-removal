import React from "react";
import { assets, plans } from "../assets/assets";

function Price() {
  return (
    <>
      <div className="max-sm:flex-col gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 min-h-[75vh] text-center mb-22">
        <button className=" border font-semibold mx-auto border-neutral-700  text-neutral-700 rounded-full px-4 py-2 mb-6">
          OUR PLANS
        </button>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-gradient-to-r from-gray-800 to-neutral-400 bg-clip-text text-transparent cursor-default ">
          Select the perfect plan to meet your needs.
        </h2>
        <div className="flex flex-wrap gap-8 justify-center text-left mt-14">
          {plans.map((plan, i) => {
            return (
              <div
                key={i}
                className="bg-white drop-shadow-lg border border-neutral-400 rounded-xl py-12 px-8 hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                {console.log(plan)}
                <img width="35px" src={assets.logo_icon} alt="" />
                <p className="text-xl md:text-2xl mt-3 font-semibold text-neutral-800">
                  {plan.id}
                </p>
                <p className="text-neutral-500 text-xl mb-5">{plan.desc}</p>
                <p className="text-neutral-600 text-l md:textl">
                  <span className="font-semibold text-2xl text-neutral-800 ">
                    ${plan.price}
                  </span>{" "}
                  /{plan.credits}credits
                </p>
                <button className="bg-neutral-700 text-white font-medium w-full mt-5 py-2 px-4 rounded-xl cursor-pointer">
                  Buy Credits
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Price;
