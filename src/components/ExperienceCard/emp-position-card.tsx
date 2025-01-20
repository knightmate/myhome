import React, { useState } from "react";
import SkillTag from "../TagChip";
interface PositionDetailsProps {
  title: string; // Job title
  joinDate: string; // Start date
  endDate: string; // End date
  location: string; // Job location
  employmentType?: string; // Full-time, Part-time, etc.
  isExpanded?: boolean; // Whether the details should be expanded initially
}

const PositionDetails: React.FC<PositionDetailsProps> = ({
  title,
  joinDate,
  endDate,
  location,
  employmentType = "Full-time",
}) => {
 
  return (
    <div
       className="w-full flex items-center relative p-0 text-left cursor-pointer"
      role="button"
    >
      {/* Main Row */}
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <div className="w-full flex flex-col gap-1">
            {/* Job Title */}
            <div className="flex items-center gap-2">
              <p className="text-gray-900 dark:text-gray-100 font-semibold text-sm">
                {title}
              </p>
            </div>
            {/* Job Details */}
            <p className="text-gray-500 dark:text-gray-400 font-normal text-xs">
              <strong>
                {joinDate} - {endDate}{" "}
                <span className="font-normal capitalize">• {location}</span>{" "}
                <span className="font-normal capitalize">• {employmentType}</span>
              </strong>
            </p>
          </div>
        </div>
 </div>
     
    </div>
  );
};

export default PositionDetails;
