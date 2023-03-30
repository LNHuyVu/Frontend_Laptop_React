import React, { useState, useEffect } from "react";
import categoryService from "../../../services/category.service";
import { useNavigate } from "react-router-dom";
const AddCategory = () => {
  const navigate = useNavigate();
  const slugname = require('slug')
  const [name, setName] = useState("");
  // const [slug, setSlug] = useState("");
  const [parentId, setParentId] = useState("0");
  const [createdBy, setCreatedBy] = useState("1");
  const [status, setStatus] = useState("0");
  const saveUser = (e) => {
    e.preventDefault();
    //create
    const category_create = {
      name,
      slug:slugname(name),
      parentId,
      createdBy,
      status,
    };
    console.log('Category new',category_create);
    categoryService
      .create(category_create)
      .then((response) => {
        console.log("Created User Successflly!", response.data);
        navigate("/dashboard/category", { replace: true });
      })
      .catch((error) => {
        console.log("Songthing went wrong", error);
      });
  };
  //Clear
  const handleClear=()=>{
    setName('');
  }
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
  console.log("category", category);
  return (
    <div>
      <h3 className="text-center">Thêm Mới Danh Mục Sản Phẩm</h3>
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
              {category.map(item=>(
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
          <button onClick={()=>{handleClear()}} className="btn btn-danger w-100 m-1">Clear</button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
