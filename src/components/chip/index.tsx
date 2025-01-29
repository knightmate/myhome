'use client'
import React, { useRef } from "react";

interface TagChipProps {
  label: string;
  onHoverSound?: string; // Path to the sound file
}
 const TagChip: React.FC<TagChipProps> = ({ label, onHoverSound }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleHover = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the sound on hover
    }
  };

  return (
    <div
      className="tag-chip"
      onMouseEnter={handleHover}
      style={{
        display: "inline-flex",
        padding: "4px 12px",
        margin: "4px",
        borderRadius: "16px",
        backgroundColor: "hsl(200deg 100% 86.14%)",
        fontSize: "14px",
        color: "#1a202c",
        cursor: "pointer",
      }}
    >
      <span>{label}</span>
      {onHoverSound && (
        <audio ref={audioRef} src={onHoverSound} preload="auto" />
      )}
    </div>
  );
};

export default TagChip;