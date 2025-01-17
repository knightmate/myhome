import github from "@/assets/icons/github";

import linkedin from "@/assets/icons/linkedin";

  import linksMetadata from "@/metadata/socialData";
  
  const linksCards = [
    {
      title: "Github",
      href: linksMetadata.github,
      className: "dark:bg-white p-2",
      icon: github,
    },
    {
      title: "LinkedIn",
      className: "!bg-[#0A66C2] p-2",
      href: linksMetadata.linkedin,
      icon: linkedin,
    }
  ];
  
  export default linksCards;