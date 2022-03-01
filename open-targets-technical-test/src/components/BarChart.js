import React from "react";
import { Bar } from "react-chartjs-2";
import { startCase, map } from "lodash";

// display bar chart with given data
export const BarChart = data => {
  var graphIds = map(data.dataTypeScores, "id");
  var graphXAxisLabels = [];

  // loop through x asis labels, remove underscore and capitalize each word
  graphIds.forEach(element => {
    return graphXAxisLabels.push(startCase(element));
  });

  // constructing bar chart data
  const barChartData = {
    labels: graphXAxisLabels,
    datasets: [
      {
        label: `Data Type Score: ${data.approvedSymbol} and lung carcinoma`, // chart label
        data: map(data.dataTypeScores, "score"), // chart data
        backgroundColor: "rgba(52, 137, 202, 1)"
      }
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  };

  return (
    <div>
      <Bar data={barChartData}></Bar>
    </div>
  );
};
