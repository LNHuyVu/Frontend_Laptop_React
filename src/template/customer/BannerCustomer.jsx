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
      <div className="text-center banner-parent">
        <div className="row banner-child">
          <div className="col-md-8 p-1">
            {/* Slider s */}
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner p-0">
                <div class="carousel-item active">
                  <img
                    src="banner/banner1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="banner/banner1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="banner/banner1.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            {/* Slider e */}
          </div>
          <div className="col-md-4 px-1">
            <div className="slider-mini1 px-0">
              <img src="banner/HpBanner.webp" className="w-100 h-100" />
            </div>
            <div className="slider-mini2 px-0">
              <img src="banner/HpBanner.webp" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      {/* <Slider {...settings} className="slider mt-2">
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
      </Slider> */}
    </div>
  );
};

export default BannerCustomer;
