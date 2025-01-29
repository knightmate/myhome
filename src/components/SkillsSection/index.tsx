import React from "react";
import TagChip from "../chip";
import Card from "../card";

interface SkillsChipsProps {
  title: string;
  skills: string[];
}

const SkillsSection: React.FC<SkillsChipsProps> = () => {
  const skills = ["CSS", "React", "Animation", "Career", "JavaScript", "Next.js", "General"];

  return (
    <Card> 
    <section >
      <div className="flex flex-col space-y-1">
        <h2 className="text-lg font-bold text-pink-600">Worked</h2>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <TagChip label={skill} key={index} onHoverSound="/hoversound.mp3" />
          ))}
        </div>
      </div>
    </section>
    </Card>
  );
};

export default SkillsSection;
