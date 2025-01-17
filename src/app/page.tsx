import AboutCard from "@/components/cards/about-card";
import SocialSection from "@/components/social/social-section";
import ExperienceCard from "@/components/ExperienceCard";
export default function Home() {
  return (
    <div className="flex  flex-col">
      Home Page
      <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-6 py-2">
  <AboutCard className="col-span-1 md:col-span-1" />
  <SocialSection className="col-span-1 md:col-span-1" />
  <ExperienceCard
        company="athenahealth"
        title="Lead Product Designer"
        joinDate="Aug 2018"
        endDate="Dec 2021"
        location="Pune, India"
        working={[
          "Working on an EHR Mobile app called athenaOne.",
          "Partner with stakeholders and users to discover, define, and address unmet user and business needs.",
          "Communicate design strategies and reasoning to leadership.",
          "Create wireframes, prototypes, and high-fidelity comps to communicate design ideas and illustrate user interaction.",
          "Collaborate with development leads to create buildable solutions within technological and budgetary constraints.",
          "Facilitate user interviews and remote user testing.",
          "Design production-ready deliverables.",
        ]}
        skills={[
          "Figma",
          "Product Design",
          "Product Management",
          "Design Research",
          "Design Systems",
          "AfterEffects",
        ]}
      />
</div>
    </div>
  );
}


/**This is using */
{/* <div className="flex flex-wrap flex-row justify-start gap-6 py-2 overflow-hidden">
<AboutCard className="md:flex-1  md:min-w-[500px] md:w-auto w-full" />
<SocialSection className=" " />
</div> */}