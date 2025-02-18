import React from "react";
import Home from './home';
import Shop from './shop'; 
import Cart from "./cart"; 
import Contact from "./contact"; 

const Rout = ({ shop, Filter, allcatfilter, addtocart, cart, setCart, fetchProducts, searchproduct, newProduct, featuredProduct, topProduct }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home shop={shop} fetchProducts={fetchProducts} addtocart={addtocart} searchproduct={searchproduct} newProduct={newProduct} featuredProduct={featuredProduct} topProduct={topProduct} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/shop" element={<Shop shop={shop} Filter={Filter} allcatfilter={allcatfilter} addtocart={addtocart} fetchProducts={fetchProducts} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Rout;
