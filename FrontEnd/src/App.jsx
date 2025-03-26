import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Blog from "./pages/Blog.jsx"
import Contact from "./pages/Contact.jsx"
import SingleProductDetail from './pages/SingleProductDetail.jsx';
import Footer from './components/Footer.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import Cart from './pages/Cart.jsx';
import ThankYou from './pages/ThankYou.jsx';
import { useState } from 'react';
import About from './pages/About.jsx';
import Features from './pages/Features.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/products" element={<Products searchQuery={searchQuery} />} />
        <Route path="/product-detail/:id" element={<SingleProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/your-cart" element={<Cart />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-features" element={<Features />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
