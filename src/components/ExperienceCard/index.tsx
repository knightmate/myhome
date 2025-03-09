"use client";

import React, { useRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import SkillTag from "../TagChip";
import CompanyTitle from "./company-header";

interface ExpandableProps {
  title: string;
  working: string[];
  skills: string[];
  joinDate: string;
  endDate: string;
  location: string;
  isExpanded: boolean;
  onExpand: () => void;
}

const Expandable: React.FC<ExpandableProps> = ({
  title,
  working,
  skills,
  joinDate,
  endDate,
  location,
  isExpanded,
  onExpand,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full relative" style={{ border: "0px solid red" }}>
      <div className="w-[2px] h-3.5 bg-gray-200 absolute  left-[11px]" />
     
      <div className="w-full relative pl-8">
        <div className="relative pt-2">
          <div class="w-4 h-3 border-l-2 border-b-2 rounded-bl-lg absolute -left-[21px] border-gray-200 top-2.5"></div>
          <div className="flex flex-row w-full items-center">
            <div>
              <p class="text-gray-1k font-semibold text-sm ">{title}</p>
              <p className="text-sm text-gray-500">
                <p class="text-gray-500 dark:text-gray-600 font-normal text-xs ">
                  <strong style={{fontWeight:'600'}}>
                    {joinDate} - {endDate}{" "}
                    <span class="font-normal capitalize">{location}</span>{" "}
                    <span class="font-normal capitalize">• full-time</span>
                  </strong>
                </p>
              </p>
            </div>
            <div
              onClick={onExpand}
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
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 ">
                {working.map((item, index) => (
                  <li key={index}>
                    <p className="text-sm leading-5 text-gray-700 dark:text-gray-300"  dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>

              {/* Skills Section */}
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill, index) => (
                  <SkillTag key={index} skill={skill} />
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
