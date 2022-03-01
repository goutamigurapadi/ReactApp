import React, { useState } from "react";
import Chart from "chart.js/auto";
import SpecialButton from "./SpecialButton";
import { BarChart } from "./BarChart";
import RadarChart from "./RadarChart";

const ChartWrapper = ({ approvedSymbol, dataTypeScores }) => {
  //to set list of button properties
  const [buttons, setButtons] = useState([
    { label: "Bar", isSelected: true },
    { label: "Radar", isSelected: false }
  ]);

  //handle user onclik button change event
  const handleButtonsChange = ({
    buttons,
    setButtons,
    handleButtonsChange
  }) => label => {
    const newButtonsState = buttons.map(button => {
      if (button.label === label) {
        return (button = { label: button.label, isSelected: true });
      }
      return {
        label: button.label,
        isSelected: false
      };
    });
    setButtons(newButtonsState);
  };

  return (
    <div>
      <SpecialButton {...{ buttons, setButtons, handleButtonsChange }} />
      <hr className="btn-hr" />
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          {buttons[0].isSelected && (
            <div>
              <BarChart {...{ approvedSymbol, dataTypeScores }} />
            </div>
          )}
          {buttons[1].isSelected && (
            <div>
              <RadarChart {...{ approvedSymbol, dataTypeScores }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ChartWrapper;
