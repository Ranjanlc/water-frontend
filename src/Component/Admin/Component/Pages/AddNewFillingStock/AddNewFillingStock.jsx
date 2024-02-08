import React, { useCallback, useEffect, useState } from "react";
import "./AddNewFillingStock.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  addNewfllingStock,
  deleteNewFllingStock,
  getAllFillingStock,
} from "../../../../../Redux/Features/Products/AddNewFillingStockSlice";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import Loader from "../../../../Loader/Loader";

export const AddNewFillingStock = () => {
  const [productName, setProductName] = useState("");
  const [fillingStockQuantity, setFillingStockQuantity] = useState("");
  const [date, setDate] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [fillingStockQuantityError, setFillingStockQuantityError] =
    useState("");
  const [dateError, setDateError] = useState("");

  const dispatch = useDispatch();
  const { allFllingStockData, loading } = useSelector(
    (state) => state.addFillingStock
  );
  const { allProductData } = useSelector((state) => state.newProduct);
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNewProducts = useCallback(() => {
    dispatch(
      getAllFillingStock((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchNewProducts();
  }, [fetchNewProducts]);

  const handleSubmitStock = () => {
    setProductNameError("");
    setFillingStockQuantityError("");
    setDateError("");

    if (!productName) {
      setProductNameError("Product Name is Required!!");
      return;
    }
    if (!fillingStockQuantity) {
      setFillingStockQuantityError("FillingStockQuantity is Required!!");
      return;
    }
    if (!date) {
      setDateError("Date is Required!!");
      return;
    }

    let payload = {
      productName: productName,
      fillingStockQuantity: fillingStockQuantity,
      date: date,
    };

    dispatch(
      addNewfllingStock({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewProducts();

          setProductNameError("");
          setFillingStockQuantityError("");
          setDateError("");

          setProductName("");
          setFillingStockQuantity("");
          setDate("");
        },
      })
    );
  };

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const fillingStockDeleteHandler = () => {
    dispatch(
      deleteNewFllingStock({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewProducts();
          handleClose();
        },
      })
    );
  };

  const filteredProducts = allFllingStockData?.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <main id="main" className="main">
          <section className="section">
            <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
              <div className="row">
                <div className="col-md-7 col-sm-12 ">
                  <h5 className="">
                    <b>Add New Filling Stock</b>
                  </h5>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="form-group ">
                    <input
                      type="search"
                      className="form-control   "
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <hr style={{ backgroundColor: "black" }} />
              <div className="row mt-3">
                <div className="row mx-1">
                  <div className="col-md-4">
                    <div className="form-group mx-1">
                      <label>Select Product Name</label>
                      <select
                        className="form-select c2 mt-1 "
                        aria-label="Default select example"
                        value={productName}
                        onChange={(e) => {
                          setProductName(e.target.value);
                          setProductNameError("");
                        }}
                      >
                        <option selected="">Select category</option>

                        {allProductData &&
                          allProductData.map((name, i) => (
                            <option value={name.productName} key={i}>
                              {name.productName}
                            </option>
                          ))}
                      </select>
                      {productNameError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {productNameError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mx-1">
                      <label>Filling Stock Quantity</label>
                      <input
                        type="text"
                        className="form-control c2 mt-1"
                        value={fillingStockQuantity}
                        onChange={(e) => {
                          setFillingStockQuantity(e.target.value);
                          setFillingStockQuantityError("");
                        }}
                      />
                      {fillingStockQuantityError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {fillingStockQuantityError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mx-1">
                      <label>Date</label>
                      <input
                        type="date"
                        className="form-control c2 mt-1"
                        onChange={(e) => {
                          setDate(e.target.value);
                          setDateError("");
                        }}
                      />
                      {dateError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {dateError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2 d-flex justify-content-center my-4">
                  <button
                    className="button"
                    style={{ verticalAlign: "middle" }}
                    onClick={handleSubmitStock}
                  >
                    Save
                  </button>
                </div>
              </div>
              <hr />
              <div className="row mt-4">
                <div className="">
                  <div className="table-responsive">
                    <table
                      className="table table-hover"
                      style={{ justifyContent: "center" }}
                    >
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="text-center"
                            style={{
                              paddingLeft: "4rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            SNO
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Product Name
                          </th>
                          {/* <th
                scope="col"
                style={{
                  paddingLeft: "2rem",
                  textAlign: "center",
                  whiteSpace: "nowrap"
                }}
              >
                Price
              </th> */}
                          {/* <th
                scope="col"
                style={{
                  paddingLeft: "3rem",
                  textAlign: "center",
                  whiteSpace: "nowrap"
                }}
              >
                Bottle Type
              </th> */}
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Filling Stock Quantity
                          </th>

                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Date
                          </th>
                          {/* <th
                scope="col"
                style={{
                  paddingLeft: "3rem",
                  textAlign: "center",
                  whiteSpace: "nowrap"
                }}
              >
                Empty Stock
              </th> */}
                          {/* <th
                scope="col"
                style={{
                  paddingLeft: "3rem",
                  textAlign: "center",
                  whiteSpace: "nowrap"
                }}
              >
                Total Stock
              </th> */}

                          <th scope="col " style={{ paddingLeft: "3rem" }}>
                            Action
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {filteredProducts?.length === 0 ? (
                          <td colSpan={8} className="text-center mt-2">
                            No Stock Details Found
                          </td>
                        ) : (
                          <>
                            {filteredProducts?.map((fillingstock, i) => (
                              <tr key={i}>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {i + 1}
                                </td>

                                <td
                                  className="text-center"
                                  style={{
                                    paddingLeft: "3rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {fillingstock.productName}
                                </td>

                                <td
                                  className="text-center"
                                  style={{
                                    paddingLeft: "3rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {fillingstock.fillingStockQuantity}
                                </td>

                                <td
                                  className="text-center"
                                  style={{
                                    paddingLeft: "3rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {fillingstock.date}
                                </td>

                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "3rem" }}
                                >
                                  <div className="parent_div ">
                                    <div
                                      style={{ cursor: "pointer" }}
                                      className="edit_icon"
                                      aria-label="Example icon button with a menu icon"
                                    >
                                      <Link
                                        to={`/admin/editfillingstock/${fillingstock._id}`}
                                        style={{ textDecoration: "none" }}
                                      >
                                        <i className="ri-pencil-line" />
                                      </Link>
                                    </div>
                                    <div
                                      style={{ cursor: "pointer" }}
                                      className="delete_icon"
                                      aria-label="Example icon button with a menu icon"
                                    >
                                      <i
                                        className="ri-delete-bin-6-line "
                                        onClick={() => {
                                          HandleOpenModal(fillingstock?._id);
                                        }}
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Filling Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={fillingStockDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewFillingStock;
