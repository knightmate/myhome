import * as React from "react";
import linksCards from "./social.links";
import SocialCard from "./social-card";
import { FiLink } from "react-icons/fi";
import CardTitle from "../titles/cardtitle";
import Card from "../card";

export interface SocialSectionProps {
  className?: string;
}

export default function SocialSection({ className = "" }: SocialSectionProps) {
  return (
    <Card> 
    <div className={`space-y-1 ${className}`}>
      <div className="flex items-center space-x-2">
        <FiLink className="text-xl text-gray-600" />
        <CardTitle title="LINKS"/> 
      </div>
      <div className="flex flex-wrap gap-4">
        {linksCards.map((card, index) => (
          <SocialCard {...card} key={index} />
        ))}
      </div>
    </div>
    </Card>
  );
}
