import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bannercustomer.scss";
// import img from "../../../public/logo192.png"
const BannerCustomer = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="banner">
      {/*  */}
      <div className="banner-img w-100"></div>
      <Slider {...settings} className="slider mt-2">
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
  );
};

export default BannerCustomer;
