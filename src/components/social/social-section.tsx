import * as React from 'react';
import linksCards from './social.links';
import SocialCard from './social-card';
import Card from '../card';

export interface SocialSectionProps {
  className:string
}

export default function SocialSection (props: SocialSectionProps) {

  const {className}=props;

  return (
    <Card> 
    <div>
      <h3>Links</h3>
    <div className={`flex`}>
      {
        linksCards.map((card,index)=>{
          return(
            <SocialCard {...card}  key={index}/>
          )
        })
      }
    </div>
    </div>
    </Card>
  );
}
