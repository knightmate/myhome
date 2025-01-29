import React, { useRef } from "react";

interface SoundWrapperProps {
  children: React.ReactElement;
  hoverSound?: string; // Path to the hover sound file
  clickSound?: string; // Path to the click sound file
  onHover?: () => void; // Optional hover callback
  onClick?: () => void; // Optional click callback
}

const SoundWrapper: React.FC<SoundWrapperProps> = ({
  children,
  hoverSound,
  clickSound,
  onHover,
  onClick,
}) => {
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  // Handle hover sound
  const handleHover = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.play();
    }
    if (onHover) onHover(); // Call the hover callback if provided
  };

  // Handle click sound
  const handleClick = () => {
    if (clickAudioRef.current) {
      clickAudioRef.current.play();
    }
    if (onClick) onClick(); // Call the click callback if provided
  };

  return (
    <div
      onMouseEnter={handleHover}
      onClick={handleClick}
      style={{ display: "inline-block" }}
    >
      {children}
      {hoverSound && (
        <audio ref={hoverAudioRef} src={hoverSound} preload="auto" />
      )}
      {clickSound && (
        <audio ref={clickAudioRef} src={clickSound} preload="auto" />
      )}
    </div>
  );
};

export default SoundWrapper;