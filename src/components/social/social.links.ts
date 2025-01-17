import {
    github,
    linkedin,
  } from "@/assets/icons/";
  import linksMetadata from "@/metadata/links";
  
  const linksCards = [
    {
      title: "Github",
      href: linksMetadata.github,
      className: "dark:bg-white p-2",
      icon: github,
    },
    {
      title: "LinkedIn",
      className: "!bg-[#0A66C2] p-4",
      href: linksMetadata.linkedin,
      icon: linkedin,
    }
  ];
  
  export default linksCards;