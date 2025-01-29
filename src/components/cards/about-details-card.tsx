'use client'
import Image from "next/image";
import React from "react";
import Card from "../card";

interface DetailProfileCardProps {
  image: string;
  name: string;
  position: string;
  intro: string;
}

const AboutDetail: React.FC<DetailProfileCardProps> = ({ image, name, position, intro }) => {
  return (
    <Card> 
    <div className="flex flex-col items-center text-center">
       <Image 
        src={image} 
        alt={name} 
        width={96} 
        height={96} 
        className="rounded-full border-4 border-gray-200"
      />
      <h2 className="mt-4 text-xl font-bold text-black">{name}</h2>
      <p className="text-gray-600 text-sm mt-1">{position}</p>
      <div className="mt-4 text-gray-800 text-sm" dangerouslySetInnerHTML={{ __html: intro }} />
    </div>
    </Card>
  );
};
export default AboutDetail;
