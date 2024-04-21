import React from 'react';
export default function About() {
  const params = new URLSearchParams(document.location.search);
    const geminiuser = params.get("day")
    console.log(geminiuser)


  const gemini_Urls = [
    'http://localhost:3000/gemini?day=Yesterday',
    'http://localhost:3000/gemini?day=Today',
    'http://localhost:3000/gemini?day=Tomorrow',
  ];
  const days = [
    'Yesterday',
    'Today',
    'Tomorrow',
  ];

  return (
    <div>
      <div className='Gemini-Box'>
        {
          gemini_Urls.map((i, index) => <content myGeminiLink={gemini_Urls[index]} GeminiUrl={days[index]} Day={days[index]} />)
        }

      </div>
    </div>
  )
}
