import React from "react";
import "./LineChart.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";

import { Line } from "react-chartjs-2";

// Setting up the labels for the x-axis of the chart
const labels = ["day1", "day2", "day3", "day4", "day5", "day6", "day7"];

// Setting up the data for the chart, including the labels and datasets
const data = {
  labels: labels,
  datasets: [
    {
      label: "Physical     ", // Setting up the label for the dataset
      backgroundColor: "#5EB412", // Setting up the background color for the dataset
      borderColor: "#5EB412", // Setting up the border color for the dataset
      data: [0, 10, 5, 2, 20, 30, 45, 19, 59, 23, 67, 30, 25], // Setting up the data for the dataset
    },
    {
      label: "Emotional     ", // Setting up the label for the dataset
      backgroundColor: "#FF3737", // Setting up the background color for the dataset
      borderColor: "#FF3737", // Setting up the border color for the dataset
      data: [60, 40, 53, 23, 20, 30, 75, 20, 20, 65, 40, 53, 23], // Setting up the data for the dataset
    },
    {
      label: "Spiritual     ", // Setting up the label for the dataset
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
  const navigate = useNavigate();
  return (
    <div className="biorhythm">
      <div className="header">
        <IoIosArrowBack onClick={() => navigate("../")} className="backicon" />
        <h1>Biorhythm</h1>
      </div>
      <div>
        <Line className="linechart" data={data} />
      </div>
      <div className="eclipse">
        <div className="eclipse-container">
          <div className="eclipse-main">
            <div className="main border1">
              <div className="sub">29</div>
            </div>
            <div className="content1">
              <h5>Physical</h5>
            </div>
          </div>
          <div className="eclipse-main">
            <div className="main border2">
              <div className="sub">78</div>
            </div>
            <div className="content1">
              <h5>Emotional</h5>
            </div>
          </div>
          <div className="eclipse-main">
            <div className="main border3">
              <div className="sub">43</div>
            </div>
            <div className="content1">
              <h5>Spiritual</h5>
            </div>
          </div>
          <div className="eclipse-main">
            <div className="main border4">
              <div className="sub">51</div>
            </div>
            <div className="content1">
              <h5>Intellectual</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="dream-result">
        <div className="dreamcard-container">
          <div className="dream-result-card">
            <div className="card-header-pl">
              <h4>
                <div className="Physical-lc"></div>
              </h4>
            </div>
            <h2 className="dream-result-title">Physical</h2>
            <div className="divider"></div>
            <p className="description">
              In a previous incarnation, you were blessed with children who
              brought immense joy and fulfillment into your life. Your offspring
              were known for their intelligence, creativity, and independent
              spirits. As a parent, you provided guidance and support, fostering
              an environment where your children could flourish and pursue their
              passions with confidence.
            </p>
          </div>
        </div>
        <div className="margin-div"></div>
        <div className="dreamcard-container">
          <div className="dream-result-card">
            <div className="card-header-pl">
              <h4>
                <div className="Emotional-lc"></div>
              </h4>
            </div>
            <h2 className="dream-result-title">Emotional</h2>
            <div className="divider"></div>
            <p className="description">
              In a previous incarnation, you were blessed with children who
              brought immense joy and fulfillment into your life. Your offspring
              were known for their intelligence, creativity, and independent
              spirits. As a parent, you provided guidance and support, fostering
              an environment where your children could flourish and pursue their
              passions with confidence.
            </p>
          </div>
        </div>
        <div className="margin-div"></div>
        <div className="dreamcard-container">
          <div className="dream-result-card">
            <div className="card-header-pl">
              <h4>
                <div className="Intellectual-lc"></div>
              </h4>
            </div>
            <h2 className="dream-result-title">Spiritual</h2>
            <div className="divider"></div>
            <p className="description">
              In your past life, you pursued a career path that allowed you to
              express your natural talents and make a meaningful contribution to
              society. Whether as a skilled artisan, respected healer, or
              visionary leader, you embraced your role with passion and
              dedication. Your occupation brought you a sense of fulfillment and
              purpose, leaving a lasting legacy of accomplishment and
              inspiration.
            </p>
          </div>
        </div>
        <div className="margin-div"></div>
        <div className="dreamcard-container">
          <div className="dream-result-card">
            <div className="card-header-pl">
              <h4>
                <div className="Spiritual-lc"></div>
              </h4>
            </div>
            <h2 className="dream-result-title">Intellectual</h2>
            <div className="divider"></div>
            <p className="description">
              In your past life, you pursued a career path that allowed you to
              express your natural talents and make a meaningful contribution to
              society. Whether as a skilled artisan, respected healer, or
              visionary leader, you embraced your role with passion and
              dedication. Your occupation brought you a sense of fulfillment and
              purpose, leaving a lasting legacy of accomplishment and
              inspiration.
            </p>
          </div>
        </div>
        <div className="margin-div"></div>
      </div>
      {/* <div className="cards-container-lc">
        <div className="card-lc">
          <div className="card-header-lc">
            <h4>
              <div className="Physical-lc"></div>
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
        <div className="card-lc">
          <div className="card-header-lc">
            <h4>
            <div className="Emotional-lc"></div>
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
        <div className="card-lc">
          <div className="card-header-lc">
            <h4>
            <div className="Intellectual-lc"></div>
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
        <div className="card-lc">
          <div className="card-header-lc">
            <h4>
            <div className="Spiritual-lc"></div>
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
      </div> */}
    </div>
  );
};

export default LineChart;
