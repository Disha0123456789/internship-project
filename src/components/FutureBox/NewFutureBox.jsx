import React from "react";
import { useNavigate } from "react-router-dom";
const NewFutureBox = () => {
  const navigate = useNavigate();
  
  const handleBirthPageClick = (nextpagePara) => {
    navigate('/MainPage', { state: { nextPage: nextpagePara } });
  };
  //const handleNumeroClick = () => {
  //  navigate('/MainPage', { state: { nextPage: 'Numerology' } });
  //};
  return (
    <>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto">
        <h1 className="text-3xl pb-10 font-semibold text-center">
          Read Your Future Now ! 
        </h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-49">
          <div
            onClick={() => navigate("/tarot_reading")}
            class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-20  rounded-lg mx-auto">
              <img src="/ICONS/tarot.png" alt="12" />
            </div>

            <div class="mt-2.5">
              <h3 class="text-xl sm:text-xl font-semibold text-gray-800 ">
                Tarot Reading
              </h3>
            </div>
          </div>

          <div 
            onClick={() => navigate("/faceRead")}
            class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-20  rounded-lg mx-auto">
              <img src="./ICONS/face.png" alt="13" />
            </div>

            <div class="mt-2.5">
              <h3 class="text-xl sm:text-xl font-semibold text-gray-800 ">
                Face Reading
              </h3>
            </div>
          </div>

          <div 
            onClick={() => navigate("/palmReader")}
            class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="./ICONS/palm.png" alt="13" />
            </div>

            <div class="mt-2.5">
              <h3 class="text-md sm:text-xl font-semibold text-gray-800">
                Palm Reading
              </h3>
            </div>
          </div>
          {/*
          <div class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="./ICONS/finger.png" alt="13" />
            </div>

            <div class="mt-3">
              <h3 class="text-md sm:text-2xl font-semibold text-gray-800">
                Finger Reading
              </h3>
            </div>
          </div>
          */}
        </div>
      </div>

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto">
        <h1 className="text-3xl pb-10 font-semibold text-center">
          Embark On Your Journey !
        </h1>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-49">
            <div 
              onClick={() => navigate("/TimeTravel")}
              class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
              <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
                <img src="/ICONS/timetravel.png" alt="14" />
              </div>

              <div class="mt-2.5">
                <h3 class="text-md sm:text-xl font-semibold text-gray-800 ">
                  Time Travel
                </h3>
              </div>
            </div>

            <div 
              onClick={() => navigate("/AstroMain")}
              class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
              <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
                <img src="/ICONS/astrology.png" alt="15" />
              </div>

              <div class="mt-2.5">
                <h3 class="text-md sm:text-xl font-semibold text-gray-800 ">
                  Astrology
                </h3>
              </div>
            </div>

            <div 
              onClick={() => handleBirthPageClick('LineChart')}
              class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
              <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
                <img src="/ICONS/biorythm.png" alt="16" />
              </div>

              <div class="mt-2.5">
                <h3 class="text-md sm:text-xl font-semibold text-gray-800 ">
                  Biorhythm
                </h3>
              </div>
            </div>
          </div>

      </div>

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto">
        <h1 className="text-3xl pb-10 font-semibold text-center">
          Lets Go To Another Dimension !
        </h1>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-min-10px gap-max-20px">
          <div class="hidden lg:block lg:col-span-1"></div>
          
          <div 
            onClick={() => navigate("/dream")} 
            class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/ICONS/dreaminterpretation.png" alt="17" />
            </div>

            <div class="mt-2.5">
              <h3 class="text-md sm:text-xl font-semibold text-gray-800 ">
                Dream Meaning
              </h3>
            </div>
          </div>
          {/* 
          <div class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
            <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/ICONS/crystalball.png" alt="19" />
            </div>

            <div class="mt-2.5">
              <h3 class="text-md sm:text-xl font-semibold text-gray-800 ">
                Crystal Ball
              </h3>
            </div>
          </div>
          */}
          <div class="hidden lg:block lg:col-span-1"></div>
          <div 
          onClick={() => handleBirthPageClick('Numerology')}
          class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
              <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
                <img src="/ICONS/numerology.png" alt="16" />
              </div>

              <div class="mt-2.5">
                <h3 class="text-md sm:text-xl font-semibold text-gray-800 ">
                  Numerology
                </h3>
              </div>
          </div>
        </div>
 
      </div>

      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto">
        <h1 className="text-3xl pb-10 font-semibold text-center">
          Nourish Your Soul !
        </h1>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-min-10px gap-max-20px">
          <div class="hidden lg:block lg:col-span-1"></div>
          <div
            onClick={() => navigate("/Meditation")}
            class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
          
            <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/ICONS/meditation.png" alt="14" />
            </div>

            <div class="mt-2.5">
              <h3 class="text-md sm:text-xl font-semibold text-gray-800 ">
                Meditation
              </h3>
            </div>
          </div>
          {/**  Divine Connection logo
          <div class="h-36 sm:h-50 flex flex-col justify-center">
            <img src="/ICONS/divinelogohorizontal.png" alt="14" />
          */}
            {/* <div class="mt-3">
              <h3 class="text-md sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Meditation
              </h3>
            </div> 
          </div>
          */}
          <div class="hidden lg:block lg:col-span-1"></div>
          <div
            onClick={() => navigate("/EmotionalSupport")}
            class="h-36 sm:h-50 w-60 flex flex-col justify-center border bg-gradient-to-tr from-purple-300 to-blue-300 rounded-xl text-center p-4 mx-auto md:p-5 dark:border-gray-700">
          
            <div class="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/ICONS/emotionalsupport.png" alt="15" />
            </div>

            <div class="mt-2.5">
              <h3 class="text-md sm:text-xl font-semibold text-gray-800 ">
                Emotional Support
              </h3>
            </div>
          </div>
        </div>

        {/* <div className="w-full flex items-center justify-center mt-16">
            <img src="/ICONS/divinelogohorizontal.png" alt="Divine Logo" className="w-[40%]" />
          </div> */}
      </div>
    </>
  );
};

export default NewFutureBox;
