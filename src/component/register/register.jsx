import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import productImgService from "../../services/productImg.service";
import Loading from "../loading/Loading";
import { BsCameraFill } from "react-icons/bs";
import { registerUser } from "../../redux/apiRequest";
const Register = () => {
  const [imagesPreview, setImagesPreview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //
  const GENDER = [
    {
      value: "1",
      nameGender: "Nam",
    },
    {
      value: "0",
      nameGender: "Nữ",
    },
    {
      value: "2",
      nameGender: "Khác",
    },
  ];
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("1");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState("T3");
  const [status, setStatus] = useState("1");
  const saveUser = (e) => {
    e.preventDefault();
    //create
    const user_create = {
      name,
      email,
      gender,
      img: imagesPreview,
      password,
      address,
      phone,
      roles,
      createdBy: "VIP",
      status,
    };
    console.log("User new", user_create);
    if (CheckValidate()) {
      registerUser(user_create, dispatch, navigate);
    }
  };
  //Clear
  //Check value
  const CheckValidate = () => {
    let isValue = true;
    const check = {
      "Tên người dùng": name,
      "Tài khoản email": email,
      "Mật khẩu": password,
      "Địa chỉ": address,
      "Số điện thoại": phone,
    };
    console.log("count", check.length);
    for (const item in check) {
      if (!check[item] || check[item] == "") {
        isValue = false;
        alert("Vui lòng chọn:" + item);
        break;
      }
    }
    return isValue;
  };
  const handleFiles = async (e) => {
    setIsLoading(true);
    e.stopPropagation();
    let images = [];
    const files = e.target.files;
    const formData = new FormData();
    for (let i of files) {
      formData.append("file", i);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME
      );
      const reponse = await productImgService.apiUploadImages(formData);
      if (reponse.status === 200) {
        images = [reponse.data.secure_url];
      }
    }
    setIsLoading(false);
    setImagesPreview(images);
  };
  return (
    <div className="register-form-user">
      <div className="login-form">
        <form className="p-3">
          <div>
            <h3 className="text-center">Thêm Mới Tài Khoản</h3>
            <div className="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12 py-2" style={{}}>
                    <label
                      htmlFor="file"
                      className="form-label image-labelU bg-light"
                    >
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <span>
                          <BsCameraFill className="icon-camera" />
                        </span>
                      )}
                    </label>
                    <input
                      hidden
                      id="file"
                      type="file"
                      className="form-control"
                      name="file"
                      onChange={handleFiles}
                    />
                  </div>
                  {/*  */}
                  <div className="col-md-12">
                    {imagesPreview.map((item) => {
                      return (
                        <div key={item} className="img-preview">
                          <img
                            src={item}
                            alt={item}
                            style={{ width: "100%", height: 160 }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="col-md-9 row">
                <div className="col-md-6">
                  <div className="">
                    <label for="exampleInputEmail1" className="form-label">
                      Tên người dùng
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label for="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="name"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label for="exampleInputEmail1" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="name"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/*  */}
                <div className="col-md-6">
                  <div className="">
                    <label for="exampleInputEmail1" className="form-label">
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label for="exampleInputEmail1" className="form-label">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label for="exampleInputEmail1" className="form-label">
                      Giới tính
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="gender"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      {GENDER.map((item) => {
                        return (
                          <option value={item.value}>{item.nameGender}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <button
                    className="btn btn-info w-100 m-1"
                    onClick={(e) => saveUser(e)}
                  >
                    Tạo tài khoản
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="col-12" style={{ backgroundColor: "red" }}>
          {/* {this.state.errMessage} */}
        </div>
      </div>
    </div>
  );
};

export default Register;
