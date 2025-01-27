"use client";

import React from "react";
import ExperienceCard from "./index";
import Card from "../card";
import Link from "next/link";
import Button from "../button";

const Experiences: React.FC = () => {
  const experiences = [
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

  return (
    <Card>
      <div className="space-y-6 w-full overflow-hidden">
        {experiences.slice(0, 1).map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link
          href="/about"
          className="inline-block bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-600 transition-colors duration-300"
        >
          Load More Experience's
        </Link>
      </div>
    </Card>
  );
};

export default Experiences;
