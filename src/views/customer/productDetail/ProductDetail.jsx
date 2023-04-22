import React, { useEffect } from "react";
import "./productdetail.scss";
import { useParams } from "react-router-dom";
import productService from "../../../services/product.service";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import productValueService from "../../../services/productValue.service";
const ProductDetail = () => {
  const param = useParams();
  let slug = param.slug;
  var numeral = require("numeral");
  const [product, setProduct] = useState([]);
  const [productSimilar, setProductSimilar] = useState([]);
  const [img, setImg] = useState([]);
  const [option, setOption] = useState([]);
  useEffect(() => {
    init();
  }, [slug]);
  const init = () => {
    productService
      .getProductId(slug)
      .then((reponse) => {
        console.log(reponse.data);
        setImg(reponse.data.product.imgData.link);
        setProduct(reponse.data.product);
        setOption(reponse.data.product.option);
        if (reponse.data.product.type == "LT") {
          productValueService
            .getProductValueCustomer(
              reponse.data.product.option.demandName.slug
            )
            .then((reponse) => {
              setProductSimilar(reponse.data.productvalue);
            })
            .catch((error) => {
              console.log(error);
            });
        }
        if (reponse.data.product.type == "PK") {
          productService
            .getProductCat(reponse.data.product.catId)
            .then((reponse) => {
              setProductSimilar(reponse.data.product);
              // console.log("Cat",reponse.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("Similar", productSimilar);

  return (
    <>
      <div className="row p-5 product-detail">
        <div className="col-md-6 product-img">
          <h4 className="text-center">{product.nameProduct}</h4>

          <Carousel className="text-center">
            {img.map((item) => {
              return (
                <div className="d-flex justify-content-center">
                  <img src={item} />
                </div>
              );
            })}
          </Carousel>
          <span className="fw-bold">
            Hư gì đổi nấy 12 tháng tại 3125 siêu thị toàn quốc (miễn phí tháng
            đầu)
          </span>
          <br />
          <span className="fw-bold">
            Bảo hành chính hãng laptop 1 năm tại các trung tâm bảo hành hãng
          </span>
          <br />
          <span className="fw-bold">
            Bộ sản phẩm gồm: Sách hướng dẫn, Thùng máy, Cáp ( Type C )
          </span>
        </div>
        <div className="col-md-6 product-data">
          <h3 className="text-center">
            Giá: {numeral(product.price).format("0,0")}đ
          </h3>
          <div className="text-center div-price">Mua online giảm giá sốc</div>
          <div className="text-center div-price">
            Chỉ còn: {numeral(product.price - 500000).format("0,0")}đ
          </div>
          <span>
            Giá khuyến mãi dự kiến áp dụng đến 23:00 15/6, không áp dụng trả góp
            lãi suất đặt biệt(0%, 0.5%, 1%,)
          </span>
          <div className="buy-now">
            <h3>Mua ngay</h3>
          </div>
          <div className="product-info">
            <h4>Thông tin chi tiết</h4>
            <table class="table">
              <thead></thead>
              <tbody>
                {option ? (
                  <>
                    <tr style={{ background: "#DCDCDC" }}>
                      <td>CPU</td>
                      <td>
                        {option?.cpuName?.nameValue},{" "}
                        {option?.cpuGenName?.nameValue}
                      </td>
                    </tr>
                    <tr style={{ background: "#fff" }}>
                      <td>RAM</td>
                      <td>{option?.ramName?.nameValue}</td>
                    </tr>
                    <tr style={{ background: "#DCDCDC" }}>
                      <td>Ổ cứng</td>
                      <td>{option?.hdriveName?.nameValue}</td>
                    </tr>
                    <tr style={{ background: "#fff" }}>
                      <td>Màn hình</td>
                      <td>{option?.screenName?.nameValue}</td>
                    </tr>
                    <tr style={{ background: "#DCDCDC" }}>
                      <td>Card màn hình</td>
                      <td>{option?.cardName?.nameValue}</td>
                    </tr>
                    <tr style={{ background: "#fff" }}>
                      <td>Hệ điều hành</td>
                      <td>{option?.systemName?.nameValue}</td>
                    </tr>
                  </>
                ) : (
                  <>
                    <div className="detail">
                      <h3>Giới thiệu</h3>
                      <div
                        // className="text-center"
                        style={{ background: "#fff" }}
                        dangerouslySetInnerHTML={{ __html: product?.detail }}
                      ></div>
                    </div>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {option ? (
        <>
          <div className="detail">
            <h3>Giới thiệu</h3>
            <div
              // className="text-center"
              style={{ background: "#fff" }}
              dangerouslySetInnerHTML={{ __html: product?.detail }}
            ></div>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="similar products">
        <h3>Có thể bạn quan tâm</h3>
        <div className="container-xxl">
          {product.type == "LT" ? (
            <>
              <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                {productSimilar
                  .filter((item) => {
                    return item?.product?.id !== product?.id;
                  })
                  .map((item) => {
                    return (
                      <div className="col">
                        <div className="card">
                          <img
                            src={item?.product?.imgData?.link[0]}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5
                              className="card-title"
                              style={{ fontSize: "100%" }}
                            >
                              <span
                                className="card-text-home"
                                style={{ color: "#000" }}
                              >
                                {item?.product?.nameProduct}
                              </span>
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
                                      {item?.product?.option?.ramName
                                        ? "Ram"
                                        : ""}
                                      {item?.product?.option?.ramName.nameValue}
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
                                        item?.product?.option?.hdriveName
                                          .nameValue
                                      }
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </h5>
                            <p className="card-text">
                              <b>
                                <span>Giá: </span>
                                {numeral(item?.product?.price).format("0,0")}
                                <span>
                                  {" "}
                                  <u>đ</u>
                                </span>
                              </b>
                              <br />
                              {item?.product?.option?.screenName
                                ? "Màng hình: "
                                : ""}
                              {item?.product?.option?.screenName.nameValue}
                              <br />
                              {item?.product?.option?.cpuName ? "CPU: " : ""}
                              {item?.product?.option?.cpuName.nameValue},
                              {item?.product?.option?.cpuGenName.nameValue}
                              <br />
                              <span className="card-text-home">
                                {item?.product?.option?.cardName ? "Card:" : ""}

                                {item?.product?.option?.cardName.nameValue}
                              </span>
                            </p>
                            <Link
                              to={`/product/productdetail/${item?.product?.slugProduct}`}
                            >
                              <button className="btn btn-primary">
                                Go somewhere
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </>
          ) : (
            <><div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
            {productSimilar
              .filter((item) => {
                return item?.id !== product.id;
              })
              .map((item) => {
                return (
                  <div className="col">
                    <div className="card">
                      <img
                        src={item?.imgData?.link[0]}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ fontSize: "100%" }}
                        >
                          <span
                            className="card-text-home"
                            style={{ color: "#000" }}
                          >
                            {item?.nameProduct}
                          </span>
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
                                  {item?.option?.ramName
                                    ? "Ram"
                                    : ""}
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
                                  {
                                    item?.option?.hdriveName
                                      .nameValue
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </h5>
                        <p className="card-text">
                          <b>
                            <span>Giá: </span>
                            {numeral(item?.price).format("0,0")}
                            <span>
                              {" "}
                              <u>đ</u>
                            </span>
                          </b>
                          <br />
                          {item?.option?.screenName
                            ? "Màng hình: "
                            : ""}
                          {item?.option?.screenName.nameValue}
                          <br />
                          {item?.option?.cpuName ? "CPU: " : ""}
                          {item?.option?.cpuName.nameValue}
                          {item?.option?.cpuName ? "," : ""}
                          {item?.option?.cpuGenName.nameValue}
                          <br />
                          <span className="card-text-home">
                            {item?.option?.cardName ? "Card:" : ""}

                            {item?.option?.cardName.nameValue}
                          </span>
                        </p>
                        <Link
                          to={`/product/productdetail/${item?.slugProduct}`}
                        >
                          <button className="btn btn-primary">
                            Go somewhere
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div></>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
