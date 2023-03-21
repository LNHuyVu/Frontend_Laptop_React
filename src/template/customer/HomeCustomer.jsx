import React from "react";
import { Link } from "react-router-dom";
import BannerCustomer from "./BannerCustomer";
import Featuredcategory from "./model-slick/Featuredcategory";
import ProducNew from "./model-slick/ProducNew";
import ProductSale from "./model-slick/ProductSale";
import "./homecustomer.scss";
const HomeCustomer = () => {
  return (
    <div className="">
      <BannerCustomer />
      <div className="container-xxl">
        <ProducNew />
        <div className="text-center">
          <img className="w-100" src="./image/advertisement/QC1.webp" alt="" />
        </div>
        <ProductSale />
        <Featuredcategory />
        <Link to="/product">
          <button>Nut Product</button>
        </Link>
        {/*Start Product by category*/}
        <div className="product-by-category">
          <div className="product-type">
            <h3>Gaming</h3>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="product-type">
            <h3>Đồ họa kỹ thuật</h3>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="product-type">
            <h3>Học tập-văn phòng</h3>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="product-type">
            <h3>Cao cấp</h3>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-0">
                  <div className="card">
                    <img
                      src="product/asus-vivobook-pro-15-k6502z.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        {/*End Product by category*/}
        <div className="product-today">
          <h3>Gợi ý hôm nay</h3>
          <div className="container-xxl row row-cols-3 row-cols-lg-5 g-2 g-lg-3">
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-1 border bg-light">
                <div className="card">
                  <img
                    src="product/asus-vivobook-pro-15-k6502z.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCustomer;
