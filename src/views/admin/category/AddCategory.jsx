import React, { useState } from "react";
import categoryService from "../../../services/category.service";
const AddCategory = () => {
  const slugname = require('slug')
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [parentid, setParentid] = useState("0");
  const [status, setStatus] = useState("0");
  const saveUser = (e) => {
    e.preventDefault();
    //create
    const category_create = {
      name,
      slug:slugname(name),
      parentid,
      status,
    };
    console.log(category_create);
    categoryService
      .create(category_create)
      .then((response) => {
        console.log("Created User Successflly!", response.data);
        // navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log("Songthing went wrong", error);
      });
  };
  return (
    <div>
      <h3 className="text-center">Thêm Mới Danh Mục Sản Phẩm</h3>
      <div className="row">
        <div className="col-md-6">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Tên danh mục
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">
              Chọn cấp cha
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="parentid"
              onChange={(e) => setParentid(e.target.value)}
            >
              {/* <option selected>Parentid</option> */}
              <option value="0">Nomal</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="" class="form-label">
              Trạng thái
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              {/* <option selected>Status</option> */}
              <option value="0">Kiểm duyệt</option>
              <option value="1">Xuất bản</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="text-center">Action</h4>
          <button
            className="btn btn-info w-100 m-1"
            onClick={(e) => saveUser(e)}
          >
            Save
          </button>
          <button className="btn btn-danger w-100 m-1">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
