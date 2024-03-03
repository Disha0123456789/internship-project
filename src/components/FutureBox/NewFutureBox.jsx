import React from "react"

const NewFutureBox = () => {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 className="text-3xl pb-6 font-semibold">Read Your Future Now</h1>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14">
          <div class="h-36 sm:h-56 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-16 md:size-40 rounded-lg mx-auto">
              <img
                src="/ICONS/tarot.png"
                alt="12"
              />
            </div>

            <div class="mt-3">
              <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Tarrot Reading
              </h3>
            </div>
          </div>

          <div class="h-36 sm:h-56 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-16 md:size-40 rounded-lg mx-auto">
              <img
                src="./ICONS/angel.png"
                alt="13"
              />
            </div>

            <div class="mt-3">
              <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Angel Reading
              </h3>
            </div>
          </div>

          <div class="h-36 sm:h-56 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-16 md:size-40 rounded-lg mx-auto">
              <img
                src="./ICONS/ketinalove.png"
                alt="13"
              />
            </div>

            <div class="mt-3">
              <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Ketina Love
              </h3>
            </div>
          </div>

          <div class="h-36 sm:h-56 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-16 md:size-40 rounded-lg mx-auto">
              <img
                src="./ICONS/face.png"
                alt="13"
              />
            </div>

            <div class="mt-3">
              <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Face Reader
              </h3>
            </div>
          </div>

          <div class="h-36 sm:h-56 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-16 md:size-40 rounded-lg mx-auto">
              <img
                src="./ICONS/palm.png"
                alt="13"
              />
            </div>

            <div class="mt-3">
              <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Palm Reader
              </h3>
            </div>
          </div>

          <div class="h-36 sm:h-56 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-16 md:size-40 rounded-lg mx-auto">
              <img
                src="./ICONS/finger.png"
                alt="13"
              />
            </div>

            <div class="mt-3">
              <h3 class="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Finger Reader
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFutureBox
