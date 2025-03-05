import React from "react";
import { assets } from "../assets/assets";

function result() {
  return (
    <>
      <div className="px-4 mt-10 lg:px-44 sm:mt-20 min-h-[75vh]">
        <div className="bg-white rounded-xl px-6 py-8 drop-shadow-sm">
          {/* Image Container */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8">
            {/* Preview Componenet */}
            <div className="">
              <p className="text-neutral-600 font-semibold mb-2">
                Oringinal Image
              </p>
              <div>
                <img
                  className="rounded-sm border-gray-500 drop-shadow-sm"
                  src={assets.image_w_bg}
                  alt="preview-image"
                />
              </div>
            </div>

            {/* Postview Component */}
            <div className="flex flex-col">
              <p className="text-neutral-600 font-semibold mb-2">
                Background removed
              </p>
              <div className="rounded-sm relative drop-shadow-sm border-gray-600 h-full overflow-hidden bg-layer">
                <img src={assets.image_wo_bg} alt="postview-image" />
                {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className="border-4 border-purple-800600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div> */}
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-center sm:justify-end gap-4 item-center flex-wrap pt-8">
            <button className="px-5 font-semibold py-2 border-2 border-purple-600 text-purple-600 rounded-full hover:scale-105 transition-all duration-300">
              Try another
            </button>
            <a
              href=""
              className="px-8 py-3.5 text-center rounded-full cursur-pointer bg-gradient-to-tl  from-violet-600 to-fuchsia-600 text-white font-semibold hover:scale-105 transition-all duration-700"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default result;
