import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Input, Table } from "antd";
import { IoIosEye } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import userService from "../../../services/user.service";
const User = () => {
  const userRD = useSelector((state) => state.auth.login?.currentUser);
  const [user, setUser] = useState([]);
  //Order
  let numeral = require("numeral");
  let total_payment = 0;
  const [order, setOrder] = useState([]);
  const [orderId, setOrderId] = useState([]);
  const [search, setSearch] = useState("");

  const [show, setShow] = useState(false);
  const [contentModal, setContentModal] = useState([]);
  //
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    userService
      .getAll(userRD.user.id, userRD)
      .then((response) => {
        setUser(response.data.users);
        setOrder(response.data.users.cart);
        console.log("User", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Order Handle
  const showOrderDetail = (element, content) => {
    total_payment = 0;
    setContentModal(content);
    setOrderId(element);
    handleShow();
  };
  //
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
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Chức năng",
      dataIndex: "action",
    },
  ];
  for (const element of order) {
    element.action = (
      <div class="d-grid gap-2 d-md-block">
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
          Show
          <IoIosEye size={20} color="blue" />
        </button>
      </div>
    );
  }
  return (
    <div className="user container">
      User{userRD.user.name}
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} className="bg-light">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tài khoản của tôi</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Đơn hàng</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Thông báo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Kho Voucher</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div class="row">
                    <div class="col-8">
                      <div className="shadow-lg p-3 mb-5 bg-body rounded rounded-3">
                        <div style={{ borderBottom: "2px solid  black" }}>
                          <h4>Hồ sơ của tôi</h4>
                          <h6>Quản lí thông tin hồ sơ để bảo mật tài khoản</h6>
                        </div>
                        <table style={{ width: "100%" }}>
                          <tr>
                            <th>Name:</th>
                            <td>{user.name}</td>
                          </tr>
                          <tr>
                            <th>Email:</th>
                            <td>{user.email}</td>
                          </tr>
                          <tr>
                            <th>Telephone:</th>
                            <td>{user.phone}</td>
                          </tr>
                          <tr>
                            <th>Address:</th>
                            <td>{user.address}</td>
                          </tr>
                          <tr>
                            <th>Gender:</th>
                            {user.gender == 1 ? <td>Nam</td> : <td>Nữ</td>}
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class="col-4">
                      <div className="shadow-lg p-3 mb-5 bg-body rounded rounded-3">
                        <img
                          className="w-100 rounded rounded-3"
                          src={user.img}
                          alt=""
                        />
                        <h5 className="text-center">
                          <b>{user.name}</b>
                        </h5>
                        <h5 className="text-center">
                          <b>{user.address}</b>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>
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
                    <Table columns={columns} dataSource={order}></Table>
                  </div>
                  <Modal
                    show={show}
                    size="xl"
                    onHide={handleClose}
                    animation={false}
                  >
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
                          <th className="border border-3 text-center">
                            Hình ảnh
                          </th>
                          <th className="border border-3 text-center">
                            Tên sản phẩm
                          </th>
                          <th className="border border-3 text-center">
                            Số lượng
                          </th>
                          <th className="border border-3 text-center">
                            Đơn giá
                          </th>
                          <th className="border border-3 text-center">
                            Thành tiền
                          </th>
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
                                {
                                  (total_payment += parseInt(
                                    item.price * item.quantity
                                  ))
                                }
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td colspan="3">
                            <b>
                              Tổng: {numeral(total_payment).format("0,0")} vnd
                            </b>
                          </td>
                        </tr>
                      </table>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={() => handleClose()}>
                        Cancel
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Tab.Pane>
                <Tab.Pane eventKey="third">Chưa có thông báo mới</Tab.Pane>
                <Tab.Pane eventKey="fourth">Chưa có voucher mới</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default User;
