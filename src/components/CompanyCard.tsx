import React from "react";

type CompanyCardProps = {
  name: string;
  reviews: number;
  logoUrl?: string;
};

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  reviews,
  logoUrl,
}) => {
  return (
    <div
      className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      tabIndex={0}
      role="group"
      aria-label={`Company: ${name}, ${reviews.toLocaleString()} reviews`}
    >
      {/* Logo */}
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={name}
          className="w-12 h-12 rounded-full mb-2 object-cover"
        />
      ) : (
        <div
          className="w-12 h-12 bg-gray-200 rounded-full mb-2"
          aria-hidden="true"
        />
      )}
      <span className="font-semibold text-gray-900 text-sm mb-1">{name}</span>
      <span className="text-xs text-gray-500 mb-1">
        {reviews.toLocaleString()} reviews
      </span>
      <div className="flex gap-2 text-xs text-blue-700">
        <a
          href="#"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label={`View salaries for ${name}`}
        >
          Salaries
        </a>
        <a
          href="#"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label={`View Q and A for ${name}`}
        >
          Q&amp;A
        </a>
        <a
          href="#"
          className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label={`View open jobs for ${name}`}
        >
          Open jobs
        </a>
      </div>
    </div>
  );
};

export default CompanyCard;
