import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productnew.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProducHot = (product) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="productnew p-5 mt-2">
      <h3>Product New</h3>
      <Carousel responsive={responsive}>
        {product.product.map((item) => {
          return (
            <div className="card mx-2">
              <img
                src="https://res.cloudinary.com/duhwcwwyo/image/upload/v1681133983/website-laptop/n0mwpmjrtubrk0qaziek.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary w-100">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className="seemore">
        <button>Xem tất cả sản phẩm</button>
      </div>
    </div>
  );
};

export default ProducHot;
