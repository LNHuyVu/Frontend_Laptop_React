import React, { useEffect, useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import postService from "../../../services/post.service";
import { Link } from "react-router-dom";
import { Input, Table } from "antd";
import { FcPlus } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ListPost = () => {
  const [search, setSearch] = useState("");

  const [post, setPost] = useState([]);
  //
  const [deleteId, setDeleteId] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    postService
      .getAll("ALL")
      .then((response) => {
        console.log("Get Data OK", response.data);
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
  const handleDeleteClose = (value) => {
    handleClose();
    if (value == true) {
      postService
        .remove(deleteId)
        .then((reponse) => {
          init();
        })
        .catch((error) => {
          console.log("Delete Not OK", error);
        });
      setDeleteId("");
    }
  };
  const handleDeleteOpen = (id) => {
    handleShow();
    setDeleteId(id);
  };
  //Table colums
  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "img",
    },
    {
      title: "Tên bài viết",
      dataIndex: "title",
      filteredValue: [search],
      onFilter: (value, record) => {
        return String(record.title).toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Slug",
      dataIndex: "slug",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
    },
    ,
    {
      title: "Chức năng",
      dataIndex: "action",
    },
    {
      title: "Id",
      dataIndex: "id",
    },
  ];
  for (const element of post) {
    element.img = (
      <img style={{ maxWidth: 80 }} className="" src={element.image} alt="" />
    );
    element.action = (
      <div class="d-grid gap-2 d-md-block">
        {element.status === 1 ? (
          <button
            class="btn btn-success m-1 text-center"
            type="button"
            onClick={(e) => handleStatus(e, element.id, element.status)}
          >
            <BsToggleOn className="text-white" />
          </button>
        ) : (
          <button
            class="btn btn-danger m-1 text-center"
            type="button"
            onClick={(e) => handleStatus(e, element.id, element.status)}
          >
            <BsToggleOff className="text-white" />
          </button>
        )}
        <Link to={"./edit-post/" + element.id}>
          <button class="btn btn-warning m-1 text-center" type="button">
            <AiFillEdit className="text-white" />
          </button>
        </Link>
        <button
          onClick={(e) => handleDeleteOpen(element.id)}
          class="btn btn-danger m-1 text-center"
          type="button"
        >
          <FaTrashAlt className="text-white" />
        </button>
      </div>
    );
  }
  return (
    <div className="card-body">
      <div className="text-center d-flex justify-content-between align-items-center mb-3">
        <div></div>

        <div>
          <h2>Bài viết</h2>
        </div>
        <div>
          <Link to="./add-post">
            <button className="btn border border-3 border-success d-flex ">
              <FcPlus className="fs-4" />
              <span className="">Thêm mới</span>
            </button>
          </Link>
        </div>
      </div>
      <Input.Search
        style={{
          paddingLeft: "20%",
          paddingRight: "20%",
          marginBottom: 10,
        }}
        onSearch={(value) => {
          setSearch(value);
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placehoder="Search here..."
      />
      <Table columns={columns} dataSource={post}></Table>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc chắn xóa phần tử này!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleDeleteClose(true)}>
            Đồng ý
          </Button>
          <Button variant="danger" onClick={() => handleDeleteClose(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ListPost;
