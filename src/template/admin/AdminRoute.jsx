import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminHome from "./AdminHome"
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import ListUser from "../../views/admin/user/ListUser"
import ListProduct from "../../views/admin/product/ListProduct"
import UserDetail from "../../views/admin/user/UserDetail"
import ProductDetail from '../../views/admin/product/ProductDetail'
import './admin.scss'
import AddProduct from '../../views/admin/product/AddProduct'
import ListCategory from '../../views/admin/category/ListCategory'
import AddCategory from '../../views/admin/category/AddCategory'


const AdminRoute = () => {
  return (
    <>
      <AdminHeader/>
      <main id="main" class="main">

{/* <div class="pagetitle">
  <h1>Dashboard</h1>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div> */}

<section class="section dashboard">
  <div class="row">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/category" element={<ListCategory />} />
            <Route path="/category/add-category" element={<AddCategory />} />
            <Route path="/user/*" element={<ListUser/>} />
            <Route path="/user/userdetail" element={<UserDetail />} />
            <Route path="/product" element={<ListProduct />} />
            <Route path="/product/add-product" element={<AddProduct />} />
            <Route path="/product/productdetail" element={<ProductDetail />} />
          </Routes>
      </div>
      </section>
      </main>
      <AdminFooter/>
    </>
  )
}

export default AdminRoute