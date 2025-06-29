import React from "react";

type JobCardProps = {
  title: string;
  salary: string;
  link?: string;
};

const JobCard: React.FC<JobCardProps> = ({ title, salary, link = "#" }) => {
  return (
    <div
      className="flex flex-col justify-between border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer bg-white min-w-[250px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      tabIndex={0}
      role="group"
      aria-label={`Job: ${title}, Average Salary: ${salary}`}
    >
      <div>
        <div className="font-semibold text-gray-900 text-base mb-1">
          {title}
        </div>
        <div className="text-blue-700 font-medium text-sm mb-2">
          Average Salary <span className="font-bold">{salary}</span>
        </div>
      </div>
      <a
        href={link}
        className="flex items-center text-sm text-blue-700 hover:underline font-medium group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        aria-label={`View job openings for ${title}`}
      >
        Job Openings
        <span
          className="material-icons ml-1 text-base group-hover:translate-x-1 transition-transform"
          aria-hidden="true"
        >
          chevron_right
        </span>
      </a>
    </div>
  );
};

export default JobCard;
