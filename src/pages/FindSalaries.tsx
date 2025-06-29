import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";

const jobs = [
  { title: "Software Engineer", salary: "$124,203 per year" },
  { title: "Registered Nurse", salary: "$93,802 per year" },
  { title: "Accountant", salary: "$66,411 per year" },
  { title: "Business Analyst", salary: "$86,485 per year" },
  { title: "Nursing Assistant", salary: "$46,142 per year" },
  { title: "Sales Executive", salary: "$83,337 per year" },
  { title: "Human Resources Specialist", salary: "$60,830 per year" },
  { title: "Customer Service Representative", salary: "$69,721 per year" },
  { title: "Assistant Store Manager", salary: "$37,892 per year" },
  { title: "Warehouse Associate", salary: "$36,418 per year" },
  { title: "Server", salary: "$49,486 per year" },
  { title: "Front Desk Agent", salary: "$46,076 per year" },
  { title: "Crew Member", salary: "$47,857 per year" },
  { title: "Administrative Assistant", salary: "$54,319 per year" },
  { title: "Data Entry Clerk", salary: "$50,702 per year" },
];

const industryOptions = [
  "All Industries",
  "Technology",
  "Healthcare",
  "Finance",
  "Retail",
  "Education",
  "Manufacturing",
  // Add more as needed
];

const FindSalaries: React.FC = () => {
  const [industry, setIndustry] = useState(industryOptions[0]);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-blue-900 w-full py-10 px-4 flex flex-col items-center relative">
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-2 text-center">
          Discover your earning potential
        </h1>
        <p className="text-blue-100 text-center mb-6">
          Explore high-paying careers, salaries, and job openings by industry
          and location.
        </p>
        <div className="w-full max-w-3xl">
          <SearchBar />
        </div>
        {/* Illustration placeholder */}
        <div className="absolute right-8 top-8 hidden md:block">
          <div className="w-32 h-24 bg-blue-200 rounded-lg"></div>
        </div>
      </div>
      {/* Industry filter and job cards grid */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h2 className="text-xl font-bold text-gray-900">
            Browse top paying jobs by industry
          </h2>
          <Dropdown
            options={industryOptions}
            value={industry}
            onChange={setIndustry}
            className="w-full md:w-60"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {jobs.map((job, idx) => (
            <JobCard key={idx} title={job.title} salary={job.salary} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindSalaries;
