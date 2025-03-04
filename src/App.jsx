import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/AboutUs";
import Contact from "./Components/Contact";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import HeroPageCards from "./Components/HeroPageCards";
import Navbar from "./Components/Navbar";
import Productsection from "./Components/Products";
import Testimonials from "./Components/Testimonial";
import WhatsApp from "./Components/WhatsApp";
import Product from "./Components/Product";
import Tile from "./Components/TileProduct";

import GranitePage from "./Components/GraniteProduct";
const HomePage = () => (
  <>
    <Hero />
    <HeroPageCards />
    <Testimonials />
    <FAQ />
  </>
);

const App = () => {
  return (
    <Router>
      {/* Navbar is visible on all pages */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Productsection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Tile" element={<Tile />} />
        <Route path="/granite" element={<GranitePage />} />
      </Routes>

      {/* WhatsApp button visible on all pages */}
      <WhatsApp />

      {/* Footer is visible on all pages */}
      <Footer />
    </Router>
  );
};

export default App;