import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsToggleOff, BsToggleOn, BsFillStarFill } from "react-icons/bs";
import { GiStarFormation } from "react-icons/gi";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import "./listproduct.scss";
import productService from "../../../services/product.service";
import productImgService from "../../../services/productImg.service";
import productOptionService from "../../../services/productOption.service";
import productStoreService from "../../../services/productStore.service";
import productValueService from "../../../services/productValue.service";
import { Link } from "react-router-dom";
import { Input, Table } from "antd";
import { FcPlus } from "react-icons/fc";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListProductSale from "../productSale/ListProductSale";
import productSaleService from "../../../services/productSale.service";
const ListProduct = () => {
  const userRD = useSelector((state) => state.auth.login?.currentUser);

  const [search, setSearch] = useState("");

  const [key, setKey] = useState("home");
  const [product, setProduct] = useState([]);

  const [deleteId, setDeleteId] = useState("");
  const [deleteProId, setDeleteProId] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAll("ALL")
      .then((response) => {
        console.log("Get Product OK", response.data);
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.log("Get Product Failed");
      });
  };
  //
  const handleClick = () => {
    console.log("onClick được gọi");
  };

  //handle status
  const handleStatus = (e, id, status) => {
    e.preventDefault();
    const product_update = {
      status: status === 1 ? 0 : 1,
      id,
    };
    productService
      .update(product_update)
      .then((response) => {
        // console.log("data updated successfuly", response.data);
        // navigate("/", { replace: true });
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
      productService
        .remove(deleteId)
        .then((reponse) => {
          init();
        })
        .catch((error) => {
          console.log("Delete Not OK", error);
        });
      productOptionService
        .remove(deleteProId)
        .then((reponse) => {
          init();
        })
        .catch((error) => {
          console.log("Delete Not OK", error);
        });
      productImgService
        .remove(deleteProId)
        .then((reponse) => {
          init();
        })
        .catch((error) => {});
      productStoreService
        .remove(deleteProId)
        .then((reponse) => {
          init();
        })
        .catch((error) => {
          console.log("Delete Not OK", error);
        });
      setDeleteId("");
      setDeleteProId("");
    }
  };
  const handleDeleteOpen = (id, proId) => {
    handleShow();
    setDeleteId(id);
    setDeleteProId(proId);
  };
  //ADD Product Sale
  const handleAddSale = (e, id) => {
    e.preventDefault();
    const sale = {
      saleId: id,
      createdBy: userRD.user.id,
      status: 0,
    };
    productSaleService
      .create(sale)
      .then((response) => {
        console.log("Sale OK", response.data);
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Table colums
  const columnsProduct = [
    {
      title: "Hình ảnh",
      dataIndex: "image",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "nameProduct",
      filteredValue: [search],
      onFilter: (value, record) => {
        return String(record.nameProduct)
          .toLowerCase()
          .includes(value.toLowerCase());
      },
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
  for (const element of product) {
    element.image = (
      <div className="d-flex">
        {element.sale == null ? (
          <>
            <GiStarFormation size="30" />
          </>
        ) : (
          <>
            <GiStarFormation size="30" color="red" />
          </>
        )}
        <img
          style={{ maxWidth: 80 }}
          className=""
          src={element.imgData.link[0]}
          alt=""
        />
      </div>
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
        <Link to={"./edit-product/" + element.id}>
          <button class="btn btn-warning m-1 text-center" type="button">
            <AiFillEdit className="text-white" />
          </button>
        </Link>
        <button
          onClick={(e) => handleDeleteOpen(element.id, element.proId)}
          class="btn btn-danger m-1 text-center"
          type="button"
        >
          <FaTrashAlt className="text-white" />
        </button>
        <div className="product-more">
          <ul className="">
            <li>
              <button class="btn btn-info m-1 text-center" type="button">
                <MdOutlineMoreHoriz className="text-white" />
              </button>
              <ul className="rounded-3 bg-white shadow-lg p-3 mb-5 bg-body rounded">
                <li>Xem chi tiết</li>
                <li onClick={(e) => handleAddSale(e, element.id)}>
                  Tạo khuyến mãi
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="card-body">
        <div className="text-center d-flex justify-content-between align-items-center mb-3">
          <div></div>
          <div>
            <h2>Danh Mục Sản Phẩm</h2>
          </div>
          <div>
            <Link to="./add-product">
              <button className="btn border border-3 border-success d-flex ">
                <FcPlus className="fs-4" />
                <span className="">Thêm mới</span>
              </button>
            </Link>
          </div>
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="Tất cả sản phẩm">
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
            <Table columns={columnsProduct} dataSource={product}></Table>
          </Tab>
          <Tab eventKey="profile" title="Sản phẩm khuyến mãi">
            <ListProductSale click="click" />
          </Tab>
        </Tabs>
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
    </>
  );
};

export default ListProduct;
