import React from "react";

interface ConnectingLineProps {
  color: string; // Dynamic color for the line
  position?: string; // Optional positioning (default is `-left-[21px]`)
}

const ConnectingLine: React.FC<ConnectingLineProps> = ({ color, position = "-left-[21px]" }) => {
  return (
    <div
      
      style={{ borderColor: color,border:"1px solid red" }}
    ></div>
  );
};

export default ConnectingLine;
