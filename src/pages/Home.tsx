import React from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero section */}
      <div className="w-full flex flex-col items-center justify-center pt-12 pb-8 bg-white">
        <div className="w-full max-w-2xl flex flex-col items-center">
          {/* Indeed logo (replace with SVG for pixel-perfect) */}
          <div className="mb-4">
            <span className="text-blue-700 font-extrabold text-5xl tracking-tight">
              indeed
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Your next job starts here
          </h1>
          <p className="text-gray-700 text-center mb-6">
            Create an account or sign in to see your personalized job
            recommendations.
          </p>
          <Button className="mb-6">
            Get Started{" "}
            <span className="ml-2 material-icons align-middle text-base">
              arrow_forward
            </span>
          </Button>
          <div className="w-full mb-8">
            <SearchBar />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-blue-700">
            <a href="#" className="hover:underline">
              Post your resume
            </a>
            <span className="hidden md:inline-block h-4 border-l border-gray-300 mx-2"></span>
            <a href="#" className="hover:underline text-blue-700">
              Post a job
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full text-center text-xs text-gray-500 py-6 mt-auto">
        Indeed helps people get jobs:{" "}
        <a href="#" className="text-blue-700 hover:underline">
          Over 16 million stories shared
        </a>
        <br />
        <a href="#" className="text-blue-700 hover:underline">
          Indeed también está disponible en español
        </a>
        <br />
        <span className="inline-block mt-2">
          What's trending on Indeed{" "}
          <span className="material-icons align-middle text-base">
            expand_more
          </span>
        </span>
      </footer>
    </div>
  );
};

export default Home;
