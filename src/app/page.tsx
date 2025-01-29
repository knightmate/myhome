import AboutCard from "@/components/cards/about-card";
import SocialSection from "@/components/social/social-section";
import Experiences from "@/components/ExperienceCard/Experiences";
import CardTitle from "@/components/titles/cardtitle";
 export default function Home() {
  return (
    <div className="flex  flex-col">
      <CardTitle type="Section" title="Home"/>
      <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-6 py-2">
        <AboutCard className="col-span-1 md:col-span-1" />
         <SocialSection className="col-span-1 md:col-span-1" />
        <div className="col-span-1 md:col-span-2">
          <Experiences />
        </div>
      </div>
    </div>
  );
}

 