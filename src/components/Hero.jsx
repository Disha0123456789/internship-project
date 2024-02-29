import React from "react"

const Hero = () => {
  return (
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-6">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          <div class="text-center bg-gradient-to-r from-purple-400 to-violet-400 p-8 rounded-xl">
            <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
              <img
                src="https://cdn-icons-png.flaticon.com/512/867/867780.png"
                alt="2"
                className="flex-shrink-0 size-7 text-gray-600 dark:text-gray-400"
              />
            </div>
            <div class="mt-3">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Horrorscope</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400 tracking-tight leading-4">
                Find out what the stars say for you
              </p>
            </div>
          </div>

          <div class="text-center bg-gradient-to-r from-purple-400 to-violet-400 p-8 rounded-xl">
            <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
              <img
                src="https://cdn-icons-png.flaticon.com/512/815/815839.png"
                alt="1"
                className="flex-shrink-0 size-7 text-gray-600 dark:text-gray-400"
              />
            </div>
            <div class="mt-3">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Kundali</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400 tracking-tight leading-4">
                an astrological chart that shows the position of planets
              </p>
            </div>
          </div>

          <div class="text-center bg-gradient-to-r from-purple-400 to-violet-400 p-8 rounded-xl">
            <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
              <img
                src="https://cdn-icons-png.flaticon.com/512/14345/14345573.png"
                alt="8"
                className="flex-shrink-0 size-7 text-gray-600 dark:text-gray-400"
              />
            </div>
            <div class="mt-3">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Love Check</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400 tracking-tighter leading-4">
                tool that calculates the love % in your life
              </p>
            </div>
          </div>

          <div class="text-center bg-gradient-to-r from-purple-400 to-violet-400 p-8 rounded-xl">
            <div class="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5005/5005657.png"
                alt="3"
                className="flex-shrink-0 size-7 text-gray-600 dark:text-gray-400"
              />
            </div>
            <div class="mt-3">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Fortune wheel</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400 tracking-tighter leading-4">
                Predict your luck within few fortune wheel spins
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero
