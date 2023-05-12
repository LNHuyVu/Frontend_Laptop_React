import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productsale.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import productService from "../../../services/product.service";
const ProductSale = () => {
  let numeral = require("numeral");
  const [productSale, setProductSale] = useState([]);
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
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    productService
      .getAll("ALL")
      .then((reponse) => {
        setProductSale(reponse.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="productsale p-2 mt-4 mb-1">
      <h3>Khuyến mãi</h3>
      <Carousel responsive={responsive}>
        {productSale
          .filter((item) => {
            return item.sale != null && item.sale?.status == 1;
          })
          .map((item) => {
            return (
              <div className="card mx-2">
                <Link to={`/product/productdetail/${item?.slugProduct}`}>
                  <div className="p-2 box-zoom-out">
                    <img
                      src={item?.imgData.link[0]}
                      className="card-img-top"
                      alt="..."
                    />
                    {item?.sale == null || item?.sale.status == 0 ? (
                      <></>
                    ) : (
                      <>
                        <span className="sale px-2">
                          Giảm giá:{" "}
                          {numeral(item?.sale.valueSale).format("0,0")}đ
                        </span>
                      </>
                    )}
                  </div>
                </Link>

                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "100%" }}>
                    <Link to={`/product/productdetail/${item?.slugProduct}`}>
                      <span
                        className="card-text-home"
                        style={{ color: "#000" }}
                      >
                        {item?.nameProduct}
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
                            {item?.option?.ramName ? "Ram" : ""}
                            {item?.option?.ramName.nameValue}
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
                            {item?.option?.hdriveName.nameValue}
                          </div>
                        </div>
                      </div>
                    </div>
                  </h5>
                  <div className="card-text">
                    <div className="d-flex justify-content-lg-between">
                      {item?.sale == null || item?.sale.status == 0 ? (
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
                            {numeral(item?.price).format("0,0")}
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
                              parseInt(item?.price) - item?.sale?.valueSale
                            ).format("0,0")}
                            <u>đ</u>
                          </span>
                          <span
                            style={{
                              "text-decoration-line": "line-through",
                            }}
                          >
                            {numeral(item?.price).format("0,0")}
                            <u>đ</u>
                          </span>
                        </>
                      )}
                    </div>
                    {item?.option?.ramName ? (
                      <>
                        {item?.option?.screenName ? "Màng hình: " : ""}
                        {item?.option?.screenName.nameValue}
                        <br />
                        {item?.option?.cpuName ? "CPU: " : ""}
                        {item?.option?.cpuName.nameValue}
                        {item?.option?.cpuName ? "," : ""}
                        {item?.option?.cpuGenName.nameValue}
                        <br />
                        <span className="card-text text-graphics-card">
                          {item?.option?.cardName ? "Card:" : ""}

                          {item?.option?.cardName.nameValue}
                        </span>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </Carousel>
      {/* <div className="seemore">
        <button>Xem tất cả sản phẩm</button>
      </div> */}
    </div>
  );
};

export default ProductSale;
