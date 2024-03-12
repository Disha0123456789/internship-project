import React from "react";
import "./hero.css";
import "/top-row/kundli.png";
const Hero = () => {
  return (
    <div class=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto mb-2">
      <div class="up">
        <div class="text-center gap-2 h-50 flex items-center bg-gradient-to-tr from-purple-300 to-blue-300 p-8 rounded-xl">
          <div class="mt-3">
            <h3 class="text-2xl font-semibold text-gray-800 ">Horoscope </h3>
          </div>
          <div class="flex justify-center items-center mx-auto  dark:border-gray-700">
            <img
              src="/top-row/horoscope.png"
              alt="2"
              className="flex-shrink-0 size-20 text-gray-600 dark:text-gray-400"
            />
          </div>
        </div>

        <div class="text-center gap-6 h-50 flex items-center bg-gradient-to-tr from-purple-300 to-blue-300 p-8 rounded-xl">
          <div class="mt-3">
            <h3 class="text-2xl font-semibold text-gray-800 ">Kundli</h3>
          </div>
          <div class="flex justify-center items-center mx-auto  dark:border-gray-700">
            <img
              src="/top-row/kundli.png"
              alt="1"
              className="flex-shrink-0 size-20 text-gray-600 dark:text-gray-400"
            />
          </div>
        </div>

        <div class="text-center gap-2 h-50 flex items-center  bg-gradient-to-tr from-purple-300 to-blue-300 p-8 rounded-xl">
          <div class="mt-3 cursor-pointer">
            <h3 class="text-2xl font-semibold text-gray-800 ">Fortune wheel</h3>
          </div>
          <div class="flex justify-center items-center mx-auto  dark:border-gray-700">
            <img
              src="/top-row/Fortune Wheel.png"
              alt="3"
              className="flex-shrink-0 size-20 text-gray-600 dark:text-gray-400"
            />
          </div>
        </div>
        <div class="text-center gap-3 h-50 flex items-center  bg-gradient-to-tr from-purple-300 to-blue-300 p-8 rounded-xl">
          <div class="mt-3 cursor-pointer">
            <h3 class="text-2xl font-semibold text-gray-800 ">Love Check</h3>
          </div>
          <div class="flex justify-center items-center mx-auto  dark:border-gray-700">
            <img
              src="/top-row/love check.png"
              alt="3"
              className="flex-shrink-0 size-20 text-gray-600 dark:text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
