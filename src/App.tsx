import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import ActionAreas from "./pages/ActionAreas";
import Campaigns from "./pages/Campaigns";
import Certificates from "./pages/Certificates";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import BlogPreview from "./pages/BlogPreview";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/actions" element={<ActionAreas />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPreview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
