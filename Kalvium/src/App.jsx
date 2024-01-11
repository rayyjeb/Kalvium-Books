import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import ParentPage from "./Components/ParentPage";
import "./App.css";
import Forms from "./Components/Forms";
const App = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (input) => {
    setSearchInput(input);
  };
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ParentPage />} />
          <Route path="/register" element={<Forms />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
