import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BannerCustomer from "./BannerCustomer";
import Featuredcategory from "./model-slick/Featuredcategory";
import ProducNew from "./model-slick/ProducNew";
import ProductSale from "./model-slick/ProductSale";
import "./homecustomer.scss";
import productValueService from "../../services/productValue.service";
import { useState } from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import cartService from "../../services/cart.service";
const HomeCustomer = () => {
  const userRD = useSelector((state) => state.auth.login?.currentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    init();
  }, []);

  const product1 = [
    { name: "SP 0", price: "10$" },
    { name: "SP 1", price: "10$" },
    { name: "SP 2", price: "10$" },
    { name: "SP 3", price: "10$" },
    { name: "SP 4", price: "10$" },
    { name: "SP 5", price: "10$" },
    { name: "SP 6", price: "10$" },
    { name: "SP 7", price: "10$" },
    { name: "SP 8", price: "10$" },
    { name: "SP 9", price: "10$" },
    { name: "SP 10", price: "10$" },
    { name: "SP 11", price: "10$" },
    { name: "SP 12", price: "10$" },
    { name: "SP 13", price: "10$" },
    { name: "SP 14", price: "10$" },
    { name: "SP 15", price: "10$" },
    { name: "SP 16", price: "10$" },
    { name: "SP 17", price: "10$" },
    { name: "SP 18", price: "10$" },
    { name: "SP 19", price: "10$" },
  ];
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  var numeral = require("numeral");
  const [demandProduct, setDemandProduct] = useState([]);
  const init = () => {
    productValueService
      .getDemand("demand")
      .then((reponse) => {
        console.log("Demand", reponse.data.productvalue);
        setDemandProduct(reponse.data.productvalue);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddCart = (id, title, image, price) => {
    if (!userRD) {
      alert("vui lòng đăng nhập");
    } else {
      let userid = userRD.user.id;
      dispatch(addToCart({ id, title, image, price, userid }));
      // alert("hi");
    }
  };
  return (
    <div className="w-100 h-100" style={{ position: "relative" }}>
      <BannerCustomer />
      <div
        className="w-100 container-fluid "
        // style={{ position: "absolute", top: "45%", zIndex: 1 }}
      >
        <div className="">
          <div className="w-100 banner-child">
            <Slider
              {...settings}
              className="slider mt-2 mx-auto"
              style={{ width: "90%" }}
            >
              <div className="slider-child">
                <img src="banner/HpBanner.webp" className="w-100 h-100" />
              </div>
              <div className="slider-child">
                <img src="banner/HpBanner.webp" className="w-100 h-100" />
              </div>
              <div className="slider-child">
                <img src="banner/HpBanner.webp" className="w-100 h-100" />
              </div>
              <div className="slider-child">
                <img src="banner/HpBanner.webp" className="w-100 h-100" />
              </div>
              <div className="slider-child">
                <img src="banner/HpBanner.webp" className="w-100 h-100" />
              </div>
              <div className="slider-child">
                <img src="banner/HpBanner.webp" className="w-100 h-100" />
              </div>
            </Slider>
          </div>
          <ProducNew product={product1} />
          <div className="text-center">
            <img
              className="w-100"
              src="./image/advertisement/QC1.webp"
              alt=""
            />
          </div>
          <ProductSale product={product1} />
          <Featuredcategory product={product1} />
          <Link to="/product">
            <button>Nut Product</button>
          </Link>
          {/*Start Product by category*/}
          {demandProduct.map((item) => {
            return (
              <>
                <div className="product-by-category">
                  <div className="product-type">
                    <div className="title-demand d-flex justify-content-between mb-1">
                      <h3 className="fw-bold">
                        {item[0].product.option.demandName.nameValue}
                      </h3>
                      <Link
                        className="link fs-5"
                        to={`./demand/${item[0].product.option.demandName.slug}`}
                      >
                        Xem thêm
                      </Link>
                    </div>
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                      {item?.map((child) => {
                        return (
                          <>
                            <div className="col">
                              <div className="p-0">
                                <div className="card">
                                  <Link
                                    style={{ color: "#000" }}
                                    to={`product/productdetail/${child.product.slugProduct}`}
                                  >
                                    <div className="p-2 box-zoom-out">
                                      <img
                                        src={child.product.imgData?.link[0]}
                                        className="card-img-top"
                                        alt="..."
                                      />
                                    </div>
                                  </Link>
                                  <div className="card-body">
                                    <h5
                                      className="card-title"
                                      style={{ fontSize: "100%" }}
                                    >
                                      <Link
                                        style={{ color: "#000" }}
                                        to={`product/productdetail/${child.product.slugProduct}`}
                                      >
                                        <span
                                          className="card-text-home"
                                          style={{ color: "#000" }}
                                        >
                                          {child.product.nameProduct}
                                        </span>
                                      </Link>
                                      <div className="mt-1 container overflow-hidden">
                                        <div className="row gx-2">
                                          <div className="col">
                                            <div
                                              className="border bg-light text-center"
                                              style={{
                                                borderRadius: 5,
                                                background: "#fff",
                                                fontSize: "80%",
                                              }}
                                            >
                                              Ram{" "}
                                              {
                                                child.product.option.ramName
                                                  ?.nameValue
                                              }
                                            </div>
                                          </div>
                                          <div class="col">
                                            <div
                                              class="border bg-light text-center"
                                              style={{
                                                borderRadius: 5,
                                                background: "#fff",
                                                fontSize: "80%",
                                              }}
                                            >
                                              {
                                                child.product.option.hdriveName
                                                  ?.nameValue
                                              }
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </h5>
                                    <p className="card-text">
                                      <b>
                                        <span>Giá: </span>
                                        {numeral(child.product.price).format(
                                          "0,0"
                                        )}
                                        <span>
                                          {" "}
                                          <u>đ</u>
                                        </span>
                                      </b>
                                      <br />
                                      <span>Màng hình: </span>
                                      {
                                        child.product.option.screenName
                                          ?.nameValue
                                      }
                                      <br />
                                      <span>CPU: </span>
                                      {child.product.option.cpuName?.nameValue},
                                      {
                                        child.product.option.cpuGenName
                                          ?.nameValue
                                      }
                                      <br />
                                      <span className="">
                                        Card:{" "}
                                        {
                                          child.product.option.cardName
                                            ?.nameValue
                                        }
                                      </span>
                                    </p>
                                    <button
                                      className="btn btn-success w-100"
                                      onClick={() =>
                                        handleAddCart(
                                          child.product.id,
                                          child.product.nameProduct,
                                          child.product.imgData?.link[0],
                                          child.product.price
                                        )
                                      }
                                    >
                                   
                                        <TiShoppingCart
                                          size={30}
                                        />
                                
                                      MUA NGAY
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/*End Product by category*/}
          <div className="product-today">
            <h3>Gợi ý hôm nay</h3>
            <div className="container-xxl row row-cols-3 row-cols-lg-5 g-2 g-lg-3">
              {product1.map((item) => {
                return (
                  <div className="col">
                    <div className="p-1 border bg-light">
                      <div className="card">
                        <img
                          src="product/asus-vivobook-pro-15-k6502z.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">ngu</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <a href="#" className="btn btn-primary w-100">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCustomer;
