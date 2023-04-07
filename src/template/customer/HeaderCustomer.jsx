import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import "./headercustomer.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/apiRequest";
const HeaderCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    logoutUser(dispatch, navigate);
  };
  const userRD = useSelector((state) => state.auth.login?.currentUser);
  console.log(userRD);
  const [user, setUser] = useState("Hihi");
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
      id: 10,
      name: "Bài viết",
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
    {
      id: 11,
      name: "Khuyến mãi",
      parentid: 10,
    },
    {
      id: 12,
      name: "Công nghệ",
      parentid: 10,
    },
  ];
  console.log(menu);
  return (
    <div className="container-xxl header1 px-0">
      <div className="row py-1">
        <div className="col-md-2 text-center">
          <img className="w-50" src="image/logo/LOGOLTW.png" alt="" />
        </div>
        <div className="col-md-4">
          <div className="search row w-100">
            <div className="col-2 text-center">
              <BsSearch className="icon-search" />
            </div>
            <div className="col-10">
              <input type="text" placeholder="Xinh đẹp tuyệt vời" />
            </div>
          </div>
        </div>
        <div className="col-md-2 ">
          <Link to="/" className="link text-white">
            <span>
              <FaUserAlt className="mx-1" />
              Hoi Dap
            </span>
          </Link>
        </div>
        <div className="col-md-2 account-cart px-2">
          {!userRD ? (
            <>
              <Link to="./login" className="link text-white">
                <span>
                  <FaUserAlt className="mx-1" />
                  Đăng nhập
                </span>
              </Link>
              <Link to="./register" className="link text-white">
                <span>
                  <FaShoppingCart className="mx-1" />
                  Đăng ký
                </span>
              </Link>
            </>
          ) : (
            <>
              <span className="w-100" style={{ display: "inline-block" }}>
                <FaUserAlt className="mx-1" />
                {userRD?.user.name}
              </span>

              <span onClick={handleLogout}>
                <FaShoppingCart className="mx-1" />
                Đăng xuất
              </span>
            </>
          )}
        </div>
        <div className="col-md-2">
          <Link to="/" className="link text-white">
            <span>
              <FaShoppingCart className="mx-1" />
              Gio hang
            </span>
          </Link>
        </div>
      </div>
      {/* Navbar */}
      <Navbar className="p-0" bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-evenly"
          >
            <Nav.Link as={Link} to="/">
              Trang chủ
            </Nav.Link>
            {menu
              .filter((item) => {
                return item.parentid === 0;
              })
              .map((item, index) => {
                return (
                  <Nav className="me-auto">
                    <NavDropdown
                      title={item.name}
                      className="m-0"
                      id="basic-nav-dropdown"
                    >
                      {menu
                        .filter((child) => {
                          return child.parentid === item.id;
                        })
                        .map((child, index) => {
                          return (
                            <NavDropdown.Item as={Link} to="/">
                              {child.name}
                            </NavDropdown.Item>
                          );
                        })}
                    </NavDropdown>
                  </Nav>
                );
              })}
            <Nav.Link as={Link} to="/">
              Giới thiệu
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderCustomer;
