import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";

import menuService from "../../services/menu.service";

import "./headercustomer.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/apiRequest";
import { removeToCart } from "../../redux/slice/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// import queryString from "query-string";
const HeaderCustomer = () => {
  const slugName = require("slug");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeToCart());
    logoutUser(dispatch, navigate);
  };
  const userRD = useSelector((state) => state.auth.login?.currentUser);
  // console.log(userRD);
  const [user, setUser] = useState("");
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    menuService
      .getAll("ALL")
      .then((res) => {
        setMenu(res.data.menu);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const menu1 = [
    {
      id: 1,
      name: "Nhu cầu",
      parentid: 0,
    },
    {
      id: 2,
      name: "Laptop",
      link: "category/laptop",
      parentid: 0,
    },
    {
      id: 3,
      name: "Phụ kiện",
      link: "phu-kien",
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
      link: "demand/hoc-tap-van-phong",
      parentid: 1,
    },
    {
      id: 21,
      name: "Cao cấp sang trọng",
      link: "demand/cao-cap-sang-trong",
      parentid: 1,
    },
    {
      id: 22,
      name: "Đồ họa - Kỹ thuật",
      link: "demand/do-hoa-ky-thuat",
      parentid: 1,
    },
    {
      id: 5,
      name: "Gaming",
      link: "demand/gaming",
      parentid: 1,
    },
    {
      id: 6,
      name: "Tất cả Laptop",
      link: "category/laptop",
      parentid: 2,
    },
    {
      id: 23,
      name: "Laptop DELL",
      link: "category/laptop-dell",
      parentid: 2,
    },
    {
      id: 7,
      name: "Latop HP",
      link: "category/laptop-hp",
      parentid: 2,
    },
    {
      id: 8,
      name: "Tất cả phụ kiện",
      link: "category/phu-kien",
      parentid: 3,
    },
    {
      id: 24,
      name: "Bàn phím",
      link: "category/ban-phim",
      parentid: 3,
    },
    {
      id: 9,
      name: "Chuột",
      link: "category/chuot",
      parentid: 3,
    },
    {
      id: 18,
      name: "Thiết bị mạng",
      link: "category/thiet-bi-mang",
      parentid: 3,
    },
    {
      id: 19,
      name: "Túi chống sốc",
      link: "category/tui-chong-soc",
      parentid: 3,
    },
    {
      id: 20,
      name: "Miếng lót chuột",
      link: "category/mieng-lot-chuot",
      parentid: 3,
    },
    {
      id: 11,
      name: "Khuyến mãi",
      link: "post/khuyen-mai",
      parentid: 10,
    },
    {
      id: 12,
      name: "Mẹo hay",
      link: "post/meo-hay",
      parentid: 10,
    },
    {
      id: 21,
      name: "Tư vấn",
      link: "post/tu-van",
      parentid: 10,
    },
    {
      id: 22,
      name: "Laptop",
      link: "post/laptop",
      parentid: 10,
    },
    {
      id: 13,
      name: "Latop MSI",
      link: "category/laptop-msi",
      parentid: 2,
    },
    {
      id: 14,
      name: "Latop Acer",
      link: "category/laptop-acer",
      parentid: 2,
    },
    {
      id: 15,
      name: "Latop Asus",
      link: "category/laptop-asus",
      parentid: 2,
    },
    {
      id: 16,
      name: "Latop Lenovo",
      link: "category/laptop-lenovo",
      parentid: 2,
    },
    {
      id: 17,
      name: "Latop Macbook",
      link: "category/laptop-macbook",
      parentid: 2,
    },
  ];
  //Search
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm != "") {
      navigate(`/search/${slugName(searchTerm)}`);
    } else {
      notifyError();
      navigate("/");
    }
  };
  const notifyError = () =>
    toast.error("Vui lòng nhập thông tin!", {
      position: "top-center",
      autoClose: 600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="header1">
      <div className="container-xxl">
        <div className="row py-1">
          <div className="col-md-2 text-center">
            <Link to="/">
              <img className="w-50" src="image/logo/LOGOLTW.png" alt="" />
            </Link>
          </div>
          <div className="col-md-4">
            <form onSubmit={handleSubmit} class="d-flex">
              <div className="search row w-100">
                <button className="col-2 text-center">
                  <BsSearch className="icon-search" />
                </button>
                <div className="col-10">
                  <input
                    name=""
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Xinh đẹp tuyệt vời"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-2 ">
            <Link to="/contact" className="link text-white">
              <span>
                <HiOutlineMail className="mx-1" />
                Liên hệ
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
                    <FiUserPlus className="mx-1" />
                    Đăng ký
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link to="./user">
                  <span className="w-100" style={{ display: "inline-block" }}>
                    <FaUserAlt className="mx-1" />
                    {userRD?.user.name}
                  </span>
                </Link>
                <span onClick={handleLogout}>
                  <TbLogout className="mx-1" />
                  Đăng xuất
                </span>
              </>
            )}
          </div>
          <div className="col-md-2">
            <Link to="/cart" className="link text-white">
              <span>
                <FaShoppingCart className="mx-1" />
                Giỏ hàng
              </span>
            </Link>
          </div>
        </div>
        {/* Navbar */}
      </div>
      <Navbar className="py-0" bg="dark" expand="lg">
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
                return item.parentId === 0;
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
                          return (
                            child.parentId === item.id && child.status === 1
                          );
                        })
                        .map((child, index) => {
                          return (
                            <NavDropdown.Item as={Link} to={child?.link}>
                              {child.name}
                            </NavDropdown.Item>
                          );
                        })}
                    </NavDropdown>
                  </Nav>
                );
              })}
            {/* <Nav.Link as={Link} to="/post/gioi-thieu/gioi-thieu">
              Giới thiệu
            </Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default HeaderCustomer;
