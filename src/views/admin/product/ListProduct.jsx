import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
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

const ListProduct = () => {
  const [search, setSearch] = useState("");

  const [key, setKey] = useState("home");
  const [product, setProduct] = useState([]);
  const [productValue, setProductValue] = useState([]);
  useEffect(() => {
    init();
    initValue();
  }, []);
  const initValue = () => {
    productValueService
      .getAll("ALL")
      .then((response) => {
        setProductValue(response.data.productvalue);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log("Value", productValue);
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

  // console.log("product", product);
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
  const handleDelete = (id, proId) => {
    productService
      .remove(id)
      .then((reponse) => {
        console.log("Delete OK", reponse.data);
        init();
      })
      .catch((error) => {
        console.log("Delete Not OK", error);
      });
    productOptionService
      .remove(proId)
      .then((reponse) => {
        console.log("Delete Option OK", reponse.data);
        init();
      })
      .catch((error) => {
        console.log("Delete Not OK", error);
      });
    productImgService
      .remove(proId)
      .then((reponse) => {
        console.log("Delete IMG OK", reponse.data);
        init();
      })
      .catch((error) => {
        console.log("Delete Not OK", error);
      });
    productStoreService
      .remove(proId)
      .then((reponse) => {
        console.log("Delete Store OK", reponse.data);
        init();
      })
      .catch((error) => {
        console.log("Delete Not OK", error);
      });
  };
  const handleDeleteProductValue = (id) => {
    productValueService
      .remove(id)
      .then((reponse) => {
        // console.log("Delete OK", reponse.data);
        init();
      })
      .catch((error) => {
        console.log("Delete Not OK", error);
      });
  };
  //Table colums
  const columns = [
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
      title: "Slug",
      dataIndex: "slugProduct",
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
      <img
        style={{ maxWidth: 80 }}
        className=""
        src={element.imgData.link[0]}
        alt=""
      />
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
          onClick={(e) => handleDelete(element.id)}
          class="btn btn-danger m-1 text-center"
          type="button"
        >
          <FaTrashAlt className="text-white" />
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="card-body">
        <div className="add-item text-end m-1">
          <Link to="./add-product">
            <button className="btn btn-info">Thêm Sản Phẩm </button>
          </Link>
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
            <Table columns={columns} dataSource={product}></Table>
          </Tab>
          <Tab eventKey="profile" title="Sản phẩm khuyến mãi">
            Khuyến mãi
          </Tab>
          <Tab eventKey="contact" title="Cấu hình">
            <table class="table table-bordered" id="myTable">
              <thead>
                <th class="text-center" style={{ width: 20 }}>
                  #
                </th>
                <th>Tên</th>
                <th>Chức năng</th>
                <th>ID</th>
              </thead>
              <tbody>
                {productValue.map((item) => (
                  <tr>
                    <td class="text-center">
                      <input name="checkid" type="checkbox" />
                    </td>
                    <td>{item.nameValue}</td>
                    <td className="text-center action">
                      <div class="d-grid gap-2 d-md-block">
                        <button
                          onClick={(e) => handleDeleteProductValue(item.id)}
                          class="btn btn-danger m-1 text-center"
                          type="button"
                        >
                          <FaTrashAlt className="text-white" />
                        </button>
                      </div>
                    </td>
                    <td class="text-center">
                      {item.id}--{item.parentIdValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ListProduct;
