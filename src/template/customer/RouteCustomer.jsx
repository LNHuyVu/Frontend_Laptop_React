import React from "react";
import { Route, Routes } from "react-router-dom";
import FooterCustomer from "./FooterCustomer";
import HeaderCustomer from "./HeaderCustomer";
import HomeCustomer from "./HomeCustomer";
import ProductDetail from "../../views/customer/productDetail/ProductDetail";
import ProductDemand from "../../views/customer/productDemand/ProductDemand";
import ProductCategory from "../../views/customer/productCategory/ProductCategory";
import Post from "../../views/customer/post/Post";
import PostDetail from "../../views/customer/post/PostDetail";
import Cart from "../../views/customer/cart/Cart";
import Order from "../../views/customer/order/Order";
import Search from "../../views/customer/search/Search";
import Contact from "../../views/customer/contact/Contact";

const RouteCustomer = () => {
  return (
    <div className="w-100 p-0" style={{background: "#fff"}}>
      <HeaderCustomer />
      <div className="container-xxl main-content">
        <Routes>
          <Route path="/" element={<HomeCustomer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:slug" element={<Search />} />
          <Route path="/order" element={<Order />} />
          {/*  */}
          <Route path="/demand/:slug" element={<ProductDemand />} />
          <Route path="/product/productdetail/:slug" element={<ProductDetail />} />
          {/* Category */}
          <Route path="/category/:slug" element={<ProductCategory />} />
          {/* Topic */}
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/post/:slug/:id" element={<PostDetail />} />
        </Routes>
      </div>
        <FooterCustomer />
    </div>
  );
};

export default RouteCustomer;
