import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productValueService from "../../../services/productValue.service";
import categoryService from "../../../services/category.service";
import "./productdemand.scss";
import { useSelector, useDispatch } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { addToCart } from "../../../redux/slice/cartSlice";
//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
const ProductDemand = () => {
  var numeral = require("numeral");
  const userRD = useSelector((state) => state.auth.login?.currentUser);
  let [categoryFilters, setcategoryFilters] = useState(new Set());

  const dispatch = useDispatch();
  const param = useParams();
  let slug = param.slug;
  const [productValue, setProductValue] = useState([]);
  const [categories, setCategoies] = useState([]);
  useEffect(() => {
    init();
  }, [slug]);
  const init = () => {
    productValueService
      .getProductValueCustomer(slug)
      .then((reponse) => {
        setProductValue(reponse.data.productvalue);
      })
      .catch((error) => {
        console.log(error);
      });
    categoryService
      .getAll("ALL")
      .then((response) => {
        setCategoies(response.data.category);
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

  function updateFilters(checked, categoryFilter) {
    if (checked) {
      setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
    }
    if (!checked) {
      setcategoryFilters((prev) => {
        const next = new Set(prev);
        next.delete(categoryFilter);
        return next;
      });
    }
  }

  const filteredProducts =
    categoryFilters.size === 0
      ? productValue
      : productValue.filter((p) => categoryFilters.has(p.product?.catId));
  return (
    <div className="productdemand">
      <h3 className="text-center">
        {productValue[0]?.product?.option?.demandName?.nameValue}
      </h3>
      <div className="row">
        <div className="col-md-2 px-1">
          <div className="checkBox-brand">
            <h6
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: "bolder",
              }}
            >
              Hãng sản xuất
            </h6>
            {categories
              .filter((item) => {
                return item.parentId == "1";
              })
              .map((item, index) => {
                return (
                  <div className="form-check p-0" key={index}>
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={(e) =>
                          updateFilters(e.target.checked, item.id)
                        }
                      />
                      <span>{item.name}</span>
                    </label>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-md-10 px-0">
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              {filteredProducts
                .filter((child) => {
                  return child.product != null;
                })
                .map((child) => {
                  return (
                    <div className="col">
                      <div className="card">
                        <Link
                          to={`/product/productdetail/${child.product?.slugProduct}`}
                        >
                          <div className="p-2 box-zoom-out">
                            <img
                              src={child.product?.imgData.link[0]}
                              className="card-img-top"
                              alt="..."
                            />
                            {child.product?.sale == null ||
                            child.product?.sale.status == 0 ? (
                              <></>
                            ) : (
                              <>
                                <span className="sale px-2">
                                  Giảm giá:{" "}
                                  {numeral(
                                    child.product?.sale.valueSale
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
                              to={`/product/productdetail/${child.product?.slugProduct}`}
                            >
                              <span
                                className="card-text-home"
                                style={{ color: "#000" }}
                              >
                                {child.product?.nameProduct}
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
                                    {child.product?.option.ramName.nameValue}
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
                                    {child.product?.option.hdriveName.nameValue}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </h5>
                          <div className="card-text">
                            <div className="d-flex justify-content-lg-between">
                              {child?.product?.sale == null ? (
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
                                    {numeral(child?.product?.price).format(
                                      "0,0"
                                    )}
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
                                      parseInt(child?.product.price) -
                                        child?.product?.sale?.valueSale
                                    ).format("0,0")}
                                    <u>đ</u>
                                  </span>
                                  <span
                                    style={{
                                      "text-decoration-line": "line-through",
                                    }}
                                  >
                                    {numeral(child?.product.price).format(
                                      "0,0"
                                    )}
                                    <u>đ</u>
                                  </span>
                                </>
                              )}
                            </div>
                            <br />
                            <span>Màn hình: </span>
                            {child.product?.option.screenName.nameValue}
                            <br />
                            <span>CPU: </span>
                            {child.product?.option.cpuName.nameValue},
                            {child.product?.option.cpuGenName.nameValue}
                            <br />
                            <span className="">
                              Card: {child.product?.option.cardName.nameValue}
                            </span>
                          </div>
                          {child.product?.store.number == 0 ? (
                            <><h4 className="text-center btn-light">Đã hết</h4></>
                          ) : (
                            <>
                              <button
                                className="btn btn-success w-100"
                                onClick={() =>
                                  handleAddCart(
                                    child.product.id,
                                    child.product.nameProduct,
                                    child.product.imgData?.link[0],
                                    child.product.sale == null
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

export default ProductDemand;
