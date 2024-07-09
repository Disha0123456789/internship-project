import React, { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import anger from './images/anger.png';
import baby from './images/baby.png';
import dream from './images/dream.png';
import future from './images/future.png';
import numero from './images/numeroloy_background.jpg';
import palm from './images/palmread.png';
import relationship from './images/realtion.png';
import "./carousel.css";

const Carousel = () => {
  const slides = [
    { 
      url: baby,
      targetUrl: "/kidsFortune",
      text: {
        content: "When Will I Expect A Baby?",
        styleClass: "baby-text"
      }
    },
    { 
      url: relationship,
      targetUrl: "/tarot_reading",
      text: {
        content: "Does My<br>Crush Loves <br>me?",
        styleClass: "relationship-text"
      }
    },
    { 
      url: palm,
      targetUrl: "/palmReader",
      text: {
        content: "What <br>Secrets <br>Does <br>Your <br>Palm <br>Holds?",
        styleClass: "palm-text"
      }
    },
    { 
      url: future,
      targetUrl: "/FuturePrediction",
      text: {
        content: "Glimpse Into The Future",
        styleClass: "future-text"
      }
    },
    { 
      url: dream,
      targetUrl: "/dream_meaning",
      text: {
        content: "Ever <br>Wondered <br>What Your <br>Dreams are <br>telling You?",
        styleClass: "dream-text"
      }
    },
    { 
      url: numero,
      targetUrl: "/numero",
      text: {
        content: "Uncover the Number <br>that shape your <br>Destiny?",
        styleClass: "numero-text"
      }
    },
    { 
      url: anger,
      targetUrl: "/AngerManagement",
      text: {
        content: "How Can I <br>Control My <br>Anger?",
        styleClass: "anger-text"
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Move to the next slide every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  const handleSlideClick = () => {
    const targetUrl = slides[currentIndex].targetUrl;
    navigate(targetUrl); // Use navigate instead of window.location.href
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  return (
    <div
      className="carousel-container group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="carousel-slide"
        onClick={handleSlideClick}
      >
        <div className={`carousel-text ${slides[currentIndex].text.styleClass}`}>
          {/* Using dangerouslySetInnerHTML to render HTML content */}
          <span dangerouslySetInnerHTML={{ __html: slides[currentIndex].text.content }} />
        </div>
      </div>
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
