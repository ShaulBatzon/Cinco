import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["April ", "May ", "June ", "July ", "August ", "September "],
  datasets: [
    {
      label: "Orders per month",
      data: [11, 9, 13, 6, 8, 4],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132)",
    },
    {
      label: "Accounts reached",
      data: [10, 5, 9, 7, 12, 6],
      fill: false,
      backgroundColor: "rgba(10, 204, 114, 0.747)",
      borderColor: "rgba(10, 204, 114, 0.747)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div className="header">{/* <h1 className="title">Line Chart</h1> */}</div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
