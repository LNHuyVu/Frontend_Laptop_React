import React from "react";
import "./productcategory.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import categoryService from "../../../services/category.service";
import productService from "../../../services/product.service";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slice/cartSlice";
//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//

const ProductCategory = () => {
  //Filter Price
  let maxB;
  let minA;
  const [filter, setFilter] = useState([]);
  //
  const userRD = useSelector((state) => state.auth.login?.currentUser);

  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  let numeral = require("numeral");
  const param = useParams();
  let slug = param.slug;
  const categories = [
    { name: "Dưới 10 triệu", a: 0, b: 10000000 },
    { name: "Từ 10 đến 15 triệu", a: 10000000, b: 15000000 },
    { name: "Từ 15 đến 20 triệu", a: 15000000, b: 20000000 },
    { name: "Từ 20 đến 25 triệu", a: 20000000, b: 25000000 },
    { name: "Trên 25 triệu", a: 25000000, b: 1000000000 },
  ];
  useEffect(() => {
    init();
  }, [slug]);
  const init = () => {
    categoryService
      .getIdCat(slug)
      .then((reponse) => {
        console.log(reponse.data);
        productService
          .getProductCat(reponse.data.id)
          .then((reponse) => {
            setProduct(reponse.data.product);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Toastify
  const notifySuccess = () =>
    toast.success("Đã thêm vào giỏ hàng!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyWarning = () =>
    toast.warn("Vui lòng đăng nhập!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleAddCart = (id, title, image, price, proId, number) => {
    if (!userRD) {
      notifyWarning();
    } else {
      notifySuccess();
      let userid = userRD.user.id;
      dispatch(addToCart({ id, title, image, price, proId, userid, number }));
    }
  };
  //Filter Price
  function updateFilters(checked, categoryFilter) {
    if (checked) {
      setFilter([categoryFilter]);
    }
    if (!checked) {
      setFilter(
        filter.filter(
          (item) =>
            !(item.a === categoryFilter.a && item.b === categoryFilter.b)
        )
      );
    }
  }
  if (filter.length > 0) {
    const max = filter.reduce((prev, current) =>
      prev.b > current.b ? prev : current
    );
    maxB = max.b;
    console.log(max.b); // 2
    const min = Math.min(...filter.map((obj) => obj.a));
    minA = min;
    console.log(min); // 1
  }
  const filteredProducts =
    filter.length === 0
      ? product
      : product.filter((p) => p.price >= minA && p.price <= maxB);
  return (
    <div className="product-category">
      <div>ProductCategory</div>
      <div className="row">
        <div className="col-md-2 px-1">
          <div className="radio-price">
            <h6
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bolder",
              }}
            >
              Lọc theo giá
            </h6>
            <div className="form-radio-price">
              <div className="w-100">
                <label className="form-check-label label-radio-price">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioPrice"
                    onChange={(e) =>
                      updateFilters(e.target.checked, { a: 0, b: 1000000000 })
                    }
                  />
                  <span>Tất cả</span>
                </label>
              </div>
              {categories.map((elm, index) => {
                return (
                  <div className="w-100" key={index}>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="radioPrice"
                        onChange={(e) =>
                          updateFilters(e.target.checked, {
                            a: elm.a,
                            b: elm.b,
                          })
                        }
                      />
                      <span>{elm.name}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              {filteredProducts.map((item) => {
                return (
                  <div className="col">
                    <div className="card">
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
                          <Link
                            to={`/product/productdetail/${item?.slugProduct}`}
                          >
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
                                    parseInt(item?.price) -
                                      item?.sale?.valueSale
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
                          <br />
                          {item?.option?.screenName ? "Màn hình: " : ""}
                          {item?.option?.screenName.nameValue}
                          <br />
                          {item?.option?.cpuName ? "CPU: " : ""}
                          {item?.option?.cpuName.nameValue}
                          {item?.option?.cpuName ? "," : ""}
                          {item?.option?.cpuGenName.nameValue}
                          <br />
                          <span className="card-text">
                            {item?.option?.cardName ? "Card:" : ""}

                            {item?.option?.cardName.nameValue}
                          </span>
                        </div>
                        {item?.store?.number == 0 ? (
                          <>
                            <h4 className="text-center btn-light">Đã hết</h4>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn btn-success w-100"
                              onClick={() =>
                                handleAddCart(
                                  item.id,
                                  item.nameProduct,
                                  item?.imgData.link[0],
                                  item?.sale == null
                                    ? item.price
                                    : parseInt(
                                        item.price - item.sale.valueSale
                                      ),
                                  item.proId,
                                  item.store.number
                                )
                              }
                            >
                              <TiShoppingCart size={30} />
                              MUA NGAY
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ProductCategory;
