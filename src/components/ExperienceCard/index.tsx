import React from "react";
import Head from "next/head";
import Card from "../card";
import SkillTag from "../TagChip";

interface ExperienceCardProps {
  company: string;
  title: string;
  joinDate: string; // E.g., "Aug 2018"
  endDate: string; // E.g., "Dec 2021" or "Present"
  location: string;
  working: string[]; // List of work responsibilities
  skills: string[]; // List of skills
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  title,
  joinDate,
  endDate,
  location,
  working,
  skills,
}) => {
  return (
    <>
      {/* Meta Data for SEO */}
      <Head>
        <title>{`${title} at ${company}`}</title>
        <meta
          name="description"
          content={`${title} at ${company} from ${joinDate} to ${endDate}. Worked on key projects and used skills like ${skills.join(
            ", "
          )}.`}
        />
      </Head>

      {/* Experience Card */}
 <Card className="gap-6"> 
         {/* Company and Role */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {company}
          </h2>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
            {title}
          </p>
        </div>

        {/* Date and Location */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
            {joinDate} - {endDate} • {location}
          </p>
        </div>

        {/* Work Details */}
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {working.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
        </div>
      
      </Card>
    </>
  );
};

export default ExperienceCard;
