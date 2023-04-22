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
const ProductCategory = () => {
  const userRD = useSelector((state) => state.auth.login?.currentUser);

  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  var numeral = require("numeral");
  const param = useParams();
  let slug = param.slug;
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
            console.log(reponse.data.product);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddCart = (id, title, image, price) => {
    if (!userRD) {
      alert("vui lòng đăng nhập");
    } else {
      let userid = userRD.user.id;
      dispatch(addToCart({ id, title, image, price, userid }));
      alert("hi");
    }
  };
  return (
    <div className="product-category">
      <div>ProductCategory</div>
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
              {product.map((item) => {
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
                          {item?.option?.screenName ? "Màng hình: " : ""}
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
                        </p>
                        <button
                          className="btn btn-success w-100"
                          onClick={() =>
                            handleAddCart(
                              item.id,
                              item.nameProduct,
                              item?.imgData.link[0],
                              item.price
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

export default ProductCategory;
