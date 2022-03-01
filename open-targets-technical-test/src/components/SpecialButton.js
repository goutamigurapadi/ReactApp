import React from "react";

const SpecialButton = ({ buttons, setButtons, handleButtonsChange }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <button
          className={`btn bar-chart-btn ${button.isSelected && " btn-primary"}`}
          key={`${button.label}-${index}`}
          onClick={() =>
            handleButtonsChange({ buttons, setButtons })(button.label)
          }
        >
          {button.label}
        </button>
      ))}
    </>
  );
};

export default SpecialButton;
