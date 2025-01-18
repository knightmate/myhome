import React from "react";

interface WorkDetailsProps {
  items: (string | { text: string; href?: string })[]; // Each item can be plain text or an object with a link
}

const WorkDetails: React.FC<WorkDetailsProps> = ({ items }) => {
  return (
    <div
      className="break-words text-gray-900 dark:text-gray-300 leading-4 pt-2 sm:leading-6 text-xs sm:text-sm job-description cursor-pointer"
      role="none"
    >
      <ul className="list-disc break-word pl-6 space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <p>
              {typeof item === "string" ? (
                item
              ) : item.href ? (
                <div
                //   href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 hover:underline"
                >
                  {item.text}
                </div>
              ) : (
                item.text
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkDetails;
