import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
