import React, { useState, useEffect } from "react";
import categoryService from "../../../services/category.service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FcPlus } from "react-icons/fc";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const userRD = useSelector((state) => state.auth.login?.currentUser);

  const navigate = useNavigate();
  const slugname = require("slug");
  const [name, setName] = useState("");
  // const [slug, setSlug] = useState("");
  const [parentId, setParentId] = useState("0");
  const [status, setStatus] = useState("0");
  const saveUser = (e) => {
    e.preventDefault();
    //create
    const category_create = {
      name,
      slug: slugname(name),
      parentId,
      createdBy: String(userRD?.user.id),
      status,
    };
    console.log("Category new", category_create);
    if (CheckValidate) {
      categoryService
        .create(category_create)
        .then((response) => {
          console.log("Created User Successflly!", response.data);
          navigate("/dashboard/category", { replace: true });
        })
        .catch((error) => {
          console.log("Songthing went wrong", error);
        });
    }
  };
  //Clear
  const handleClear = () => {
    setName("");
  };
  //Load parentid
  const [category, setCategory] = useState([]);
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    categoryService
      .getAll("ALL")
      .then((response) => {
        console.log("Get Data OK", response.data);
        setCategory(response.data.category);
      })
      .catch((error) => {
        console.log("Get Data Failed");
      });
  };
  const CheckValidate = () => {
    let isValue = true;
    const check = {
      "Trạng thái": status,
      "Danh mục": parentId,
      "Tên danh mục": name,
    };
    for (const item in check) {
      if (!check[item] || check[item] == "") {
        isValue = false;
        // console.log("Ngu", item);
        alert("Vui lòng nhập:" + item);
        break;
      }
    }
    return isValue;
  };
  return (
    <div>
      <div className="text-center d-flex justify-content-between align-items-center mb-3">
        <div>
          <Link to="/dashboard/category">
            <button className="btn border border-3 border-primary d-flex ">
              <TiArrowBackOutline className="fs-4 text-primary" />
              Quay xe
            </button>
          </Link>
        </div>

        <div>
          <h2>Thêm Danh Mục Sản Phẩm</h2>
        </div>
        <div>
          <button
            onClick={(e) => saveUser(e)}
            className="btn border border-3 border-success d-flex "
          >
            <FcPlus className="fs-4" />
            <span className="Lưu bài viết">Lưu bài viết</span>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Tên danh mục
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="" className="form-label">
              Chọn cấp cha
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="parentid"
              onChange={(e) => setParentId(e.target.value)}
            >
              <option value="0">Nomal</option>
              {category.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label for="" className="form-label">
              Trạng thái
            </label>
            <select
              className="form-select"
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
          <button
            onClick={() => {
              handleClear();
            }}
            className="btn btn-danger w-100 m-1"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
