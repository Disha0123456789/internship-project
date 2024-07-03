import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import anger from './images/anger.png';
import baby from './images/baby.png';
import dream from './images/dream.png';
import future from './images/future.png';
import numero from './images/numero.png';
import palm from './images/palmread.png';
import relationship from './images/realtion.png';
import "./carousel.css";

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel-container group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="carousel-slide"
      ></div>
      {/* Left Arrow */}
      <div
        className="carousel-arrow carousel-arrow-left"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="carousel-arrow carousel-arrow-right"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="carousel-dots">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="carousel-dot"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
