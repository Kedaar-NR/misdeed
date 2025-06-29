import React from "react";

type IndustryCardProps = {
  icon: string; // Material icon name
  label: string;
  onClick?: () => void;
  className?: string;
};

const IndustryCard: React.FC<IndustryCardProps> = ({
  icon,
  label,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onClick={onClick}
      tabIndex={0}
      role="group"
      aria-label={`Industry: ${label}`}
    >
      <span
        className="material-icons text-blue-700 text-3xl mb-2"
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-900 text-center">
        {label}
      </span>
    </div>
  );
};

export default IndustryCard;
