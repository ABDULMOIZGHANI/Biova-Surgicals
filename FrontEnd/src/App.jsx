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

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail/:id" element={<SingleProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/your-cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
