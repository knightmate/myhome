import AboutDetail from "@/components/cards/about-details-card";
import Experiences from "@/components/ExperienceCard/Experiences";
import SkillsSection from "@/components/SkillsSection";
import CardTitle from "@/components/titles/cardtitle";
 export default function About() {
   return (
    <div className="flex  flex-col">
   <CardTitle className="" type="Section" title="About"/>
      <div className="col-span-1 md:col-span-2">
        <AboutDetail 
      image="/cartoon.png" 
      name="Akash Bhadange" 
      position="Cofounder & CEO of Peerlist · Product Designer" 
      intro="<p>2568 <strong>followers</strong> · <a href='https://designgiri.com' target='_blank' class='text-blue-500'>designgiri.com</a></p>"
    />
         <SkillsSection/>
         <CardTitle className="" type="Section" title="Experiences"/>
      
          <Experiences loadMore={false}/>
        </div>
    </div>
  );
}

 
