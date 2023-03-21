import React, { useState, useEffect } from "react";
import categoryService from "../../../services/category.service";
import productService from "../../../services/product.service";
// import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const slugname = require("slug");
  const params = useParams();
  let id = params.id;
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
  const [category, setCategory] = useState([]);
  //Load parentid
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    //GET ID
    productService
      .getAll(id)
      .then((response) => {
        console.log(response.data.product);
        setName(response.data.product.name);
        setCatid(response.data.product.catid);
        setTypeid(response.data.product.typeid);
        setImg(response.data.product.img);
        setCpu(response.data.product.cpu);
        setRam(response.data.product.ram);
        setHdrive(response.data.product.hdrive);
        setCard(response.data.product.card);
        setScreen(response.data.product.screen);
        setSystem(response.data.product.system);
        setDetail(response.data.product.detail);
        setNumber(response.data.product.number);
        setSold(response.data.product.sold);
        setPrice(response.data.product.price);
        setPricesale(response.data.product.pricesale);
        setStatussale(response.data.product.statussale);
        setStatus(response.data.product.status);
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
      const product_update = {
          name,
          slug:slugname(name),
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
          id,
      };
      productService
        .update(product_update)
        .then((response) => {
          console.log("data updated successfully", response.data);
          navigate("/dashboard/product", { replace: true });
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
      <h3 className="text-center">Chỉnh Sửa Thông Tin Sản Phẩm</h3>
      <div className="row">
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
                type="text"
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
                // rows="12"
                // cols="60"
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
                {/* <option selected>Parentid</option> */}
                {category
                  .filter((child) => {
                    return child.id == catid;
                  })
                  .map((child, index) => {
                    return (
                      <option selected value={child.id}>
                        {child.name}
                      </option>
                    );
                  })}
                {/*  */}
                <option value="0">Nomal</option>
                {category
                  .filter((child) => {
                    return child.status == 1;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.name}</option>;
                  })}
                {/* {category.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))} */}
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
                {/* <option selected>Parentid</option> */}
                {category
                  .filter((child) => {
                    return child.id == typeid;
                  })
                  .map((child, index) => {
                    return (
                      <option selected value={child.id}>
                        {child.name}
                      </option>
                    );
                  })}
                {/*  */}
                {category
                  .filter((child) => {
                    return child.parentid == 14;
                  })
                  .map((child, index) => {
                    return <option value={child.id}>{child.name}</option>;
                  })}
                {/* {category.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))} */}
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
                {/* <option selected>Status</option> */}
                {status == 0 ? (
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
                {statussale == 0 ? (
                  <>
                    <option value="0">Không</option>
                    <option value="1">Có</option>
                  </>
                ) : (
                  <>
                    <option value="1">Có</option>
                    <option value="0">Không</option>
                  </>
                )}
              </select>
            </div>
          </div>
        </div>
      </div>
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
  );
};

export default EditProduct;
