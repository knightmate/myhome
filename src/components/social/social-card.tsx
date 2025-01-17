import { AiOutlineArrowUp } from "react-icons/ai"; // Import the Up Arrow icon
import Link from "next/link";

function SocialCard({
  href,
  icon,
  className,
}: {
  href: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      scroll={false}
      href={href}
      passHref
      target="_blank"
      className={
        "relative flex flex-col items-center justify-center w-14 h-14 bg-dark shadow-sm rounded-[18px] hover:animate-scale " +
        className
      }
    >
      <div className="absolute rounded-[18px] bg-black/60 opacity-0 hover:opacity-100 w-full h-full text-white">
        <div className="flex items-center justify-center w-full h-full">
          <AiOutlineArrowUp className="w-6 h-6" />
        </div>
      </div>
      {icon}
    </Link>
  );
}

export default SocialCard;
