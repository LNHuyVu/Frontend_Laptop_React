import React, { useEffect, useState } from "react";
import cartService from "../../../services/cart.service";
import "./cart.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  removeToCart,
} from "../../../redux/slice/cartSlice";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartRD = useSelector((state) => state.cart?.cart);
  const userRD = useSelector((state) => state.auth.login?.currentUser);
  // console.log(userRD)
  useEffect(() => {
    if (!userRD) {
      navigate("/login");
    }
  }, []);
  var numeral = require("numeral");

  let totalQuantity = 0;
  let totalPrice = 0;
  cartRD?.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  //
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [deleteId, setDeleteId] = useState("");
  const test = (id) => {
    handleShow();
    setDeleteId(id);
  };
  const checkDelete = (value) => {
    handleClose();
    if (value == true) {
      setDeleteId("")
    }
  };
  return (
    <div className="container py-2">
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => checkDelete(true)}>
            Đồng ý
          </Button>
          <Button variant="secondary" onClick={() => checkDelete(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <button className="btn" onClick={() => test(1)}>
        Test
      </button>
      <div className="row">
        <div className="col-md-8 ">
          <div className="content-cart p-2 border border-2 rounded-5">
            <h3 className="text-center">Giỏ hàng</h3>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {/* item.product.nameProduct */}
                {cartRD
                  ?.filter((item) => {
                    return item.userid === userRD?.user.id;
                  })
                  .map((item) => (
                    <tr style={{ justifyItems: "center" }}>
                      <td style={{ maxWidth: 100 }}>
                        <img className="w-100" src={item.image} alt="" />
                      </td>
                      <td style={{ maxWidth: 200 }}>{item.title}</td>
                      <td style={{ maxWidth: 130 }}>
                        <div className="d-flex justify-content-center mb-4">
                          <button
                            type="button"
                            class="btn btn-danger text-white"
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            <RiSubtractFill style={{ color: "#fff" }} />
                          </button>
                          <input
                            readOnly
                            style={{ maxWidth: 100 }}
                            type="text"
                            value={item.quantity}
                            className="mx-1 form-control text-center"
                          />
                          <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            <AiOutlinePlus />
                          </button>
                          <button
                            className="text-center border btn mx-2 text-danger"
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            <AiOutlineClose />
                          </button>
                        </div>
                        <span className="p-1 rounded-pill bg-light">
                          Giá: {numeral(item.price).format("0,0")} x1
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* {cartRD.lenght==0?(<>1</>):(<>Tiếp tục mua hàng</>)} */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-2 border border-2 rounded-5">
            <h3 className="text-center">Tóm tắc</h3>
            <table>
              <tr>
                <th>Số lượng:</th>
                <td className="px-3">{totalQuantity}</td>
              </tr>
              <tr>
                <th>Thành tiền:</th>
                <td className="px-3">{numeral(totalPrice).format("0,0")} đ</td>
              </tr>
              <tr>
                <th>Thanh toán(VAT 0%):</th>
                <td className="px-3">{numeral(totalPrice).format("0,0")} đ</td>
              </tr>
            </table>
            <div className="text-center m-3">
              {totalPrice > 0 ? (
                <>
                  <Link to="/order">
                    <button
                      className="btn btn-primary"
                      style={{ width: "80%" }}
                    >
                      Đặt hàng
                    </button>
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
