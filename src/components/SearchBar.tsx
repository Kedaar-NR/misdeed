import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("United States");

  return (
    <form className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-md flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0 px-4 py-3 md:py-0 md:px-2 relative z-10">
      {/* What field */}
      <div className="flex-1 flex items-center border-r border-gray-200 pr-2 md:pr-4">
        <span
          className="material-icons text-gray-400 mr-2 text-xl hidden md:inline"
          aria-hidden="true"
        >
          search
        </span>
        <input
          type="text"
          placeholder="Job title"
          aria-label="What: Job title"
          className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400 text-base py-2 focus:ring-2 focus:ring-blue-500"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>
      {/* Where field */}
      <div className="flex-1 flex items-center pl-0 md:pl-4">
        <span
          className="material-icons text-gray-400 mr-2 text-xl hidden md:inline"
          aria-hidden="true"
        >
          place
        </span>
        <input
          type="text"
          placeholder="Location"
          aria-label="Where: Location"
          className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-400 text-base py-2 focus:ring-2 focus:ring-blue-500"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {location && (
          <button
            type="button"
            className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            onClick={() => setLocation("")}
            aria-label="Clear location"
          >
            <span className="material-icons text-base" aria-hidden="true">
              close
            </span>
          </button>
        )}
      </div>
      {/* Search button */}
      <button
        type="submit"
        className="mt-2 md:mt-0 md:ml-4 px-6 py-2 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
