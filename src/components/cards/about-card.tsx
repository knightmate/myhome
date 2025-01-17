"use client";

import  React from 'react';
import CardTitle from '../titles/cardtitle';
import Link from 'next/link';
import Button from '../button';
import Card from '../card';
import Image from "next/image";

export interface IAppProps {


}

export default function AboutCard (props: IAppProps) {
  
     
    const shortAbout="A software developer from Morocco interested in building apps as solutions."
     
 
    return (
        <Card> 
        <div className='flex flex-col' >
          <div className="flex flex-row w-full">
            <div className="flex flex-col flex-grow">
              <CardTitle title="KREATORDEV" />
              <p className="text-xl font-medium mt-4">Hi, I{"'"}m Ayoub 👋</p>
            </div>
            <div className="px-3 py-2 bg-teal-100/40 dark:bg-slate-500/20 rounded-full">
              <Image
                className="hidden 2xs:block"
                src="/cartoon.png"
                alt={""}
                width={40}
                height={50}
              />
            </div>
          </div>
          <span className="text-base font-normal opacity-70 leading-relaxed mt-3 mb-6">
            {shortAbout}
          </span>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            href="/about"
            className="hover:animate-scale"
          >
            <Button title="LEARN MORE" />
          </Link>
        </div>
        </Card>
      );
}
