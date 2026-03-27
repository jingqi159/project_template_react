import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import IndustryUniversityResearchIntegrationPage from "@/pages/IndustryUniversityResearchIntegrationPage";
import { Empty } from "@/components/Empty";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/industry-university-research" element={<IndustryUniversityResearchIntegrationPage />} />
        <Route path="/products" element={<Empty />} />
        <Route path="/about" element={<Empty />} />
        <Route path="/contact" element={<Empty />} />
        <Route path="*" element={<Empty />} />
      </Routes>
    </AuthContext.Provider>
  );
}
