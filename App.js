import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
