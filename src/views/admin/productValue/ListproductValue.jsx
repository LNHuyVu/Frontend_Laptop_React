import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import productValueService from "../../../services/productValue.service";
import { useEffect, useState } from "react";
const ListproductValue = () => {
  const [key, setKey] = useState("home");
  const [productValue, setProductValue] = useState([]);
  useEffect(() => {
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
  const handleStatus = (e, id, statusValue) => {
    e.preventDefault();
    const product_update = {
      statusValue: statusValue === 1 ? 0 : 1,
      id,
    };
    productValueService
      .update(product_update)
      .then((response) => {
        console.log("data updated successfuly", response.data);
        // navigate("/", { replace: true });
        initValue();
      })
      .catch((error) => {
        console.log("Songthing went wrong", error);
      });
  };
  //Handle Delete
  const handleDelete = (id) => {
    productValueService
      .remove(id)
      .then((reponse) => {
        console.log("Delete OK", reponse.data);
        initValue();
      })
      .catch((error) => {
        console.log("Delete Not OK", error);
      });
  };
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Cấu hình">
          <table class="table table-bordered" id="myTable">
            <thead>
              <th class="text-center" style={{ width: 20 }}>
                #
              </th>
              <th>Tên cấu hình</th>
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
                      {item.statusValue == 1 ? (
                        <button
                          class="btn btn-success m-1 text-center"
                          type="button"
                          onClick={(e) =>
                            handleStatus(e, item.id, item.statusValue)
                          }
                        >
                          <BsToggleOn className="text-white" />
                        </button>
                      ) : (
                        <button
                          class="btn btn-danger m-1 text-center"
                          type="button"
                          onClick={(e) =>
                            handleStatus(e, item.id, item.statusValue)
                          }
                        >
                          <BsToggleOff className="text-white" />
                        </button>
                      )}
                      <Link to={"./edit-product/" + item.id}>
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
                    {item.id}--{item.parentIdValue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Tab>
        <Tab eventKey="profile" title="Thống kê">
          2
        </Tab>
      </Tabs>
    </div>
  );
};

export default ListproductValue;
