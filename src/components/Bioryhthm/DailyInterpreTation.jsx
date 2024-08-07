import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types'; 
import { prototype } from 'postcss/lib/previous-map';

function DailyInterpreTation({physical,emotional, intellectual,average,date}) {

   // Data
  const data = {
    labels: ['Physical', 'Emotional', 'Intellectual', 'Spiritual'],
    datasets: [
      {
        label: 'Values',
        backgroundColor: ['red', 'skyblue', 'green', 'yellow'],
        borderWidth: 1,
        hoverBackgroundColor: ['darkred', 'lightblue', 'lightgreen', 'orange'],
        data: [physical, emotional, intellectual, average], // Example values
      },
    ],
  };

  // Chart options
  const options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Points',
        },
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
        ticks: {
          min: 0,
          max: 100,
          stepSize: 50,
        },
      }],
    },
  };

 

  return (
    <div className="bio-daily-interpretaion ">
      <div className="p-3 shadow-3xl shadow-black bg-gray-100 text-black font-semibold font-serif rounded-md">
         <h1 className="text-blue-500 text-3xl font-semibold text-center">Daily Interpretation</h1>
         <h1 className="text-xl text-blue-500 font-medium text-center">{date}</h1>
         {/* for chart */}
         <div className='bg-gray-100'> 
        <Bar height={300} data={data} options={options} />
      </div>
      </div>
      
      {/*
      <div className='mt-10 shadow-2xl shadow-black bg-gradient-to-b from-black to-gray-500 text-white font-semibold font-serif p-4 rounded-md'>
         <h1 className="text-red-500 text-4xl font-semibold">Physical</h1>
         <p className='text-xl mt-4 mb-5'>During the low phase of your Physical cycle, energy and vitality may feel depleted, leading
          to fatigue. This time calls for rest and recuperation, as physical and sexual activity interest
          diminishes, and endurance decreases. it is crucial to combat and depressive tendencies and be wary of
          overexerting, especially if other cycles are peaking and misleading your energy perception. Attention to diet is advised. 
          This phase, while challenging, is crucial for recovery, allowing the body to recharge and rest.
         </p>
         <h1 className="text-blue-500 text-4xl font-semibold">Emotional</h1>
         <p className='text-xl mt-4 mb-5'>when emotional cycles are low, your overall emotional energy decreases, potentially aiding in situations that 
          benefit from calm or subdued emotional response. Sensitivity and emotional output may diminish, leading to a more inward-focused
          state and reduced sociability. feelings of depression or loneliness are not uncommon, marking a phase of passivity. Irritability over daily occurrences may
          increase.Yet, this period is also a time for emotional recovery, preparing you for the return of stronger emotional engagement.
          </p>
          <h1 className="text-green-500 text-4xl font-semibold">Intellectual</h1>
          <p className='text-xl mt-4 mb-5'>During low Intellectual cycles, your cognitive processing and decision-making a period of mental rest.Concentration might
            be challenging, and impulsiveness can lead to less-than-ideal outcomes. it may become harder to absorb
            new information or tackle complex problems. However, this is a temporary state, serving as a recharge period that ultimately prepares you 
            for a return to full intellectual engagement.
          </p>
          <h1 className=" text-yellow-500 text-4xl font-semibold">Spiritual</h1>
          <p className='text-xl mt-4 mb-5'>
            Low points in any cycle signify a time for rest and recharge, not necessarily negativity These phases 
            offer a change to recover, reflect, and prepare for the nextcycle of growth and activity.
          </p>
      </div>
      */}
    </div>
  )
}

DailyInterpreTation.propTypes = {
  physical: PropTypes.any,
  emotional: PropTypes.any, 
  intellectual: PropTypes.any, 
  average: PropTypes.any,
  date:prototype.string
};
export default DailyInterpreTation
