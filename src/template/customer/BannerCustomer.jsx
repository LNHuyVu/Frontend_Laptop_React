import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bannercustomer.scss";
// import img from "../../../public/logo192.png"
// import img from "../../../public/image/banner/bannermain.jpg"
const BannerCustomer = () => {
  
  return (
    <div className="banner">
      {/*  */}
      <div className="banner-img w-100">
        <img
          className="w-100"
          src="./image/banner/bannermain.jpg"
          alt=""
          style={{ maxHeight: "200px" }}
        />
      </div>
    </div>
  );
};

export default BannerCustomer;
