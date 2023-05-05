import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productValueService from "../../../services/productValue.service";
import "./productdemand.scss";
import { useSelector, useDispatch } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { addToCart } from "../../../redux/slice/cartSlice";
const ProductDemand = () => {
  var numeral = require("numeral");
  const userRD = useSelector((state) => state.auth.login?.currentUser);

  const dispatch = useDispatch();
  const param = useParams();
  let slug = param.slug;
  const [productValue, setProductValue] = useState([]);
  useEffect(() => {
    init();
  }, [slug]);
  const init = () => {
    productValueService
      .getProductValueCustomer(slug)
      .then((reponse) => {
        setProductValue(reponse.data.productvalue);
        console.log(reponse.data);
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
      dispatch(addToCart({ id, title, image, price, proId, userid, number}));
      alert("hi");
    }
  };
  return (
    <div className="productdemand">
      Product {slug}
      <div className="row">
        <div className="col-md-2 p-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Default checked radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label className="form-check-label" for="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Default switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked
            />
            <label className="form-check-label" for="flexSwitchCheckChecked">
              Checked switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDisabled"
              disabled
            />
            <label className="form-check-label" for="flexSwitchCheckDisabled">
              Disabled switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckCheckedDisabled"
              checked
              disabled
            />
            <label
              className="form-check-label"
              for="flexSwitchCheckCheckedDisabled"
            >
              Disabled checked switch checkbox input
            </label>
          </div>
        </div>
        <div className="col-md-10">
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              {productValue.map((child) => {
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
                          {child.product?.sale == null ? (
                            <></>
                          ) : (
                            <>
                              <span className="sale px-2">
                                Giảm giá:{" "}
                                {numeral(child.product?.sale.valueSale).format("0,0")}đ
                              </span>
                            </>
                          )}
                        </div>
                      </Link>

                      <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: "100%" }}>
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
                                  Ram {child.product?.option.ramName.nameValue}
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
                                  {numeral(child?.product?.price).format("0,0")}
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
                                  {numeral(child?.product.price).format("0,0")}
                                  <u>đ</u>
                                </span>
                              </>
                            )}
                          </div>
                          <br />
                          <span>Màng hình: </span>
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

                              child.product.store.number,

                            )
                          }
                        >
                          <TiShoppingCart size={30} />
                          MUA NGAY
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDemand;
