import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screen/Home.jsx";
import Result from "./screen/result.jsx";
import Price from "./screen/Price.jsx";
import NavBar from "./component/NAvBar.jsx";
import Footer from "./component/footer.jsx";
import Try from "./screen/try.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Price />} />
        <Route path="/result" element={<Result />} />
        <Route path="/try" element={<Try />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
