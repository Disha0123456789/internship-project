import React from "react";
import "./LineChart.css";
//import  Chart  from "chart.js/auto";

import { Line } from "react-chartjs-2";

// Setting up the labels for the x-axis of the chart
const labels = [
  "day1",
  "day2",
  "day3",
  "day4",
  "day5",
  "day6",
  "day7",
  "day8",
  "day9",
  "day10",
  "day11",
  "day12",
];

// Setting up the data for the chart, including the labels and datasets
const data = {
  labels: labels,
  datasets: [
    {
      label: "Physical", // Setting up the label for the dataset
      backgroundColor: "#5EB412", // Setting up the background color for the dataset
      borderColor: "#5EB412", // Setting up the border color for the dataset
      data: [0, 10, 5, 2, 20, 30, 45, 19, 59, 23, 67, 30, 25], // Setting up the data for the dataset
    },
    {
      label: "Emotional", // Setting up the label for the dataset
      backgroundColor: "#FF3737", // Setting up the background color for the dataset
      borderColor: "#FF3737", // Setting up the border color for the dataset
      data: [60, 40, 53, 23, 20, 30, 75, 20, 20, 65, 40, 53, 23], // Setting up the data for the dataset
    },
    {
      label: "Spiritual", // Setting up the label for the dataset
      backgroundColor: "#F0C119", // Setting up the background color for the dataset
      borderColor: "#F0C119", // Setting up the border color for the dataset
      data: [40, 60, 5, 22, 20, 20, 65, 40, 53, 23, 20, 30, 75], // Setting up the data for the dataset
    },
    {
      label: "Intellectual", // Setting up the label for the dataset
      backgroundColor: "#117BB3", // Setting up the background color for the dataset
      borderColor: "#117BB3", // Setting up the border color for the dataset
      data: [20, 19, 59, 23, 67, 30, 25, 10, 5, 2, 20, 30, 45], // Setting up the data for the dataset
    },
  ],
};

// Defining the LineChart component
const LineChart = () => {
  return (
    <div className="biorhythm">
      <div className="header">
        <h1>Biorhythm</h1>
      </div>
      <Line data={data} />
      <div className="eclipse">
        <div className="eclipse-container">
          <div className="eclipse-main">
            <div className="main border1">
              <div className="sub">29</div>
            </div>
            <div className="content">
              <h5>Physical</h5>
            </div>
          </div>
          <div className="eclipse-main">
            <div className="main border2">
              <div className="sub">78</div>
            </div>
            <div className="content">
              <h5>Emotional</h5>
            </div>
          </div>
          <div className="eclipse-main">
            <div className="main border3">
              <div className="sub">43</div>
            </div>
            <div className="content">
              <h5>Spiritual</h5>
            </div>
          </div>
          <div className="eclipse-main">
            <div className="main border4">
              <div className="sub">51</div>
            </div>
            <div className="content">
              <h5>Intellectual</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div className="card">
          <div className="card-header">
            <h4>
              <div className="Physical"></div>
              Physical
            </h4>
          </div>
          <p>
            In a past life, you were deeply committed to a partner who embodied
            qualities of wisdom and compassion. Your union was characterized by
            mutual respect and a shared sense of purpose. Together, you may have
            experienced the joy of raising a family, nurturing strong bonds with
            your children, and creating a harmonious household filled with love
            and understanding.
          </p>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>
            <div className="Emotional"></div>
              Emotional
            </h4>
          </div>
          <p>
            In a previous incarnation, you were blessed with children who
            brought immense joy and fulfillment into your life. Your offspring
            were known for their intelligence, creativity, and independent
            spirits. As a parent, you provided guidance and support, fostering
            an environment where your children could flourish and pursue their
            passions with confidence.
          </p>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>
            <div className="Intellectual"></div>
              Intellectual
            </h4>
          </div>
          <p>
            In your past life, you pursued a career path that allowed you to
            express your natural talents and make a meaningful contribution to
            society. Whether as a skilled artisan, respected healer, or
            visionary leader, you embraced your role with passion and
            dedication. Your occupation brought you a sense of fulfillment and
            purpose, leaving a lasting legacy of accomplishment and inspiration.
          </p>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>
            <div className="Spiritual"></div>
              Spiritual
            </h4>
          </div>
          <p>
            In your past life, you pursued a career path that allowed you to
            express your natural talents and make a meaningful contribution to
            society. Whether as a skilled artisan, respected healer, or
            visionary leader, you embraced your role with passion and
            dedication. Your occupation brought you a sense of fulfillment and
            purpose, leaving a lasting legacy of accomplishment and inspiration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
