import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./headercustomer.scss";

const HeaderCustomer = () => {
  const menu = [
    {
      id: 1,
      name: "Nhu cầu",
      parentid: 0,
    },
    {
      id: 2,
      name: "Laptop",
      parentid: 0,
    },
    {
      id: 3,
      name: "Phụ kiện",
      parentid: 0,
    },
    {
      id: 4,
      name: "Học tập",
      parentid: 1,
    },
    {
      id: 5,
      name: "Gaming",
      parentid: 1,
    },
    {
      id: 6,
      name: "Laptop DELL",
      parentid: 2,
    },
    {
      id: 7,
      name: "Latop HP",
      parentid: 2,
    },
    {
      id: 8,
      name: "Bàn phím",
      parentid: 3,
    },
    {
      id: 9,
      name: "USB",
      parentid: 3,
    },
  ];
  console.log(menu);
  return (
    <div className="container-xxl header px-0">
      <div className="row m-0 h-100 p-0">
        <div className="col-md-1 col-sm-3 col-3 text-center logo p-0">
          <img className="w-50" src="image/logo/LOGOLTW.png" alt="" />
        </div>
        <div className="col-md-8 col-sm-5 col-4 p-0">
          <Nav variant="pills" activeKey="">
            <Nav.Item>
              <Nav.Link eventKey="2" title="Item">
                <Link className="text-white" to="/">
                  Trang chủ
                </Link>
              </Nav.Link>
            </Nav.Item>

            {menu
              .filter((item) => {
                return item.parentid === 0;
              })
              .map((item, index) => {
                return (
                  <NavDropdown title={item.name} id="nav-dropdown">
                    {/*  */}
                    {menu
                      .filter((child) => {
                        return child.parentid === item.id;
                      })
                      .map((child, index) => {
                        return (
                          <NavDropdown.Item eventKey="4.1">
                            {child.name}
                          </NavDropdown.Item>
                        );
                      })}
                    {/*  */}
                  </NavDropdown>
                );
              })}
            <div className="search row">
              <div className="col-2 text-center">
                <BsSearch className="icon-search" />
              </div>
              <div className="col-10">
                <input type="text" placeholder="Xinh đẹp tuyệt vời" />
              </div>
            </div>
          </Nav>

          {/* <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white fw-bold text-white"
                      aria-current="page"
                      to="/"
                    >
                      Trang chủ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white fw-bold text-white"
                      aria-current="page"
                      to="#"
                    >
                      Bài viết
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white fw-bold text-white"
                      aria-current="page"
                      to="#"
                    >
                      Sản phẩm
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white fw-bold text-white"
                      aria-current="page"
                      to="#"
                    >
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="search row">
                <div className="col-2 text-center">
                  <BsSearch className="icon-search" />
                </div>
                <div className="col-10">
                  <input type="text" placeholder="Xinh đẹp tuyệt vời" />
                </div>
              </div>
            </div>
          </nav> */}
        </div>
        <div className="col-md-2 col-sm-2 col-3 account-cart">
          <Link to="/" className="link text-white">
            <span>
              <FaUserAlt className="mx-1" />
              Đăng nhập
            </span>
          </Link>
          <Link to="/" className="link text-white">
            <span>
              <FaShoppingCart className="mx-1" />
              Giỏ hàng
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCustomer;
