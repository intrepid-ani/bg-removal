import React from "react";
import { testimonialsData as datas } from "../assets/assets";

function Testimonial() {
  return (
    <>
      <div className="px-4 mt-10 lg:px-44 sm:mt-20">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-bold bg-gradient-to-r from-gray-800 to-neutral-400 bg-clip-text text-transparent cursor-default">
          What Our Users Says{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto py-8 px-4">
          {datas.map((data, i) => {
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700 "
              >
                <p className="text-3xl font-extrabold">"</p>
                <p className="text-xl font-medium text-neutral-500">
                  {data.text}
                </p>
                <div className="flex gap-5 mt-5">
                  <img
                    className="max-w-12 rounded-full"
                    src={data.image}
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-700">{data.author}</p>
                    <p className="text-l font-medium text-neutral-500">
                      {data.jobTitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Testimonial;
