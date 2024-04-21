import React, { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"
import anger from './images/anger.png';
import baby from './images/baby.png';
import dream from './images/dream.png';
import future from './images/future.png';
import numero from './images/numero.png';
import palm from './images/palmread.png';
import relationship from './images/realtion.png';
const Carousel = () => {
  const slides = [
    { url: anger },
    { url: baby },
    { url: relationship },
    { url: palm },
    { url: future },
    { url: dream },
    { url: numero }
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div className="max-w-[1350px] h-[540px] w-full m-auto mb-8 px-4 relative group">
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className="w-full h-[500px] rounded-2xl bg-center bg-cover duration-500"
    ></div>
    {/* Left Arrow */}
    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <BsChevronCompactLeft
        onClick={prevSlide}
        size={30}
      />
    </div>
    {/* Right Arrow */}
    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <BsChevronCompactRight
        onClick={nextSlide}
        size={30}
      />
    </div>
    <div className="flex justify-center absolute bottom-0 left-0 right-0 py-2">
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className="text-2xl cursor-pointer"
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default Carousel
