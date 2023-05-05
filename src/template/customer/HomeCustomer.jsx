import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BannerCustomer from "./BannerCustomer";
import Featuredcategory from "./model-slick/Featuredcategory";
import ProducHot from "./model-slick/ProducHot";
import ProductSale from "./model-slick/ProductSale";
import "./homecustomer.scss";
import productValueService from "../../services/productValue.service";
import { useState } from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import productService from "../../services/product.service";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import orderDetailService from "../../services/orderDetail.service";
const HomeCustomer = () => {
  const userRD = useSelector((state) => state.auth.login?.currentUser);
  var numeral = require("numeral");
  const [demandProduct, setDemandProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const [productHot, setProductHot] = useState([]);
  const [productCount, setProductCount] = useState(10);
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

  //Scroll Top
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  //
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const init = () => {
    productValueService
      .getDemand("demand")
      .then((reponse) => {
        console.log("Demand: ",reponse.data.productvalue)
        setDemandProduct(reponse.data.productvalue);
      })
      .catch((error) => {
        console.log(error);
      });
    productService
      .getAll("ALL")
      .then((reponse) => {
        setProduct(reponse.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
    orderDetailService
      .getProductHot("ALL")
      .then((reponse) => {
        setProductHot(reponse.data.productHot);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddCart = (id, title, image, price, proId, number) => {
    if (!userRD) {
      alert("vui lòng đăng nhập");
    } else {
      let userid = userRD.user.id;
      dispatch(addToCart({ id, title, image, price, proId, userid, number }));
      // alert("hi");
    }
  };
  const handleShowMoreClick = () => {
    setProductCount(productCount + 10);
  };

  return (
    <>
      {/* Button Scroll */}
      <div
        className="button-scroll"
        style={{ display: visible ? "inline" : "none" }}
      >
        <button onClick={scrollToTop} className="p-0 m-0">
          <BsFillArrowUpCircleFill size={50} color="#005eff" />
        </button>
      </div>
      {/*  */}
      <div className="w-100 h-100" style={{ position: "relative" }}>
        <BannerCustomer />
        <div className="w-100 container-fluid ">
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
            <ProductSale product={product} />
            <div className="text-center">
              <img
                className="w-100"
                src="./image/advertisement/QC1.webp"
                alt=""
              />
            </div>
            <ProducHot product={productHot} />
            <Featuredcategory product={product1} />
            {/*Start Product by Demand*/}
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
                                      to={`/product/productdetail/${child?.product.slugProduct}`}
                                    >
                                      <div className="p-2 box-zoom-out">
                                        <img
                                          src={child?.product.imgData.link[0]}
                                          className="card-img-top"
                                          alt="..."
                                        />
                                        {child?.product.sale == null ||
                                        child?.product.sale.status == 0 ? (
                                          <></>
                                        ) : (
                                          <>
                                            <span className="sale px-2">
                                              Giảm giá:{" "}
                                              {numeral(
                                                child?.product.sale.valueSale
                                              ).format("0,0")}
                                              đ
                                            </span>
                                          </>
                                        )}
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
                                                  child.product.option
                                                    .hdriveName?.nameValue
                                                }
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </h5>
                                      <p className="card-text">
                                        <span>
                                          {child?.product.sale == null ||
                                          child?.product.sale.status == 0 ? (
                                            <>
                                              <span
                                                className="px-2"
                                                style={{
                                                  fontWeight: "bold",
                                                  color: "blue",
                                                  background: "#9370D8",
                                                  borderRadius: 10,
                                                }}
                                              >
                                                {numeral(
                                                  child?.product.price
                                                ).format("0,0")}
                                                <u>đ</u>
                                              </span>
                                            </>
                                          ) : (
                                            <>
                                              <span
                                                className="px-2"
                                                style={{
                                                  fontWeight: "bold",
                                                  color: "blue",
                                                  background: "#9370D8",
                                                  borderRadius: 10,
                                                }}
                                              >
                                                {numeral(
                                                  parseInt(
                                                    child?.product.price
                                                  ) -
                                                    child?.product.sale
                                                      ?.valueSale
                                                ).format("0,0")}
                                                <u>đ</u>
                                              </span>
                                              <span
                                                style={{
                                                  "text-decoration-line":
                                                    "line-through",
                                                  fontSize: "90%",
                                                }}
                                              >
                                                {numeral(
                                                  child?.product.price
                                                ).format("0,0")}
                                                <u>đ</u>
                                              </span>
                                            </>
                                          )}
                                        </span>
                                        <br />
                                        <span>Màng hình: </span>
                                        {
                                          child.product.option.screenName
                                            ?.nameValue
                                        }
                                        <br />
                                        <span>CPU: </span>
                                        {
                                          child.product.option.cpuName
                                            ?.nameValue
                                        }
                                        ,
                                        {
                                          child.product.option.cpuGenName
                                            ?.nameValue
                                        }
                                        <br />
                                        <span className="text-graphics-card">
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
                                            // child.product.price,
                                            child.product.sale == null ||
                                              child.product.sale.status == 0
                                              ? child.product.price
                                              : parseInt(
                                                  child.product.price -
                                                    child.product.sale.valueSale
                                                ),
                                            child.product.proId,
                                            child.product.store.number
                                          )
                                        }
                                      >
                                        <TiShoppingCart size={30} />
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
            {/* Suggestions for you */}
            <div className="product-type" style={{ background: "orangered" }}>
              <h3 className="text-white">Gợi ý hôm nay</h3>
              <div className="px-2 row row-cols-3 row-cols-lg-5 g-2 g-lg-3">
                {product.slice(0, productCount).map((child) => {
                  return (
                    <div className="col">
                      <div className="p-0">
                        <div className="card">
                          <Link
                            to={`/product/productdetail/${child?.slugProduct}`}
                          >
                            <div className="p-2 box-zoom-out">
                              <img
                                src={child?.imgData.link[0]}
                                className="card-img-top"
                                alt="..."
                              />
                              {child?.sale == null ||
                              child?.sale.status == 0 ? (
                                <></>
                              ) : (
                                <>
                                  <span className="sale px-2">
                                    Giảm giá:{" "}
                                    {numeral(child?.sale.valueSale).format(
                                      "0,0"
                                    )}
                                    đ
                                  </span>
                                </>
                              )}
                            </div>
                          </Link>
                          <div className="card-body">
                            <h5
                              className="card-title"
                              style={{ fontSize: "100%" }}
                            >
                              <Link
                                style={{ color: "#000" }}
                                to={`product/productdetail/${child.slugProduct}`}
                              >
                                <span
                                  className="card-text-home"
                                  style={{ color: "#000" }}
                                >
                                  {child.nameProduct}
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
                                      {child.option ? (
                                        <>
                                          Ram {child.option?.ramName?.nameValue}
                                        </>
                                      ) : (
                                        <></>
                                      )}
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
                                      {child.option?.hdriveName?.nameValue}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </h5>
                            <p className="card-text">
                              <span>
                                {child?.sale == null ||
                                child?.sale.status == 0 ? (
                                  <>
                                    <span
                                      className="px-2"
                                      style={{
                                        fontWeight: "bold",
                                        color: "blue",
                                        background: "#9370D8",
                                        borderRadius: 10,
                                      }}
                                    >
                                      {numeral(child?.price).format("0,0")}
                                      <u>đ</u>
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span
                                      className="px-2"
                                      style={{
                                        fontWeight: "bold",
                                        color: "blue",
                                        background: "#9370D8",
                                        borderRadius: 10,
                                      }}
                                    >
                                      {numeral(
                                        parseInt(child?.price) -
                                          child?.sale?.valueSale
                                      ).format("0,0")}
                                      <u>đ</u>
                                    </span>
                                    <span
                                      style={{
                                        "text-decoration-line": "line-through",
                                        fontSize: "90%",
                                      }}
                                    >
                                      {numeral(child?.price).format("0,0")}
                                      <u>đ</u>
                                    </span>
                                  </>
                                )}
                              </span>
                              <br />
                              {child.option ? (
                                <>
                                  <span>Màng hình: </span>
                                  {child.option?.screenName?.nameValue}
                                  <br />
                                  <span>CPU: </span>
                                  {child.option?.cpuName?.nameValue},
                                  {child.option?.cpuGenName?.nameValue}
                                  <br />
                                  <span className="text-graphics-card">
                                    Card: {child.option?.cardName?.nameValue}
                                  </span>
                                </>
                              ) : (
                                <></>
                              )}
                            </p>
                            <button
                              className="btn btn-success w-100"
                              onClick={() =>
                                handleAddCart(
                                  child.id,
                                  child.nameProduct,
                                  child.imgData?.link[0],
                                  // child.product.price,
                                  child.sale == null || child.sale.status == 0
                                    ? child.price
                                    : parseInt(
                                        child.price - child.sale.valueSale
                                      ),
                                  child.proId,
                                  child.store.number
                                )
                              }
                            >
                              <TiShoppingCart size={30} />
                              MUA NGAY
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center">
                {productCount < product.length && (
                  <button
                    className="border rounded bg-white fs-5 w-50"
                    onClick={handleShowMoreClick}
                  >
                    Xem thêm
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCustomer;
