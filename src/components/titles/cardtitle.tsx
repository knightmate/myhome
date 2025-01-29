import React from "react";

type CardTitleProps = {
  icon?: React.ReactNode;
  title: string;
  className?: string;
  type?: "Card" | "Section";
};

function CardTitle({ icon, title, className, type = "Card" }: CardTitleProps) {
  return (
    <div className={`flex items-center justify-start  ${type === "Section" ? "pl-5" : "opacity-50"} ${className}`}>
      {icon}
      {!!icon && <div className="w-2.5" />}
      {type === "Section" ? (
        <p   className="text-md font-medium text-start mb-2  mt-10 text-black text-lg ">{title}</p>
      ) : (
        <p className="text-sm font-normal">{title}</p>
      )}
    </div>
  );
}

export default CardTitle;
