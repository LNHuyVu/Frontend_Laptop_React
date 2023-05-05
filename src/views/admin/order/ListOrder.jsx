import React, { useState } from "react";
import { Input, Table } from "antd";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import orderService from "../../../services/order.service";
import { IoIosEye } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./listorder.scss";
const ListOrder = () => {
  let numeral = require("numeral");
  let total_payment = 0;
  const [order, setOrder] = useState([]);
  const [orderId, setOrderId] = useState([]);
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);
  const [contentModal, setContentModal] = useState([]);
  //Id and Status for Order => use Update Status
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  //
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    init();
  }, []);
  const init = () => {
    orderService
      .getAll("ALL")
      .then((response) => {
        setOrder(response.data.order);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Get Data Failed");
      });
  };
  //
  const showOrderDetail = (element, content, id, status) => {
    console.log(element);
    total_payment = 0;
    setId(id);
    setStatus(status);
    setContentModal(content);
    setOrderId(element);
    handleShow();
  };
  //
  const confirm = (e, id, status) => {
    handleStatus(e, id, status);
    handleClose();
  };
  //
  const handleStatus = (e, id, status) => {
    e.preventDefault();
    const update = {
      status: status === 0 ? 1 : 1,
      id,
    };
    orderService
      .update(update)
      .then((response) => {
        init();
      })
      .catch((error) => {
        console.log("Songthing went wrong", error);
      });
  };
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      filteredValue: [search],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.codeOrder).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mã đơn hàng",
      dataIndex: "codeOrder",
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
  for (const element of order) {
    element.action = (
      <div class="d-grid gap-2 d-md-block">
        {element.status === 1 ? (
          <button
            style={{ background: "#00FF00" }}
            className="btn m-1 text-center"
            type="button"
            // onClick={(e) => handleStatus(e, element.id, element.status)}
          >
            <FaCheck />
          </button>
        ) : (
          <button
            style={{ background: "#FFFF00" }}
            className="btn m-1 text-center"
            type="button"
            // onClick={(e) => handleStatus(e, element.id, element.status)}
          >
            <BsThreeDots color="black"/>
          </button>
        )}
        <button
          onClick={() =>
            showOrderDetail(
              element,
              element.orderDetail,
              element.id,
              element.status
            )
          }
          class="btn m-1 text-center border border-primary"
          type="button"
        >
          <IoIosEye size={20} color="blue" />
        </button>
      </div>
    );
  }
  return (
    <div>
      ListOrder
      <div>
        <Input.Search
          style={{ paddingLeft: "20%", paddingRight: "20%", marginBottom: 10 }}
          onSearch={(value) => {
            setSearch(value);
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placehoder="Search here..."
        />
        <Table columns={columns} dataSource={order}></Table>
      </div>
      <Modal show={show} size="xl" onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin chi tiết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="w-100">
            <tr>
              <th>Tên người nhận:</th>
              <td>{orderId.name}</td>
            </tr>
            <tr>
              <th>Số điện thoại:</th>
              <td>{orderId.phone}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{orderId.email}</td>
            </tr>
            <tr>
              <th>Địa chỉ:</th>
              <td>{orderId.address}</td>
            </tr>
            <tr>
              <th>Mã đơn hàng:</th>
              <td>{orderId.codeOrder}</td>
            </tr>
          </table>
          <table className="w-100">
            <tr>
              <th className="border border-3 text-center">Hình ảnh</th>
              <th className="border border-3 text-center">Tên sản phẩm</th>
              <th className="border border-3 text-center">Số lượng</th>
              <th className="border border-3 text-center">Đơn giá</th>
              <th className="border border-3 text-center">Thành tiền</th>
            </tr>
            {contentModal?.map((item) => {
              return (
                <tr>
                  <td
                    className="border border-3 text-center"
                    style={{ maxWidth: 100 }}
                  >
                    <img
                      className="w-100"
                      src={item.product.imgData.link[0]}
                      alt=""
                    />
                  </td>
                  <td className="border border-3 ">
                    {item.product.nameProduct}
                  </td>
                  <td className="border border-3 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-3 text-center">
                    {numeral(item.price).format("0,0")}
                  </td>
                  <td className="border border-3 text-center">
                    {numeral(item.amount).format("0,0")}
                  </td>
                  <td hidden>
                    {(total_payment += parseInt(item.price * item.quantity))}
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colspan="3">
                <b>Tổng: {numeral(total_payment).format("0,0")} vnd</b>
              </td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={(e) => confirm(e, id, status)}>
            Xác nhận
          </Button>
          <Button variant="danger" onClick={() => handleClose()}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ListOrder;
