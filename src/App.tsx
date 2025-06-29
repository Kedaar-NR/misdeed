import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FindSalaries from "./pages/FindSalaries";
import CompanyReviews from "./pages/CompanyReviews";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-salaries" element={<FindSalaries />} />
          <Route path="/company-reviews" element={<CompanyReviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
