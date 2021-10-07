import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";

export const MyChart = () => {
  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [18, 19],
        backgroundColor: ["red", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 3,
      },
    ],
  };

  return (
    // <Pie data={data} />
    <Doughnut data={data} />
  );
};
