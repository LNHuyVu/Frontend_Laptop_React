import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./producthot.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import orderDetailService from "../../../services/orderDetail.service";
const ProducHot = () => {
  const numeral = require("numeral");
  const [productHot, setProductHot] = useState([]);

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
    orderDetailService
      .getProductHot("ALL")
      .then((reponse) => {
        setProductHot(reponse.data.productHot);
      })
      .catch((error) => {
        console.log("Loi", error);
      });
  };
  return (
    <div className="producthot p-2 mt-2">
      <h3>Bán chạy</h3>
      <Carousel responsive={responsive}>
        {productHot?.map((item) => {
          return (
            <div key={item.productId} className="card mx-2">
              <Link to={`/product/productdetail/${item?.product.slugProduct}`}>
                <div className="p-2 box-zoom-out">
                  <img
                    src={item?.product.imgData?.link[0]}
                    className="card-img-top"
                    alt="..."
                  />
                  {item?.product.sale == null ||
                  item?.product.sale.status == 0 ? (
                    <></>
                  ) : (
                    <>
                      <span className="sale px-2">
                        Giảm giá:{" "}
                        {numeral(item?.product.sale.valueSale).format("0,0")}đ
                      </span>
                    </>
                  )}
                </div>
              </Link>

              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "100%" }}>
                  <Link
                    to={`/product/productdetail/${item?.product.slugProduct}`}
                  >
                    <span className="card-text-home" style={{ color: "#000" }}>
                      {item?.product.nameProduct}
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
                          {item?.product.option?.ramName ? "Ram" : ""}
                          {item?.product.option?.ramName.nameValue}
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
                          {item?.product.option?.hdriveName.nameValue}
                        </div>
                      </div>
                    </div>
                  </div>
                </h5>
                <div className="card-text">
                  <div className="d-flex justify-content-lg-between">
                    {item?.product.sale == null ||
                    item?.product.sale.status == 0 ? (
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
                          {numeral(item?.product.price).format("0,0")}
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
                            parseInt(item?.product.price) -
                              item?.product.sale?.valueSale
                          ).format("0,0")}
                          <u>đ</u>
                        </span>
                        <span
                          style={{
                            "text-decoration-line": "line-through",
                          }}
                        >
                          {numeral(item?.product.price).format("0,0")}
                          <u>đ</u>
                        </span>
                      </>
                    )}
                  </div>
                  {item?.product.option?.ramName ? (
                    <>
                      {item?.product.option?.screenName ? "Màng hình: " : ""}
                      {item?.product.option?.screenName.nameValue}
                      <br />
                      {item?.product.option?.cpuName ? "CPU: " : ""}
                      {item?.product.option?.cpuName.nameValue}
                      {item?.product.option?.cpuName ? "," : ""}
                      {item?.product.option?.cpuGenName.nameValue}
                      <br />
                      <span className="card-text text-graphics-card">
                        {item?.product.option?.cardName ? "Card:" : ""}

                        {item?.product.option?.cardName.nameValue}
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

export default ProducHot;
