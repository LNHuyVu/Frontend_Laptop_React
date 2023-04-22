import React, { useEffect, useState } from "react";
import "./search.scss";
import { useParams } from "react-router-dom";
import productService from "../../../services/product.service";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { addToCart } from "../../../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Search = () => {
  const userRD = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  var numeral = require("numeral");
  const param = useParams();
  let slug = param.slug;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    init();
  }, [slug]);
  const init = () => {
    productService
      .searchProduct(slug)
      .then((reponse) => {
        setProduct(reponse.data.product);
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
    }
  };
  return (
    <div className="search">
      Search {slug}
      <div>
        <div className="container">
          {product.length == 0 ? (
            <>Không tìm thấy sản phẩm phù hợp</>
          ) : (
            <>
              <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                {product.map((item) => {
                  return (
                    <div className="col">
                      <div className="card">
                        <Link
                          to={`/product/productdetail/${item?.slugProduct}`}
                        >
                          <div className="p-2 box-zoom-out">
                            <img
                              src={item?.imgData.link[0]}
                              className="card-img-top"
                              alt="..."
                            />
                          </div>
                        </Link>

                        <div className="card-body">
                          <h5
                            className="card-title"
                            style={{ fontSize: "100%" }}
                          >
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
                                <u>đ</u>
                              </span>
                            </b>
                            <br />
                            {item?.option?.screenName ? "Màng hình: " : <></>}
                            {item?.option?.screenName.nameValue}
                            <br />
                            {item?.option?.cpuName ? "CPU: " : <></>}
                            {item?.option?.cpuName.nameValue}
                            {item?.option?.cpuName ? ", " : <></>}
                            {item?.option?.cpuGenName.nameValue}
                            <br />
                            <span className="card-text">
                              {item?.option?.cardName ? "Card:" : <></>}

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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
