import React from "react"

const Hero = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto mb-2">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
        <div class="text-center bg-gradient-to-tr from-purple-300 to-blue-300 p-8 rounded-xl">
          <div class="flex justify-center items-center mx-auto dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/top-row/horoscope.png"
              alt="2"
              className="flex-shrink-0 size-40 text-gray-600 dark:text-gray-400"
            />
          </div>
          <div class="mt-3">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Horrorscope
            </h3>
          </div>
        </div>

        <div class="text-center bg-gradient-to-tr from-purple-300 to-blue-300 p-8 rounded-xl">
          <div class="flex justify-center items-center mx-auto dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/top-row/kundli.png"
              alt="1"
              className="flex-shrink-0 size-40 text-gray-600 dark:text-gray-400"
            />
          </div>
          <div class="mt-3">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Kundali
            </h3>
          </div>
        </div>

        <div class="text-center bg-gradient-to-tr from-purple-300 to-blue-300 p-8 rounded-xl">
          <div class="flex justify-center items-center mx-auto dark:bg-gray-800 dark:border-gray-700">
            <img
              src="./top-row/love check.png"
              alt="8"
              className="flex-shrink-0 size-40 text-gray-600 dark:text-gray-400"
            />
          </div>
          <div class="mt-3">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Love Check
            </h3>
          </div>
        </div>

        <div class="text-center bg-gradient-to-tr from-purple-300 to-blue-300 p-8 rounded-xl">
          <div class="flex justify-center items-center mx-auto dark:bg-gray-800 dark:border-gray-700">
            <img
              src="/top-row/Fortune Wheel.png"
              alt="3"
              className="flex-shrink-0 size-40 text-gray-600 dark:text-gray-400"
            />
          </div>
          <div class="mt-3 cursor-pointer">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
              Fortune wheel
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
