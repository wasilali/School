import "./App.css";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";

import Home from "./components/Headers/Home";
import Navbar from "./components/Headers/Navbar";
import ScrollToTopButton from "./components/Headers/ScrollToTopButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SchoolDirectory from "./components/SchoolDirectory/SchoolDirectory";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/school-directory" element={<SchoolDirectory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
