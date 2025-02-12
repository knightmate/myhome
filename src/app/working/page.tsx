"use client";

import Card from "@/components/card";
import Experiences from "@/components/ExperienceCard/Experiences";
import CardTitle from "@/components/titles/cardtitle";
import React from "react";

const Working: React.FC = () => {
  return (
    <>
      <CardTitle  type='Section' title="Experience's" />
      <Card>
        <Experiences  />
      </Card>
    </>
  );
};

export default Working;
