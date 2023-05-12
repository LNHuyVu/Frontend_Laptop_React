import React, { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import BannerCustomer from "./BannerCustomer";
import "./homecustomer.scss";
import { useState } from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";
import { useSelector } from "react-redux";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import sliderService from "../../services/slider.service";
const ProductSale = lazy(() => import("./model-slick/ProductSale"));
const ProducHot = lazy(() => import("./model-slick/ProducHot"));
const Featuredcategory = lazy(() => import("./model-slick/Featuredcategory"));
const ProductDemand = lazy(() => import("./productDemand/ProductDemand"));
const ProductSuggested = lazy(() =>
  import("./productSuggested/ProductSuggested")
);
const PostTechnology = lazy(() => import("./postTechnology/PostTechnology"));

const HomeCustomer = () => {
  const userRD = useSelector((state) => state.auth.login?.currentUser);
  var numeral = require("numeral");
  const [demandProduct, setDemandProduct] = useState([]);
  const [slider, setSlider] = useState([]);
  const dispatch = useDispatch();
  let imgSlider = [];
  let imgPost = [];
  useEffect(() => {
    init();
  }, []);

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
    sliderService
      .getAll("ALL")
      .then((response) => {
        setSlider(response.data.slider);
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
  //Handle Img Slider(Slider, Position =2)
  for (const item of slider) {
    if (item.position == 2) imgSlider = item.image;
    if (item.position == 4) imgPost = item.image;
  }
  return (
    <div className="homecustomer">
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
      <div className="w-100 h-100">
        <div className="banner">
          {slider
            .filter((item) => {
              return item.position == 1;
            })
            .map((item) => {
              return (
                <img
                  className="w-100"
                  src={item.image[0]}
                  alt=""
                  style={{ maxHeight: "300px" }}
                />
              );
            })}
        </div>
        <div className="parent-slider">
          <div className="slider">
            <Slider
              {...settings}
              className="slider mx-auto"
              style={{ width: "90%" }}
            >
              {imgSlider.map((item) => {
                return (
                  <div className="slider-child">
                    <img src={item} className="w-100 h-100" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        {/* <BannerCustomer /> */}
        <div className="w-100 container-fluid">
          <div className="">
            <Suspense fallback={<div>Loading...</div>}>
              <ProductSale />
            </Suspense>
            {/* Slider Main */}
            <div className="text-center">
              {slider
                .filter((item) => {
                  return item.position == 3;
                })
                .map((item) => {
                  return <img className="w-100" src={item.image[0]} alt="" />;
                })}
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <ProducHot />
              <Featuredcategory />
            </Suspense>
            {/*Start Product by Demand*/}
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDemand />
            </Suspense>
            {/*End Product by Demand*/}

            {/* Slider Accessory */}
            <div className="text-center">
              {slider
                .filter((item) => {
                  return item.position == 5;
                })
                .map((item) => {
                  return <img className="w-100" src={item.image[0]} alt="" />;
                })}
            </div>

            {/* Suggestions for you */}
            <Suspense fallback={<div>Loading...</div>}>
              <ProductSuggested />
            </Suspense>
            {/* POST 24 Technology */}
            <Suspense fallback={<div>Loading...</div>}>
              <PostTechnology image={imgPost} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCustomer;
