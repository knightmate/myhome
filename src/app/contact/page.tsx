"use client";

import Card from "@/components/card";
import SocialSection from "@/components/social/social-section";
import CardTitle from "@/components/titles/cardtitle";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Card className="w-full h-[700px]">
      <CardTitle className="" type="Section" title="Experiences" />
      <iframe
        src="https://app.youform.com/forms/hk2kq9rb"
        loading="lazy"
        width="100%"
        height="700"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="w-full border-none"
      ></iframe>
      <div>
        <SocialSection />
      </div>
    </Card>
  );
};

export default Contact;
