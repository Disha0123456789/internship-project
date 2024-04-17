import React, { useState } from "react";
import WheelComponent from "./WheelComponent";
import "./Wheel.css";

function FortuneWheel() {
  const segments = ["Red", "Green", "White", "Orange", "Blue", "Violet", "Black", "Yellow"];
  const segColors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#FFFFFF", // White
    "#FF7F00", // Orange
    "#0000FF", // Blue
    "#8A2BE2", // Violet 
    "#000000", // Black
    "#FFFF00", // Yellow 
  ];

  const [winningSegmentColor, setWinningSegmentColor] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);

  const onFinished = (winner) => {
    const index = segments.indexOf(winner);
    if (index !== -1) {
      setWinningSegmentColor(segColors[index]);
      // Set the associated message here
      setPopupMessage(getMessageForSegment(winner));
    }
  };

  // Function to close the popup window
  const closePopup = () => {
    setPopupMessage(null);
  };

  // Function to get the associated message for the winning segment
  const getMessageForSegment = (segment) => {
    // Define your messages here based on the segment
    const messages = {
      Red: "Red isn't just a color; it's a primal force. Imagine a crackling bonfire, its flames licking the night sky – that's the passionate energy of red. It represents the intense love that burns between soulmates, the raw courage that lets you face your fears, and the unbridled determination that fuels your greatest achievements. Think of a personal experience where you felt this red energy surging within you. Was it a heart-pounding moment of competition, a passionate declaration of love, or the burning desire to achieve a long-held goal?",
      Green: "Green, the verdant heart of the rainbow, is a breath of fresh air. Imagine standing amidst a lush forest, the sunlight dappling through the leaves, and the smell of damp earth filling your senses. That's the peace and harmony green represents. It's the nurturing energy of nature, the potential for growth in new beginnings, and the sense of balance that brings tranquility to your life. When did you last feel that sense of calm associated with green? Was it during a nature walk, the quiet focus of tending to your garden, or the feeling of growth in a new relationship?",
      Orange: "Orange is the vibrant child of red and yellow, brimming with enthusiasm and a zest for life. Picture a ripe orange just plucked from the tree, its juicy explosion mirroring the burst of creative energy orange represents. It's the spark that ignites your imagination, the uninhibited joy of self-expression, and the playful spirit that fuels your most innovative ideas. When did you last experience that orange spark? Was it while painting a masterpiece, composing a lively song, or simply coming up with a brilliant solution to a problem?",
      White: "White represents purity, clarity, and innocence. It embodies a sense of openness and possibility, like a blank canvas awaiting a masterpiece. White encourages simplicity, offering a fresh start and a clean slate. It symbolizes peace, light, and the potential for new beginnings. Reflect on a time when you felt the serene tranquility associated with white. Was it during a quiet moment of meditation, the blissful stillness of a snowy landscape, or the feeling of clarity that comes with letting go of burdens?",
      Blue: "Blue, the color of the vast ocean and endless sky, evokes feelings of trust and serenity. Imagine gazing upon a star-studded night sky, feeling a sense of awe and connection to something much larger than yourself. That's the depth of blue – wisdom, loyalty, and a sense of peace that washes over you like gentle waves. Think of a time you felt that blue tranquility. Was it during a heartfelt conversation with a trusted friend, the calming rhythm of your breath during meditation, or the feeling of security knowing you are loved and supported?",
      Violet: "Violet, the final color, blends the fiery passion of red with the calming peace of blue. Imagine a majestic butterfly emerging from its chrysalis, its wings shimmering with an otherworldly beauty. That's the transformative power of violet – creativity, inspiration, and the potential for limitless change. Think of a time you experienced a personal transformation. Was it a new experience that opened your eyes to a different perspective, the moment you decided to chase a lifelong dream, or the feeling of boundless potential awakening within you?",
      Yellow: "Yellow, the color of sunshine, bathes us in warmth and optimism. Imagine a field of sunflowers, their faces turned towards the sun, radiating pure happiness. That's the essence of yellow – pure joy, childlike wonder, and the unwavering belief in a brighter tomorrow. It's the feeling of pure contentment on a perfect summer day, the intellectual stimulation that comes with learning something new, or the simple act of helping someone and witnessing the resulting joy. Reflect on a time when you felt that yellow sunshine radiate from within you.",
      Black: "Black is the color of mystery, depth, and power. It holds the secrets of the universe within its infinite darkness, inviting introspection and exploration. Black represents strength, elegance, and the enigmatic allure of the unknown. It symbolizes resilience, absorbing and transforming energy like the night sky swallowing the light. Reflect on a time when you embraced the darkness and found hidden strength within. Was it during a challenging period of growth, the quiet solitude of a starlit night, or the moment you confronted your fears and emerged stronger?",
    };
    return messages[segment];
  };

  return (
    <div className="wheel-container">
      <div id="wheelCircle">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment=""
          onFinished={(winner) => onFinished(winner)}
          primaryColor="white" // Golden
          primaryColoraround="goldenrod" // Black
          contrastColor="goldenrod"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={5000}
          downDuration={2000}
        />
        {/* Popup window */}
      {popupMessage && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <p className="message">{popupMessage}</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default FortuneWheel;
