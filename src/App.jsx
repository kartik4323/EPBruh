// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ContactFormProvider } from "./contexts/ContactFormContext";

function App() {
  return (
    <ContactFormProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:serviceId" element={<ServiceDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ContactFormProvider>
  );
}

export default App;
