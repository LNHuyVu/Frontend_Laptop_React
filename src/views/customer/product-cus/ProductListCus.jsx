import React from "react";
import { Link } from "react-router-dom";
const ProductListCus = () => {
  return (
    <div>
      Product
      <Link to="/product/productdetail">
        <button>Nut Detail</button>
      </Link>
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
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
              <div className="col">
                <div className="p-3 border bg-light">Row column</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCus;
