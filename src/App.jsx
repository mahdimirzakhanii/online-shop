import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Nav from "./components/Nav";
import { useState } from "react";
import MainProducts from "./components/products/MainProducts.jsx";
import Search from "./components/search/Search.jsx";
import Footer from "./components/Footer.jsx";
import MainViewProduct from "./components/view-product/MainViewProduct.jsx";
import MainCartProduct from "./components/cart/MainCartProduct.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  const [scroll, setScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-blue-50">
      {/* open search-bar */}
      {showSearch && (
        <div className="fixed left-0 top-0 z-[1000] w-full h-full">
          <Search setShowSearch={setShowSearch} />
        </div>
      )}
      <Nav
        scroll={scroll}
        setScroll={setScroll}
        setShowSearch={setShowSearch}
        showSearch={showSearch}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<MainProducts />} />
        <Route path="/products/:id" element={<MainViewProduct />} />
        <Route path="/cart" element={<MainCartProduct />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      <div className="w-full pt-20">
        <Footer />
      </div>
    </div>
  );
}

export default App;
