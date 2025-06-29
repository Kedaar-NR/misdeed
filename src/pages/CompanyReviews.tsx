import React from "react";
import SearchBar from "../components/SearchBar";
import CompanyCard from "../components/CompanyCard";
import Button from "../components/Button";
import StarRating from "../components/StarRating";
import IndustryCard from "../components/IndustryCard";

const industries = [
  { name: "Aerospace & Defense", icon: "flight" },
  { name: "Agriculture", icon: "agriculture" },
  { name: "Arts, Entertainment & Recreation", icon: "palette" },
  { name: "Construction, Repair & Maintenance Services", icon: "construction" },
  { name: "Education", icon: "school" },
  { name: "Energy, Mining & Utilities", icon: "bolt" },
];

const companies = [
  { name: "Buc-ee's", reviews: 1529, rating: 4.2 },
  { name: "AT&T", reviews: 47955, rating: 3.8 },
  { name: "Kaiser Permanente", reviews: 14173, rating: 4.1 },
  { name: "Planet Fitness", reviews: 7864, rating: 4.0 },
  { name: "McDonald's", reviews: 254131, rating: 3.6 },
  { name: "AMC Theatres", reviews: 6383, rating: 3.9 },
  { name: "Sam's Club", reviews: 27751, rating: 3.7 },
  { name: "Dollar General", reviews: 41375, rating: 3.5 },
  { name: "Burlington Stores", reviews: 14156, rating: 3.8 },
];

const CompanyReviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Find great places to work
        </h1>
        <p className="text-gray-700 mb-6">
          Get access to millions of company reviews
        </p>
        <form className="flex items-center gap-2 mb-8">
          <input
            type="text"
            placeholder="Company name or job title"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button type="submit">Find Companies</Button>
        </form>
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">
            Browse companies by industry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {industries.map((ind, idx) => (
              <IndustryCard key={idx} icon={ind.icon} label={ind.name} />
            ))}
          </div>
          <Button variant="outline" className="block mx-auto mt-2">
            See all industries
          </Button>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Popular companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <CompanyCard name={company.name} reviews={company.reviews} />
                <StarRating
                  rating={company.rating}
                  reviewCount={company.reviews}
                  className="mt-1"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyReviews;
