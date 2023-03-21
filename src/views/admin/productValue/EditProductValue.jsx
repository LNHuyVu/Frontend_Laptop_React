import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productValueService from "../../../services/productValue.service";
const EditProductValue = () => {
  const params = useParams();
  let id = params.id;
  const navigate = useNavigate();
  const [nameValue, setNameValue] = useState("");
  const [parentIdValue, setParentIdValue] = useState("0");
  const [statusValue, setStatusValue] = useState("0");
  const [productValue, setProductValue] = useState([]);
  useEffect(() => {
    init();
    initParentId();
  }, []);
  const init = () => {
    productValueService
      .getAll(id)
      .then((response) => {
        setNameValue(response.data.productvalue.nameValue);
        setParentIdValue(response.data.productvalue.parentIdValue);
        setStatusValue(response.data.productvalue.statusValue);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const initParentId = () => {
    productValueService
      .getAll("ALL")
      .then((response) => {
        setProductValue(response.data.productvalue);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(nameValue, parentIdValue, statusValue);
  console.log(productValue);
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(parentIdValue);
    // if (parentIdValue == "") setParentIdValue(0);
    const data_update = {
      id,
      nameValue,
      parentIdValue,
      statusValue,
    };
    console.log(data_update);
    productValueService
      .update(data_update)
      .then((response) => {
        console.log(response.data);
        console.log("Success OK");
        navigate("/dashboard/product-configuration", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   console.log('productValue:',productValue)
  return (
    <div className="row">
      <div className="col-md-6">
        <label for="exampleInputEmail1" className="form-label">
          Tên cấu hình
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <label for="" className="form-label">
          Cấp cha
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="parentIdValue"
          onChange={(e) => setParentIdValue(e.target.value)}
        >
          {productValue
            .filter((child) => {
              return child.id === parentIdValue;
            })
            .map((child, index) => {
              return (
                <option
                  selected
                  value={parentIdValue === 0 ? 0 : parentIdValue}
                >
                  {parentIdValue === 0 ? "Nomal" : child.nameValue}
                </option>
              );
            })}
          <option selected value="0">
            Nomal
          </option>
          {productValue
            .filter((child) => {
              return child.parentIdValue == 0;
            })
            .map((child, index) => {
              return <option value={child.id}>{child.nameValue}</option>;
            })}
        </select>
      </div>
      <div className="col-md-12">
        <label for="" className="form-label">
          Trạng thái
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="status"
          onChange={(e) => setStatusValue(e.target.value)}
        >
          {/* <option selected>Status</option> */}
          {statusValue == 0 ? (
            <>
              <option value="0">Kiểm duyệt</option>
              <option value="1">Xuất bản</option>
            </>
          ) : (
            <>
              <option value="1">Xuất bản</option>
              <option value="0">Kiểm duyệt</option>
            </>
          )}
        </select>
      </div>
      <div>
        <button
          className="btn btn-info w-100 mt-3"
          onClick={(e) => handleUpdate(e)}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default EditProductValue;
