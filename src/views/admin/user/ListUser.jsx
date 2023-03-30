import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import "./listuser.scss";
import { Link } from "react-router-dom";
import userService from "../../../services/user.service";
const ListUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    userService
      .getAll("ALL")
      .then((response) => {
        console.log("Get Data OK", response.data);
        setUser(response.data.users);
      })
      .catch((error) => {
        console.log("Get Data Failed");
      });
  };
  // console.log("category", category);
  //handle status
  const handleStatus = (e, id, status) => {
    e.preventDefault();
    const user_update = {
      status: status === 1 ? 0 : 1,
      id,
    };
    userService
      .update(user_update)
      .then((response) => {
        // console.log("data updated successfully", response.data);
        // navigate("/", { replace: true });
        init();
      })
      .catch((error) => {
        console.log("Songthing went wrong", error);
      });
  };
  //Handle Delete
  const handleDelete = (id) => {
    userService
      .remove(id)
      .then((reponse) => {
        // console.log("Delete OK", reponse.data);
        init();
      })
      .catch((error) => {
        console.log("Delete Not OK", error);
      });
  };
  return (
    <div className="card-body">
      <div className="add-item text-end m-1">
        <Link to="./add-user">
         <button className="btn-info btn">Thêm tài khoản</button>
        </Link>
      </div>
      <table class="table table-bordered" id="myTable">
        <thead>
          <th class="text-center" style={{ width: 20 }}>
            #
          </th>
          <th>Hình ảnh</th>
          <th>Tên tài khoản</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Ngày tạo</th>
          <th>Chức năng</th>
          <th>ID</th>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr>
              <td class="text-center">
                <input name="checkid" type="checkbox" />
              </td>
              <td style={{maxWidth: 100}}><img className="w-100 h-100" src={item.img[0]} alt="" /></td>
              <td>{item.name}</td>
              <td style={{maxWidth: 140}}><span>{item.email}</span></td>
              <td>{item.address}</td>
              <td class="text-center date">{item.createdAt}</td>
              <td className="text-center action">
                <div class="d-grid gap-2 d-md-block">
                  {item.status === 1 ? (
                    <button
                      class="btn btn-success m-1 text-center"
                      type="button"
                      onClick={(e) => handleStatus(e, item.id, item.status)}
                    >
                      <BsToggleOn className="text-white" />
                    </button>
                  ) : (
                    <button
                      class="btn btn-danger m-1 text-center"
                      type="button"
                      onClick={(e) => handleStatus(e, item.id, item.status)}
                    >
                      <BsToggleOff className="text-white" />
                    </button>
                  )}
                  <Link to={"./edit-user/" + item.id}>
                    <button class="btn btn-warning m-1 text-center" type="button">
                      <AiFillEdit className="text-white" />
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleDelete(item.id)}
                    class="btn btn-danger m-1 text-center"
                    type="button"
                  >
                    <FaTrashAlt className="text-white" />
                  </button>
                </div>
              </td>
              <td class="text-center">
                {item.id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
