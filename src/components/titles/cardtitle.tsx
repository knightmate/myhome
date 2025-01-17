import React from "react";

function CardTitle({
  icon,
  title,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-start opacity-50 ${className}`}>
      {icon}
      {!!icon && <div className="w-2.5" />}
      <p className="text-sm font-normal">{title}</p>
    </div>
  );
}

 

export default CardTitle;
