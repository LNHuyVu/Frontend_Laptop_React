import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productValueService from "../../../services/productValue.service";
const AddProductConfiguration = () => {
  const [nameValue, setNameValue] = useState("");
  const [parentIdValue, setParentIdValue] = useState("");
  const [productValue, setProductValue] = useState([]);
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    productValueService
      .getAll("ALL")
      .then((response) => {
        setProductValue(response.data.productvalue);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(parentIdValue=='')
    setParentIdValue=0;
    const data = {
      nameValue,
      parentIdValue,
    };
    console.log(data)
    productValueService
      .create(data)
      .then((response) => {
        console.log(response.data);
        console.log("Success OK");
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
          {/* <option value="1">CPU</option>
          <option value="2">RAM</option>
          <option value="3">MÀNG HÌNH</option> */}
          <option value='0'>Nomal</option>
          {productValue
            .filter((child) => {
              return child.parentIdValue == 0;
            })
            .map((child, index) => {
              return <option value={child.id}>{child.nameValue}</option>;
            })}
        </select>
      </div>
      <div>
        <button
          className="btn btn-info w-100 mt-3"
          onClick={(e) => handleSubmit(e)}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default AddProductConfiguration;
