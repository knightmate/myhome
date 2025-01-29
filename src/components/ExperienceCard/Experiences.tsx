"use client";

import React, { useState } from "react";
import ExperienceCard from "./index";
import Card from "../card";
import Button from "../button";
import { useRouter } from "next/navigation";

interface ExperiencesProps {
  loadMore?: boolean;
}

const experiencesData = [
  {
    company: "athenahealth",
    title: "Lead Product Designer",
    joinDate: "Aug 2018",
    endDate: "Dec 2021",
    location: "Pune, India",
    working: [
      "Working on an EHR Mobile app called athenaOne.",
      "Partner with stakeholders and users to discover, define, and address unmet user and business needs.",
      "Communicate design strategies and reasoning to leadership.",
      "Create wireframes, prototypes, and high-fidelity comps to communicate design ideas and illustrate user interaction.",
      "Collaborate with development leads to create buildable solutions within technological and budgetary constraints.",
      "Facilitate user interviews and remote user testing.",
      "Design production-ready deliverables.",
    ],
    skills: [
      "Figma",
      "Product Design",
      "Product Management",
      "Design Research",
      "Design Systems",
      "AfterEffects",
    ],
  },
  {
    company: "Tech Innovations",
    title: "UX Designer",
    joinDate: "Jan 2015",
    endDate: "Jul 2018",
    location: "Bangalore, India",
    working: [
      "Developed user flows and wireframes for web applications.",
      "Collaborated with engineers and product managers to create intuitive interfaces.",
      "Designed and maintained design systems.",
      "Conducted usability testing and applied findings to improve user experience.",
    ],
    skills: [
      "Sketch",
      "Adobe XD",
      "User Research",
      "Wireframing",
      "Usability Testing",
    ],
  },
];

const Experiences: React.FC<ExperiencesProps> = ({ loadMore = true }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const experiences = loadMore ? experiencesData.slice(0, 1) : experiencesData;
  const router = useRouter();

  return (
    <Card>
      <div className="space-y-6 w-full overflow-hidden">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            {...experience}
            isExpanded={expandedIndex === index}
            onExpand={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />
        ))}
      </div>
      {loadMore && (
        <Button onClick={() => router.push("/about")} title="Load More Experience's" className="mt-4 text-center" />
      )}
    </Card>
  );
};

export default Experiences;
