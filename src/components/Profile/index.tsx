import Image from "next/image";
import React from "react";

interface ProfileProps {
  src: string;
  alt: string;
  size?: number; // Optional size prop to control the size of the circle
}

const Profile: React.FC<ProfileProps> = ({ alt, size = 35 }) => {
  return (
    <div
      className="flex items-center justify-center rounded-full border border-gray-200"
      style={{
        width: size,
        height: size,
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Image
        className="2xs:block rounded-full" // Add "rounded-full" for circular images if avatar is square
        src="/cartoon.png"
        alt="User Avatar" // Add a meaningful alt text
        width={30}
        height={30}
      />
    </div>
  );
};

export default Profile;
