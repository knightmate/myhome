"use client";

import React, { useState } from "react";
import ExperienceCard from "./index";
import Card from "../card";
import Button from "../button";
import { useRouter } from "next/navigation";
import experiencesDataJson from "../../data/experienceData.json";
import CompanyTitle from "./company-header";

interface ExperiencesProps {
  loadMore?: boolean;
}

const Experiences: React.FC<ExperiencesProps> = ({ loadMore = true }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const experiences = formatExperienceData(experiencesDataJson);
  const router = useRouter();

  console.log("Formatted Experience Data:", experiences);

  return (
    <Card>
      <div className="space-y-6 w-full overflow-hidden">
        {experiences.map((experience, companyIndex) => (
              <div key={companyIndex} className="mb-5">
          <div key={companyIndex}>
            <CompanyTitle title={experience.company} />
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex} className="mb-1 relative">
                <ExperienceCard
                  key={roleIndex}
                  {...role}
                  isExpanded={expandedIndex === roleIndex}
                  onExpand={() =>
                    setExpandedIndex(
                      expandedIndex === roleIndex ? null : roleIndex
                    )
                  }
                />
                {roleIndex <experience.roles.length-1 && <div  class="absolute w-0.5 bg-gray-200 h-[calc(100%-2px)] top-2 left-[11px]"></div>
                }
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
      {loadMore && (
        <Button
          onClick={() => router.push("/about")}
          title="Load More Experience's"
          className="mt-4 text-center"
        />
      )}
    </Card>
  );
};

export default Experiences;

function formatExperienceData(experienceJson) {
  return experienceJson.experiences.map((experience) => ({
    company: experience.company || "Unknown Company",
    roles: experience.roles.map((role) => ({
      title: role.title || "Unknown Title",
      joinDate: role.joinDate || "N/A",
      endDate: role.endDate || "Present",
      location: role.location || "N/A",
      working: role.working || [],
      skills: role.skills || [],
    })),
  }));
}
