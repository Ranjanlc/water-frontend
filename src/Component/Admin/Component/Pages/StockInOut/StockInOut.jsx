import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import {
  addStockInOut,
  getAllStockInOut,
  deleteStockInOut,
} from "../../../../../Redux/Features/Products/StockInOutSlice";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Loader from "../../../../Loader/Loader";

export const StockInOut = () => {
  const [date, setDate] = useState("");
  const [salesman, setSalesman] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const [remark, setRemark] = useState("");
  const [dateError, setDateError] = useState("");
  const [salesmanError, setSalesmanError] = useState("");
  const [productError, setProductError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [stockStatusError, setStockStatusError] = useState("");
  const [remarkError, setRemarkError] = useState("");

  const dispatch = useDispatch();
  const { allStockInOutData, loading } = useSelector(
    (state) => state.stockInOut
  );

  const { enqueueSnackbar } = useSnackbar();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStockInOut = useCallback(() => {
    dispatch(
      getAllStockInOut((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchStockInOut();
  }, [fetchStockInOut]);

  const handleSubmitStockInOut = () => {
    setDateError("");
    setSalesmanError("");
    setProductError("");
    setQuantityError("");
    setStockStatusError("");
    setRemarkError("");

    if (!date) {
      setDateError("Date is Required!!");
      return;
    }
    if (!salesman) {
      setSalesmanError("Salesman is Required!!");
      return;
    }
    if (!product) {
      setProductError("Product Type is Required!!");
      return;
    }
    if (!quantity) {
      setQuantityError("Quantity is Required!!");
      return;
    }
    if (!stockStatus) {
      setStockStatusError("Stock Status is Required!!");
      return;
    }
    if (!remark) {
      setRemarkError("Remark is Required!!");
      return;
    }

    let payload = {
      date: date,
      salesman: salesman,
      product: product,
      qty: quantity,
      stockStatus: stockStatus,
      remarks: remark,
    };

    dispatch(
      addStockInOut({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchStockInOut();
          setDate("");
          setSalesman("");
          setProduct("");
          setQuantity("");
          setStockStatus("");
          setRemark("");
          setDateError("");
          setSalesmanError("");
          setProductError("");
          setQuantityError("");
          setStockStatusError("");
          setRemarkError("");
        },
      })
    );
  };

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const stockDeleteHandler = () => {
    dispatch(
      deleteStockInOut({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchStockInOut();
          handleClose();
        },
      })
    );
  };

  const filteredStockInOut = allStockInOutData?.filter((stockInOut) =>
    stockInOut.product.toLowerCase().includes(searchTerm.toLowerCase())
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
                    <b>Stock In/Out</b>
                  </h5>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="form-group ">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-1 col-sm-12">
                  <button
                    type="button"
                    className="btn btn-danger 
                py-1"
                  >
                    Search
                  </button>
                </div>
              </div>
              <hr style={{ backgroundColor: "black" }} />
              <div className="row mt-3">
                <div className="row mx-1">
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label>Date</label>
                      <input
                        type="date"
                        className="form-control c2"
                        placeholder="Enter Date Here"
                        value={date}
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
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Salesman</label>
                      <select
                        className="form-select c2"
                        aria-label="Default select example"
                        value={salesman}
                        onChange={(e) => {
                          setSalesman(e.target.value);
                          setSalesmanError("");
                        }}
                      >
                        <option selected="">Select Salesman</option>
                        <option>Deji</option>
                        <option>AAAA</option>
                        <option>SSSS</option>
                      </select>
                      {salesmanError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {salesmanError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label>Product</label>
                      <select
                        className="form-select c2"
                        aria-label="Default select example"
                        value={product}
                        onChange={(e) => {
                          setProduct(e.target.value);
                          setProductError("");
                        }}
                      >
                        <option selected="">Select</option>
                        <option>Disposal Bottel</option>
                        <option>20 Gallon Water Bottles</option>
                        <option>Ice Product</option>
                      </select>
                      {productError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {productError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row mt-1 mx-1">
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label>Qty</label>
                      <input
                        type="text"
                        className="form-control c2"
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                          setQuantityError("");
                        }}
                      />
                      {quantityError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {quantityError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Stock Status</label>
                      <select
                        className="form-select c2"
                        aria-label="Default select example"
                        value={stockStatus}
                        onChange={(e) => {
                          setStockStatus(e.target.value);
                          setStockStatusError("");
                        }}
                      >
                        <option selected="">Select</option>
                        <option>STOCK IN (Fill)</option>
                        <option>STOCK OUT (Fill)</option>
                        <option>STOCK IN (Empty)</option>
                        <option>STOCK OUT (Empty)</option>
                      </select>
                      {stockStatusError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {stockStatusError}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group ">
                      <label>Remarks</label>
                      <input
                        type="text"
                        className="form-control c2"
                        value={remark}
                        onChange={(e) => {
                          setRemark(e.target.value);
                          setRemarkError("");
                        }}
                      />
                      {remarkError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {remarkError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2 d-flex justify-content-center my-4">
                  <button
                    className="button"
                    style={{ verticalAlign: "middle" }}
                    onClick={handleSubmitStockInOut}
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>

              <div className="row mt-3">
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
                              paddingLeft: "3rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            S.No.
                          </th>
                          <th
                            scope="col"
                            className="text-center"
                            style={{
                              paddingLeft: "1rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Product Name
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "1rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Qty
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Stock Status
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "1rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Salesman
                          </th>
                          <th scope="col " style={{ paddingLeft: "3rem" }}>
                            Remark
                          </th>
                          <th scope="col " style={{ paddingLeft: "3rem" }}>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredStockInOut?.length === 0 ? (
                          <td colSpan={8} className="text-center mt-2">
                            No Stock Details Found
                          </td>
                        ) : (
                          <>
                            {filteredStockInOut?.map((stock, i) => (
                              <tr key={i}>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "2rem" }}
                                >
                                  {i + 1}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "1rem" }}
                                >
                                  {stock.date}
                                </td>
                                <td
                                  className="text-center"
                                  style={{
                                    paddingLeft: "2rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {stock.product}
                                </td>
                                <td
                                  className="text-center"
                                  style={{
                                    paddingLeft: "1rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {stock.qty}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "2rem" }}
                                >
                                  {stock.stockStatus}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "1rem" }}
                                >
                                  {stock.salesman}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "1rem" }}
                                >
                                  {stock.remarks}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "2.5rem" }}
                                >
                                  <div className="parent_div ">
                                    <div
                                      style={{ cursor: "pointer" }}
                                      className="edit_icon"
                                      aria-label="Example icon button with a menu icon"
                                    >
                                      <Link
                                        to={`/admin/editstockinout/${stock._id}`}
                                        style={{ textDecoration: "none" }}
                                      >
                                        {" "}
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
                                          HandleOpenModal(stock?._id);
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
          <Modal.Title>Delete Stock In Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={stockDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default StockInOut;
