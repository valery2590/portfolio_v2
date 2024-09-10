import React from "react";

const CircleWithArrow = ({ direction = "right" }) => {
  const arrowPoints = {
    right: "150,45 150,55 160,50",
    left: "10,45 10,55 0,50",
    up: "45,10 55,10 50,0",
    down: "45,150 55,150 50,160",
  };

  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="5" fill="black" />
      <polygon points={arrowPoints[direction]} fill="black" />
    </svg>
  );
};

export default CircleWithArrow;
