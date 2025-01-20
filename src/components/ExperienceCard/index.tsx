'use client'

import React, { useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import Card from "../card";
import SkillTag from "../TagChip";
import CompanyTitle from "./company-header";
import ConnectingLine from "./connecting-line";

interface ExpandableProps {
  title: string;
  working: string[];
  skills: string[];
  joinDate: string;
  endDate: string;
  location: string;
}

const Expandable: React.FC<ExpandableProps> = ({
  title,
  working,
  skills,
  joinDate,
  endDate,
  location,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
  
    <div className="w-full">
      {/* Header Section */}
      <CompanyTitle
      title={title}
      />
      
     <div className="w-full  relative pl-8">
     <div class="absolute w-0.5 bg-gray-200 h-[10px] left-[11px]"></div>
     {/* <div class="w-4 h-3 border-l-2 border-b-2 rounded-bl-lg absolute -left-[21px] border-gray-200"></div> */}
      <div className="    relative">
             <div class="w-4 h-3 border-l-2 border-b-2 rounded-bl-lg absolute -left-[21px] border-gray-200"></div>  

      <div className="flex flex-row w-full items-center">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-gray-500">
            {joinDate} - {endDate} • {location}
          </p>
        </div>
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-auto cursor-pointer text-gray-400 hover:text-black transition-colors duration-300"
        >
          <HiChevronDown
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Expandable Content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
          opacity: isExpanded ? 1 : 0,
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="mt-4">
          {/* Work Details */}
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {working.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Skills Section */}
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
               <SkillTag key={index} skill={skill}/>
            ))}
          </div>
        </div>
      </div>
      </div>
     </div>
      
    </div>
     
  );
};

export default Expandable;
