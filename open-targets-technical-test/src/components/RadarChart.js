import React from "react";
import { Radar } from "react-chartjs-2";
import { startCase, map } from "lodash";

// display radar chart with given data
export const RadarChart = data => {
  var graphIds = map(data.dataTypeScores, "id");
  var graphXAxisLabels = [];

  // loop through x asis labels, remove underscore and capitalize each word
  graphIds.forEach(element => {
    return graphXAxisLabels.push(startCase(element));
  });

  // constructing radar chart data
  const radarChartData = {
    labels: graphXAxisLabels,
    pointBorderColor: "#fff",
    datasets: [
      {
        label: `Data Type Score: ${data.approvedSymbol} and lung carcinoma`,
        fill: false,
        data: map(data.dataTypeScores, "score"),
        borderColor: "rgba(52, 137, 202, 1)"
      }
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  };

  return (
    <div>
      <Radar data={radarChartData}></Radar>
    </div>
  );
};
export default RadarChart;
