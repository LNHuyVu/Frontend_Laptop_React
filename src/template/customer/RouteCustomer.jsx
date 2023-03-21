import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetailCus from '../../views/customer/product-cus/ProductDetailCus'
import ProductListCus from '../../views/customer/product-cus/ProductListCus'
import FooterCustomer from './FooterCustomer'
import HeaderCustomer from './HeaderCustomer'
import HomeCustomer from './HomeCustomer'


const RouteCustomer = () => {
  return (
    <>
    <HeaderCustomer/>
    <div className="main-content container-xxl p-0">
    <Routes>
      <Route path="/" element={<HomeCustomer/>} />
      <Route path="/product" element={<ProductListCus/>} />
      <Route path="/product/productdetail" element={<ProductDetailCus/>} />
    </Routes>
    </div>
    <FooterCustomer/>
    </>
  )
}

export default RouteCustomer