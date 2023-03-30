import React from "react";
import { useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Link } from "react-router-dom";
const AdminHeader = () => {
  var [togglesidebar, setTogglesidebart] = useState("toggle-sidebar-btn");
  const handletogglesidebar = () => {
    if (togglesidebar === "toggle-sidebar-btn") {
      setTogglesidebart("toggle-sidebar");
    }
    if (togglesidebar === "toggle-sidebar") {
      setTogglesidebart("toggle-sidebar-btn");
    }
  };
  return (
    <section className={togglesidebar + " header"} >
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="/dashboard" className="logo d-flex align-items-center">
            {/* <img src="image/logo/nhen.png" alt="" /> */}
            <span className="d-none d-lg-block">Admin</span>
          </a>
          <i
            className="bi bi-list toggle-sidebar-btn"
            onClick={() => handletogglesidebar()}
          ></i>
        </div>

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav className="header-nav ms-auto px-3">
          <ul className="d-flex align-items-center fw-bold">
            <li>Name User</li>
          </ul>
        </nav>
      </header>

      {/* <!-- ======= Sidebar ======= --> */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link " to="./">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <Accordion>
            <AccordionItem header="Danh mục sản phẩm" className="nav-item ">
              <ul>
                <Link to="./category">
                  <li className="nav-link ">Tất cả danh mục sản phẩm</li>
                </Link>
                <Link to="./category/add-category">
                  <li className="nav-link ">Thêm danh mục sản phẩm</li>
                </Link>
              </ul>
            </AccordionItem>
            <AccordionItem header="Sản phẩm" className="nav-item ">
              <ul>
                <Link to="./product">
                  <li className="nav-link ">Tất cả sản phẩm</li>
                </Link>
                <Link to="./product/add-product">
                  <li className="nav-link ">Thêm sản phẩm</li>
                </Link>
              </ul>
            </AccordionItem>

            <AccordionItem header="Quản lí tài khoản" className="nav-item ">
              <ul>
                <Link to="./user">
                  <li className="nav-link ">Tất cả tài khoản</li>
                </Link>
                <Link to="./user/add-user">
                  <li className="nav-link ">Thêm tài khoản</li>
                </Link>
              </ul>
            </AccordionItem>
            <AccordionItem header="Quản lí cấu hình" className="nav-item ">
              <ul>
                <Link to="./product-configuration">
                  <li className="nav-link ">Tất cả cấu hình</li>
                </Link>
                <Link to="./product-configuration/add-product-configuration">
                  <li className="nav-link ">Thêm cấu hình</li>
                </Link>
              </ul>
            </AccordionItem>
            <AccordionItem header="Danh mục bài viết" className="nav-item ">
              <ul>
                <li className="nav-link ">Tất cả danh mục</li>
                <li className="nav-link ">Thêm danh mục</li>
              </ul>
            </AccordionItem>
            <AccordionItem header="Bài viết" className="nav-item ">
              <ul>
                <li className="nav-link ">Tất cả bài viết</li>
                <li className="nav-link ">Thêm bài viết</li>
              </ul>
            </AccordionItem>
            <AccordionItem header="Menu" className="nav-item ">
              <ul>
                <li className="nav-link ">Tất cả menu</li>
                <li className="nav-link ">Thêm bài menu</li>
              </ul>
            </AccordionItem>
          </Accordion>
          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark"></i>
              <span>Slider</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Liên hệ</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
              <i className="bi bi-card-list"></i>
              <span>Đăng ký</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Đăng xuất</span>
            </a>
          </li>
        </ul>
      </aside>
    </section>
  );
};

export default AdminHeader;
