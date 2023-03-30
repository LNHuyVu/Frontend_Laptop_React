import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHome from "./AdminHome";
import AdminHeader from "./AdminHeader";
import ListUser from "../../views/admin/user/ListUser";
import ListProduct from "../../views/admin/product/ListProduct";
import UserDetail from "../../views/admin/user/UserDetail";
import ProductDetail from "../../views/admin/product/ProductDetail";
import "./admin.scss";
import AddProduct from "../../views/admin/product/AddProduct";
import ListCategory from "../../views/admin/category/ListCategory";
import AddCategory from "../../views/admin/category/AddCategory";
import EditCategory from "../../views/admin/category/EditCategory";
import EditProduct from "../../views/admin/product/EditProduct";
import ListproductValue from "../../views/admin/productValue/ListproductValue";
import AddProductValue from "../../views/admin/productValue/AddProductValue";
import EditProductValue from "../../views/admin/productValue/EditProductValue";
import AddUser from "../../views/admin/user/AddUser";
import EditUser from "../../views/admin/user/EditUser";
const AdminRoute = () => {
  return (
    <div className="px-2">
      <AdminHeader />
      <main id="main" className="main mt-0 px-2 py-1">
        {/* <div className="pagetitle">
  <h1>Dashboard</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div> */}

        <section className="section dashboard">
          <div className="row">
            <Routes>
              <Route path="/" element={<AdminHome />} />
              <Route path="/category" element={<ListCategory />} />
              <Route path="/category/add-category" element={<AddCategory />} />
              <Route path="/category/edit-category/:id" element={<EditCategory />} />
              {/* User */}
              <Route path="/user/*" element={<ListUser />} />
              <Route path="/user/add-user" element={<AddUser />} />
              <Route path="/user/edit-user/:id" element={<EditUser />} />
              <Route path="/user/userdetail" element={<UserDetail />} />
              {/* Product */}
              <Route path="/product" element={<ListProduct />} />
              <Route path="/product/add-product" element={<AddProduct />} />
              <Route path="/product/edit-product/:id" element={<EditProduct />} />
              <Route
                path="/product/productdetail"
                element={<ProductDetail />}
              />
              {/* ProductValue */}
              <Route path="/product-configuration" element={<ListproductValue />} />
              <Route path="/product-configuration/add-product-configuration" element={<AddProductValue />} />
              <Route path="/product-configuration/edit-product/:id" element={<EditProductValue />} />
            </Routes>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminRoute;
