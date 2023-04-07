import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import postService from "../../../services/post.service";
import { Link } from "react-router-dom";
const ListPost = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    postService
      .getAll("ALL")
      .then((response) => {
        // console.log("Get Data OK", response.data);
        setPost(response.data.post);
      })
      .catch((error) => {
        console.log("Get Data Failed");
      });
  };
  // console.log("category", category);
  //handle status
  const handleStatus = (e, id, status) => {
    e.preventDefault();
    const post_update = {
      status: status === 1 ? 0 : 1,
      id,
    };
    postService
      .update(post_update)
      .then((response) => {
        init();
      })
      .catch((error) => {
        console.log("Songthing went wrong", error);
      });
  };
  //Handle Delete
  const handleDelete = (id) => {
    postService
      .remove(id)
      .then((reponse) => {
        init();
      })
      .catch((error) => {
        console.log("Delete Not OK", error);
      });
  };
  return (
    <div className="card-body">
      <div className="add-item text-end m-1">
        <Link to="./add-post">
         <button className="btn-info">Thêm bài viết</button>
        </Link>
      </div>
      <table class="table table-bordered" id="myTable">
        <thead>
          <th class="text-center" style={{ width: 20 }}>
            #
          </th>
          <th>Tên danh mục</th>
          <th>Slug</th>
          <th>Ngày tạo</th>
          <th>Chức năng</th>
          <th>ID</th>
        </thead>
        <tbody>
          {post?.map((item) => (
            <tr>
              <td class="text-center">
                <input name="checkid" type="checkbox" />
              </td>
              <td>{item.title}</td>
              <td>{item.slug}</td>
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
                  <Link to={"./edit-post/" + item.id}>
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
                {item.id}--{item.topId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPost;
