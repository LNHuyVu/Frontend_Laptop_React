import React, { useState, useEffect } from "react";
import productService from "../../../services/product.service";
import productValueService from "../../../services/productValue.service";
import categoryService from "../../../services/category.service";
import { useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./listproduct.scss";
import { BsCameraFill } from "react-icons/bs";
const AddCategory = () => {
  const [key, setKey] = useState("home");
  const navigate = useNavigate();
  const slugname = require("slug");
  const [name, setName] = useState("");
  const [catid, setCatid] = useState("");
  const [typeid, setTypeid] = useState("");
  const [img, setImg] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [hdrive, setHdrive] = useState("");
  const [card, setCard] = useState("");
  const [screen, setScreen] = useState("");
  const [system, setSystem] = useState("");
  const [detail, setDetail] = useState("");
  const [number, setNumber] = useState("");
  const [sold, setSold] = useState("");
  const [price, setPrice] = useState("");
  const [pricesale, setPricesale] = useState("");
  const [statussale, setStatussale] = useState("");
  const [status, setStatus] = useState("");
  const [productValue, setProductValue]=useState([]);
  const [category, setCategory] = useState([]);
  const saveUser = (e) => {
    e.preventDefault();
    //create
    const product_create = {
      name,
      slug: slugname(name),
      catid,
      typeid,
      img,
      cpu,
      ram,
      hdrive,
      card,
      screen,
      system,
      detail,
      number,
      sold,
      price,
      pricesale,
      statussale,
      status,
    };
    console.log(product_create);
    productService
      .create(product_create)
      .then((response) => {
        console.log("Created User Successflly!", response.data);
        navigate("/dashboard/product", { replace: true });
      })
      .catch((error) => {
        console.log("Songthing went wrong", error);
      });
  };
  //Clear
  const handleClear = () => {
    setName("");
  };
  //Load parentid
  useEffect(() => {
    init();
    initProValue();
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
  const initProValue=()=>{
    productValueService
    .getAll("ALL")
    .then((response) => {
      console.log("Get Data OK", response.data);
      setProductValue(response.data.productvalue);
    })
    .catch((error) => {
      console.log("Get Data Product Value Failed");
    });
  }
  console.log('product',productValue)
  return (
    <div>
      <h3 className="text-center">Thêm Mới Danh Mục Sản Phẩm</h3>
      {/* <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <label for="exampleInputEmail1" className="form-label">
                Tên sản phẩm
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label for="exampleInputEmail1" className="form-label">
                Hình ảnh
              </label>
              <input
                type="file"
                className="form-control"
                name="name"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>

            <div className="col-md-12">
              <label for="exampleInputEmail1" className="form-label">
                Mô tả chi tiết
              </label>
              <textarea
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                id="detail"
                name="detail"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Ram
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                CPU
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={cpu}
                onChange={(e) => setCpu(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Màn hình
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={screen}
                onChange={(e) => setScreen(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Hệ thống (Windown)
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={system}
                onChange={(e) => setSystem(e.target.value)}
              />
            </div>{" "}
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Card đồ họa
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={card}
                onChange={(e) => setCard(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Bộ nhớ
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={hdrive}
                onChange={(e) => setHdrive(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Số lượng
              </label>
              <input
                type="number"
                className="form-control"
                name="name"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Đã bán
              </label>
              <input
                type="number"
                className="form-control"
                name="name"
                value={sold}
                onChange={(e) => setSold(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Giá bán
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Giá bán khuyến mãi
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={pricesale}
                onChange={(e) => setPricesale(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="" className="form-label">
                Chọn cấp cha
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="parentid"
                onChange={(e) => setCatid(e.target.value)}
              >
                <option value="0">Nomal</option>
                {category
                  .filter((child) => {
                    return child.status == 1;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.name}</option>;
                  })}
              </select>
            </div>
            <div className="col-md-6">
              <label for="" className="form-label">
                Loại sản phẩm
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="typyid"
                onChange={(e) => setTypeid(e.target.value)}
              >
                {category
                  .filter((child) => {
                    return child.parentid == 14;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.name}</option>;
                  })}
              </select>
            </div>
            <div className="col-md-6">
              <label for="" className="form-label">
                Trạng thái
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="0">Kiểm duyệt</option>
                <option value="1">Xuất bản</option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="" className="form-label">
                Khuyến mãi
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="statussale"
                onChange={(e) => setStatussale(e.target.value)}
              >
                <option value="0">Không</option>
                <option value="1">Có</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-center">Action</h4>
      <button className="btn btn-info w-100 m-1" onClick={(e) => saveUser(e)}>
        Save
      </button>
      <button
        onClick={() => {
          handleClear();
        }}
        className="btn btn-danger w-100 m-1"
      >
        Clear
      </button> */}
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Tổng quan">
          <div className="row">
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Tên sản phẩm
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="" className="form-label">
                Trạng thái
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="0">Kiểm duyệt</option>
                <option value="1">Xuất bản</option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="" className="form-label">
                Chọn cấp cha
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="parentid"
                onChange={(e) => setCatid(e.target.value)}
              >
                <option value="0">Nomal</option>
                {category
                  .filter((child) => {
                    return child.status == 1 && child.parentid != 0;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.name}</option>;
                  })}
              </select>
            </div>
            <div className="col-md-6">
              <label for="" className="form-label">
                Nhu cầu
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="typyid"
                onChange={(e) => setTypeid(e.target.value)}
              >
                <option selected>Nomal</option>
                {productValue
                  .filter((child) => {
                    return child.parentIdValue == 19;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.nameValue}</option>;
                  })}
              </select>
            </div>
            <div className="col-md-12">
              <label for="exampleInputEmail1" className="form-label">
                Mô tả chi tiết
              </label>
              <textarea
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                id="detail"
                name="detail"
              ></textarea>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Cấu hình">
          <div className="row">
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Ram
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="typyid"
                onChange={(e) => setRam(e.target.value)}
              >
                <option selected>Nomal</option>
                {productValue
                  .filter((child) => {
                    return child.parentIdValue == 4;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.nameValue}</option>;
                  })}
              </select>
            </div>
            <div className="col-md-3">
              <label for="exampleInputEmail1" className="form-label">
                CPU
              </label>
              
              <select
                className="form-select"
                aria-label="Default select example"
                name="typyid"
                onChange={(e) => setCpu(e.target.value)}
              >
                <option selected>Nomal</option>
                {productValue
                  .filter((child) => {
                    return child.parentIdValue == 1;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.nameValue}</option>;
                  })}
              </select>
            </div>
            <div className="col-md-3">
              <label for="exampleInputEmail1" className="form-label">
                Thế hệ CPU
              </label>
              
              <select
                className="form-select"
                aria-label="Default select example"
                name="typyid"
                onChange={(e) => setCpu(e.target.value)}
              >
                <option selected>Nomal</option>
                {productValue
                  .filter((child) => {
                    return child.parentIdValue == 18;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.nameValue}</option>;
                  })}
              </select>
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Màn hình
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="typyid"
                onChange={(e) => setScreen(e.target.value)}
              >
                <option selected>Nomal</option>
                {productValue
                  .filter((child) => {
                    return child.parentIdValue == 12;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.nameValue}</option>;
                  })}
              </select>
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Hệ thống (Windown)
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="typyid"
                onChange={(e) => setSystem(e.target.value)}
              >
                <option selected>Nomal</option>
                {productValue
                  .filter((child) => {
                    return child.parentIdValue == 13;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.nameValue}</option>;
                  })}
              </select>
            </div>{" "}
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Card đồ họa
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="typyid"
                onChange={(e) => setCard(e.target.value)}
              >
                <option selected>Nomal</option>
                {productValue
                  .filter((child) => {
                    return child.parentIdValue == 17;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.nameValue}</option>;
                  })}
              </select>
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail1" className="form-label">
                Bộ nhớ
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="typyid"
                onChange={(e) => setHdrive(e.target.value)}
              >
                <option selected>Nomal</option>
                {productValue
                  .filter((child) => {
                    return child.parentIdValue == 16;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.nameValue}</option>;
                  })}
              </select>
            </div>
          </div>
        </Tab>
        <Tab eventKey="contact" title="Hình ảnh">
          <div className="">
            <label htmlFor="image" className="form-label image-label">
              <BsCameraFill className="icon-camera" />
            </label>
            <input
              hidden
              id="image"
              type="file"
              className="form-control"
              name="image"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <button className="btn btn-info w-100">Lưu</button>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AddCategory;
