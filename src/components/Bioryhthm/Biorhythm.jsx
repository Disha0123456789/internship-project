import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import DailyInterpreTation from './DailyInterpreTation';
import { useLocation } from 'react-router-dom';
import './LineChart.css';

const BiorythmCalculator = () => {
  const location = useLocation();
  const dob = location.state.dateOfBirth;

  useEffect(() => {
    calculateBiorythm(dob);
  }, [dob]);

  const optionss = {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const DescriptionForPhysical=(value)=>{
  if (value >= 0 && value <= 10) {
    return " Indicates an extremely low level of physical energy and vitality, possibly experiencing significant fatigue and lethargy.";
  } else if (value > 10 && value <= 20) {
    return "Suggests a reduced level of physical energy, feeling somewhat tired or lacking in stamina, but still capable of basic activities.";
  } else if (value > 20 && value <= 30) {
    return "Represents a slightly diminished physical state, where energy levels may be lower than usual, requiring some effort to complete tasks.";
  } else if (value > 30 && value <= 40) {
    return "Reflects a normal level of physical energy and well-being, maintaining a balanced state without notable highs or lows.";
  } else if (value > 40 && value <= 50) {
    return "Denotes a heightened level of physical vitality and energy, feeling invigorated and capable of sustained activity.";
  } else if (value > 50 && value <= 60) {
    return "Indicates a moderate level of physical well-being, neither excessively energetic nor fatigued, maintaining a steady equilibrium.";
  } else if (value > 60 && value <= 70) {
    return "Represents a state of robust physical health and vitality, feeling strong, resilient, and able to tackle challenges with ease.";
  } else if (value > 70 && value <= 80) {
    return "Signifies an elevated level of physical energy and strength, experiencing a sense of vigor and readiness for demanding tasks.";
  } else if (value > 80 && value <= 90) {
    return "Reflects an exceptional level of physical vitality and vigor, feeling exceptionally energetic and capable of peak performance.";
  } else if(value > 90 && value <= 100){
    return "Represents an outstanding state of physical well-being and vitality, characterized by peak energy levels and optimal physical health.";
  }else {
    return " ";
  }
}
const DescriptionForEmotional=(value)=>{
  if (value >= 0 && value <= 10) {
    return "Indicates a state of profound emotional depletion, feeling extremely despondent, and possibly experiencing severe mood swings.";
  } else if (value > 10 && value <= 20) {
    return "Suggests a diminished emotional state, feeling somewhat down or unmotivated, but still capable of managing daily emotions.";
  } else if (value > 20 && value <= 30) {
    return " Represents a slightly subdued emotional state, where mood fluctuations may occur, requiring some effort to maintain emotional equilibrium."
  } else if (value > 30 && value <= 40) {
    return "Reflects a balanced emotional state, experiencing normal fluctuations in mood without significant highs or lows.";
  } else if (value > 40 && value <= 50) {
    return " Denotes a heightened emotional state, feeling optimistic and content, with a greater capacity for joy and enthusiasm.";
  } else if (value > 50 && value <= 60) {
    return " Indicates a moderate level of emotional well-being, neither excessively sensitive nor detached, maintaining a steady emotional balance.";
  } else if (value > 60 && value <= 70) {
    return "Represents a state of emotional resilience and stability, feeling emotionally secure and capable of handling stressors effectively.";
  } else if (value > 70 && value <= 80) {
    return "Signifies an elevated emotional state, experiencing a strong sense of happiness and fulfillment, with minimal emotional distress.";
  } else if (value > 80 && value <= 90) {
    return "Reflects an exceptional level of emotional well-being, feeling deeply satisfied and emotionally fulfilled, with a strong sense of inner peace.";
  } else if(value > 90 && value <= 100) {
    return "Represents an outstanding emotional state, characterized by profound contentment, joy, and emotional harmony, with minimal emotional turmoil.";
  } else{
    return ""
  }
}
const DescriptionForIntellectual=(value)=>{
  if (value >= 0 && value <= 10) {
    return "Indicates a state of severe mental fatigue and cognitive impairment, struggling to focus and comprehend even simple tasks or concepts.";
  } else if (value > 10 && value <= 20) {
    return "Suggests a diminished cognitive state, experiencing difficulty in concentration and problem-solving, but still able to manage basic intellectual tasks.";
  } else if (value > 20 && value <= 30) {
    return "Represents a slightly reduced mental acuity, where cognitive processes may be slower than usual, requiring extra effort to grasp complex ideas.";
  } else if (value > 30 && value <= 40) {
    return "Reflects a normal level of intellectual function, maintaining cognitive abilities without significant impairments or enhancements.";
  } else if (value > 40 && value <= 50) {
    return "Denotes heightened mental clarity and cognitive efficiency, feeling sharp and mentally agile, with an enhanced capacity for learning and understanding.";
  } else if (value > 50 && value <= 60) {
    return "Indicates a moderate level of intellectual aptitude, neither exceptionally quick nor slow, maintaining a balanced cognitive state.";
  } else if (value > 60 && value <= 70) {
    return "Represents a state of intellectual proficiency and effectiveness, able to think critically and solve problems with ease, demonstrating strong cognitive abilities.";
  } else if (value > 70 && value <= 80) {
    return "Signifies an elevated level of intellectual prowess, experiencing exceptional mental sharpness and clarity, with a keen ability to analyze complex issues.";
  } else if (value > 80 && value <= 90) {
    return "Reflects an exceptional level of intellectual acumen and creativity, possessing a deep understanding and insight into various subjects, with a capacity for innovative thinking.";
  } else if(value > 90 && value <= 100) {
    return "Represents an outstanding intellectual state, characterized by superior cognitive abilities and intellectual brilliance, with a remarkable capacity for innovation and problem-solving.";
  } else{
    return ""
  }
}

const DescriptionForAverage=(value)=>{
  if (value >= 0 && value <= 10) {
    return "Indicates a state of severe mental fatigue and cognitive impairment, struggling to focus and comprehend even simple tasks or concepts.";
  } else if (value > 10 && value <= 20) {
    return "Suggests a diminished cognitive state, experiencing difficulty in concentration and problem-solving, but still able to manage basic intellectual tasks.";
  } else if (value > 20 && value <= 30) {
    return "Represents a slightly reduced mental acuity, where cognitive processes may be slower than usual, requiring extra effort to grasp complex ideas.";
  } else if (value > 30 && value <= 40) {
    return "Reflects a typical level of intellectual functioning, where cognitive abilities are neither notably heightened nor impaired, maintaining a steady pace of learning and comprehension.";
  } else if (value > 40 && value <= 50) {
    return "Denotes heightened mental clarity and cognitive efficiency, feeling sharp and mentally agile, with an enhanced capacity for learning and understanding.";
  } else if (value > 50 && value <= 60) {
    return " Indicates a moderate level of intellectual aptitude, neither exceptionally quick nor slow, maintaining a balanced cognitive state.";
  } else if (value > 60 && value <= 70) {
    return "Represents a state of intellectual proficiency and effectiveness, able to think critically and solve problems with ease, demonstrating strong cognitive abilities.";
  } else if (value > 70 && value <= 80) {
    return "Signifies an elevated level of intellectual prowess, experiencing exceptional mental sharpness and clarity, with a keen ability to analyze complex issues.";
  } else if (value > 80 && value <= 90) {
    return "Reflects an exceptional level of intellectual acumen and creativity, possessing a deep understanding and insight into various subjects, with a capacity for innovative thinking.";
  } else if(value > 90 && value <= 100) {
    return " Represents an outstanding intellectual state, characterized by superior cognitive abilities and intellectual brilliance, with a remarkable capacity for innovation and problem-solving.";
  }else{
    return ""
  }
}
  const [physical, setPhysical] = useState([]);
  const [emotional, setEmotional] = useState([]);
  const [intellectual, setIntellectual] = useState([]);
  const [average, setAverage] = useState([]);
  const chartRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString('en-IN', optionss));

  const options = {
    timeZone: 'Asia/Kolkata',
    month: 'long',
    day: 'numeric'
  };

  const labels = [...Array(7).keys()].map((i) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);
    const month = currentDate.toLocaleString('en-IN', options);
    return month;
  });

  useEffect(() => {    
    const ctx = chartRef.current.getContext('2d');

    const chartInstance = new Chart(ctx, {
      type: 'line',
  data: {
    labels: labels,
    datasets: [
      { label: 'Physical', data: physical, borderColor: 'red', backgroundColor: 'red', fill: false },
      { label: 'Emotional', data: emotional, borderColor: 'blue', backgroundColor: 'blue', fill: false },
      { label: 'Intellectual', data: intellectual, borderColor: 'green', backgroundColor: 'green', fill: false },
      { label: 'Spiritual', data: average, borderColor: 'yellow', backgroundColor: 'yellow', fill: false }
    ],
  },
  options: {
    responsive: true,
    animation: false,
    scales: {
      x: { display: true, title: { display: true, text: 'Day' } },
      y: { display: true, title: { display: true, text: 'Value' } }
    }
  }
});

    return () => {
      chartInstance.destroy();
    };
  }, [physical, emotional, intellectual, average, labels]);

  const handleLabelClick = (index) => {
    setSelectedDate(index);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + index);
    setCurrentDate(currentDate.toLocaleDateString('en-IN', optionss));
  };

  const calculateBiorythm = (dob) => {
    if (!dob) return;
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const daysSinceBirth = (Date.now() - new Date(dob).getTime()) / millisecondsInDay;

    const physicalData = [...Array(7)].map((_, index) => (Math.sin((2 * Math.PI * (daysSinceBirth + index)) / 23) +1 ) *50 );
    const emotionalData = [...Array(7)].map((_, index) => (Math.sin((2 * Math.PI * (daysSinceBirth + index)) / 28) +1) * 50);
    const intellectualData = [...Array(7)].map((_, index) => (Math.sin((2 * Math.PI * (daysSinceBirth + index)) / 33) +1) * 50);
    const averageData = physicalData.map((value, index) => (value + emotionalData[index] + intellectualData[index]) / 3);

    setPhysical(physicalData);
    setEmotional(emotionalData);
    setIntellectual(intellectualData);
    setAverage(averageData);
  };
 
  return (
    <>
      <div className='biorythm-first'>
        <div className="Head-Text">
          <h1>Biorhythm</h1>
        </div>
        <div>
          <canvas className='canvas' ref={chartRef}></canvas>
        </div>
      
        <div className='labelbtn-container'>
          {labels.map((label, index) => (
            <button 
              key={index}
              className="label-button"
              onClick={() => handleLabelClick(index)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className='info-container'>
          <h1 className='physical-info'>physical {Math.floor(physical[selectedDate])}: <span className='desc-dream'>{DescriptionForPhysical(physical[selectedDate])}</span></h1>
          <h1 className='emotional-info'>Emotional {Math.floor(emotional[selectedDate])}: <span className='desc-dream'>{DescriptionForEmotional(emotional[selectedDate])}</span></h1>
          <h1 className='intellectual-info'>Intellectual {Math.floor(intellectual[selectedDate])}: <span className='desc-dream'>{DescriptionForIntellectual(intellectual[selectedDate])}</span></h1>
          <h1 className='average-info'>Spiritual {Math.floor(average[selectedDate])}: <span className='desc-dream'>{DescriptionForAverage(average[selectedDate])}</span></h1>
        </div>
      </div>

      {/*
      <div className='biorhythm-info'>
         <h1 className='biorhythm-title'>The Biorhythms Cycles:</h1>
         <h1 className='physical-cycle-title'>The Physical Cycle</h1>
         <p className='physical-cycle-description'>The Physical cycle, with its 23-day span, touches upon our body's stamina, strength, and overall well-being. It influences various physical attributes, including energy levels, recovery speed, and even disease resistance, marking our capacity for physical activities and challenges.</p>

         <h1 className='emotional-cycle-title'>The Emotional cycle</h1>
         <p className='emotional-cycle-description'>The Emotional cycle, lasting 28 days, mirrors the moon's cycle and deeply affects our psychological state. It guides our feelings, moods, and emotional responses, impacting our interactions, creativity, and emotional resilience.</p>

         <h1 className='intellectual-cycle-title'>The Intellectual Cycle</h1>
         <p className='intellectual-cycle-description'>Spanning 33 days, the Intellectual cycle shapes our mental faculties. It affects cognitive functions like memory, analytical thinking, and problem-solving, indicating periods of heightened intellectual activity of the need for mental rest.</p>

         <h1 className='average-title'>The Spiritual Cycle</h1>
         <p className='average-description'>The combined average of physical, emotional, and intellectual levels provides a holistic view of one's current state. This overall Biorhythm score can guide decisions, indicating general well-being or suggesting caution.</p>

         <h1 className='critical-days-title'>The Critical Days</h1>
         <p className='critical-days-description'>Critical days, or transition days, occur when a biorhythm cycle shifts polarity, moving across the boundary from positive to negative phases. These shifts lead to life's natural fluctuations, contributing to periods of instability that can affect an individual's behavior and actions unusually. While not inherently negative, these days call for increased caution, as one might be more prone to accidents compared to other times in the cycle. Noteworthy are the double and triple transition days, though they are rare, happening once every 7 or 8 years, signaling even more significant shifts.</p>
      </div>
      */}
      <DailyInterpreTation 
        physical={Math.floor(physical[selectedDate])}
        emotional={Math.floor(emotional[selectedDate])}
        intellectual={Math.floor(intellectual[selectedDate])}
        average={Math.floor(average[selectedDate])}
        date={currentDate}
      />
    </>
  );
};

export default BiorythmCalculator;
