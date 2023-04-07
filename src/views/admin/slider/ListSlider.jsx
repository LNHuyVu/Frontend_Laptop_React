import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
// import "./listcategory.scss";
import sliderService from "../../../services/slider.service";
import { Link } from "react-router-dom";
const ListSlider = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    sliderService
      .getAll("ALL")
      .then((response) => {
        console.log("Get Data OK", response.data);
        setSlider(response.data.slider);
      })
      .catch((error) => {
        console.log("Get Data Failed", error);
      });
  };
  // console.log("category", category);
  //handle status
  const handleStatus = (e, id, status) => {
    e.preventDefault();
    const slider_update = {
      status: status === 1 ? 0 : 1,
      id,
    };
    sliderService
      .update(slider_update)
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
    sliderService
      .remove(id)
      .then((reponse) => {
        // console.log("Delete OK", reponse.data);
        init();
      })
      .catch((error) => {
        console.log("Delete Not OK", error);
      });
  };
  console.log("sldier ALL", slider);
  return (
    <div className="card-body">
      <div className="add-item text-end m-1">
        <Link to="./add-category">
          <button className="btn-info">Thêm danh mục</button>
        </Link>
      </div>
      <table class="table table-bordered" id="myTable">
        <thead>
          <th class="text-center" style={{ width: 20 }}>
            #
          </th>
          <th>Hình</th>
          <th>Tên</th>
          <th>Ngày tạo</th>
          <th>Chức năng</th>
          <th>ID</th>
        </thead>
        <tbody>
          {slider?.map((item) => (
            <tr>
              <td class="text-center">
                <input name="checkid" type="checkbox" />
              </td>
              <td style={{ "max-width": 80 }}>
                <img className="w-100 h-100" src={item.image[0]} alt="" />
              </td>
              <td>{item.name}</td>
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
                  <Link to={"./edit-slider/" + item.id}>
                    <button
                      class="btn btn-warning m-1 text-center"
                      type="button"
                    >
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
                {item.id}--{item.parentId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListSlider;
