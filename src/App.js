import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Booking from "./pages/Booking";
import Give from "./pages/Give";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/give" element={<Give />} />
      </Routes>
    </Router>
  );
}
