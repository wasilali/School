import "./App.css";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";

import Home from "./components/Headers/Home";
import Navbar from "./components/Headers/Navbar";
import Footer from "./components/Headers/Footer";
import ContactUs from "./components/Headers/ContactUs"

import ScrollToTopButton from "./components/Headers/ScrollToTopButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchoolDirectory from "./components/SchoolDirectory/SchoolDirectory";
import News from "./components/NewsAndUpdates/News";
import Resources from "./components/educationResources/Resources"
const App = () => {
  return (
    <>
    <div className="bg-gray-100">
      <BrowserRouter>
        <Navbar />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/school-directory" element={<SchoolDirectory />} />
          <Route path="/news-and-updates" element={<News/>} />
          <Route path="/educational-resources" element={<Resources/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    </>
  );
};

export default App;
