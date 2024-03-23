import React from 'react'
import './DreamHistoryList.css'
import { useNavigate } from "react-router-dom";

export default function DreamHistoryList() {
  const navigate = useNavigate();

  const cards = [
    { title: 'Dream Title', date: '20 Feb 2024', description: "Through face reading, we discern ancestral origins, tracing ineage to ancient roots. The contours of your face whisper tales of ancestry, revealing a rich tapes try of heritage." },
    { title: 'Dream Title', date: '20 Feb 2024', description: "Through face reading, we discern ancestral origins, tracing ineage to ancient roots. The contours of your face whisper tales of ancestry, revealing a rich tapes try of heritage." },
    { title: 'Dream Title', date: '20 Feb 2024', description: "Through face reading, we discern ancestral origins, tracing ineage to ancient roots. The contours of your face whisper tales of ancestry, revealing a rich tapes try of heritage." },
    { title: 'Dream Title', date: '20 Feb 2024', description: "Through face reading, we discern ancestral origins, tracing ineage to ancient roots. The contours of your face whisper tales of ancestry, revealing a rich tapes try of heritage." },
    { title: 'Dream Title', date: '20 Feb 2024', description: "Through face reading, we discern ancestral origins, tracing ineage to ancient roots. The contours of your face whisper tales of ancestry, revealing a rich tapes try of heritage." },
    { title: 'Dream Title', date: '20 Feb 2024', description: "Through face reading, we discern ancestral origins, tracing ineage to ancient roots. The contours of your face whisper tales of ancestry, revealing a rich tapes try of heritage." },
    { title: 'Dream Title', date: '20 Feb 2024', description: "Through face reading, we discern ancestral origins, tracing ineage to ancient roots. The contours of your face whisper tales of ancestry, revealing a rich tapes try of heritage." },
    { title: 'Dream Title', date: '20 Feb 2024', description: "Through face reading, we discern ancestral origins, tracing ineage to ancient roots. The contours of your face whisper tales of ancestry, revealing a rich tapes try of heritage." },
    // Add more cards as needed
  ];

  return (
    <div className='dreamhistory-list'>
      <div className='Meditation-text'>
        <p>Dream History</p>
      </div>
      <div onClick={() => navigate("/dream_history")} className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className='card-top-container'>
              <h3 className="card-title">{card.title}</h3>
              <p>{card.date}</p>
            </div>
              <div className='divider'></div>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
