import React, { useState, useEffect } from "react";
import categoryService from "../../../services/category.service";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditCategory = () => {
  const navigate=useNavigate();
  const slugname = require('slug')
  const params = useParams();
  let id = params.id;
  // const navigate = useNavigate();
  // const slugname = require('slug')
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  // const [slug, setSlug] = useState("");
  const [parentId, setParentId] = useState("");
  const [parentidName, setParentidName] = useState("");
  const [status, setStatus] = useState("0");
  const [category, setCategory] = useState([]);
  // const [category, setCategory]=useState([]);
  //Load parentid
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    //GET ID
    categoryService
      .getAll(id)
      .then((response) => {
        setName(response.data.category.name);
        setParentId(response.data.category.parentId);
        setStatus(response.data.category.status);
      })
      .catch((error) => {
        console.log("Get Data Failed ID");
      });
    // //GET OPTION
    categoryService
      .getAll("ALL")
      .then((response) => {
        console.log("Get Data OK", response.data.category);
        setCategory(response.data.category);
      })
      .catch((error) => {
        console.log("Get Data Failed Option");
      });
  };
  
  const handleUpdate = (e) => {
    e.preventDefault();
    const category_update = {
      name,
      slug:slugname(name),
      parentId,
      status,
      id,
    };
    categoryService
      .update(category_update)
      .then((response) => {
        console.log("data updated successfully", response.data);
        navigate("/dashboard/category", { replace: true });
        init();
      })
      .catch((error) => {
        console.log("Songthing went wrong", error);
      });
  };
  // Clear
  const handleClear = () => {
    setName("");
  };

  return (
    <div>
      <h3 className="text-center">Chỉnh sửa Danh Mục Sản Phẩm</h3>
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

            {/* <h1>{parentid}</h1>
            <h1>{parentidName}</h1> */}


            <select
              className="form-select"
              aria-label="Default select example"
              name="parentid"
              onChange={(e) => setParentId(e.target.value)}
            >
              {category
                .filter((child) => {
                  return child.id === parentId;
                })
                .map((child, index) => {
                  return (
                    <option selected value={parentId===0?(0):parentId}>
                      {parentId === 0 ? ("Nomal") : child.name}
                    </option>
                  );
                })}
              <option selected value="0">Nomal</option>
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
              {status==0?(<>
              <option value="0">Kiểm duyệt</option>
              <option value="1">Xuất bản</option>
              </>):(<>
              <option value="1">Xuất bản</option>
              <option value="0">Kiểm duyệt</option>
              </>)}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <h4 className="text-center">Action</h4>
          <button
            className="btn btn-info w-100 m-1"
            onClick={(e) => handleUpdate(e)}
          >
            Save Update
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

export default EditCategory;
