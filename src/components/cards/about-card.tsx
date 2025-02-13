"use client";

import React from "react";
import CardTitle from "../titles/cardtitle";
import Card from "../card";
import Image from "next/image";
import MarkdownRenderer from "../../components/MarkdownRenderer/index";
import CardButton from "../button";

export default function AboutCard({ className }) {
  return (
    <Card className={`flex flex-col ${className}`}>
      <div className="flex flex-row w-full">
        <div className="flex flex-col flex-grow">
          <CardTitle title="KREATORDEV" />
          <p style={{ fontWeight: "600" }} class="text-xl font-medium mt-4">
            Hi, I'm Meghraj 👋
          </p>
          <p
            class="remarkable md:text-lg text-gray-700 dark:text-gray-400"
            style={{ fontWeight: "600" }}
          >
            Product engineer and tech enthusiast
          </p>
        </div>
        <div className="p-[0.8rem] bg-teal-100/40 dark:bg-slate-500/20 rounded-full flex items-center h-fit">
          <Image
            className="rounded-full" // Ensures circular image if the avatar is square
            src="/cartoon.png"
            alt="User Avatar" // Meaningful alt text for accessibility
            width={40}
            height={50}
          />
        </div>
      </div>
      <span className="text-base font-normal opacity-70 leading-relaxed mt-3 mb-6">
        <MarkdownRenderer filePath="/data/about/aboutShort.md" />
      </span>
      <CardButton className="font-normal text-xs" title="LOAD MORE!" />
      </Card>
  );
}
