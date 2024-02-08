import React, { useCallback, useEffect, useState } from "react";
import "./AddNewFillingStock.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleFillingStock,
  updateNewFllingStock,
} from "../../../../../Redux/Features/Products/AddNewFillingStockSlice";

import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import { getAllNewProduct } from "../../../../../Redux/Features/Products/AddNewProductSlice";

function EditFillingStock() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allFllingStockData } = useSelector((state) => state.addFillingStock);
  const { enqueueSnackbar } = useSnackbar();
  const data =
    allFllingStockData && allFllingStockData?.find((e) => e?._id === id);
  console.log(data);
  const navigate = useNavigate();
  const [productName, setProductName] = useState(data?.productName);
  const [fillingStockQuantity, setFillingStockQuantity] = useState(
    data?.fillingStockQuantity
  );
  const [date, setDate] = useState(data?.date);
  const [productNameError, setProductNameError] = useState("");
  const [fillingStockQuantityError, setFillingStockQuantityError] =
    useState("");
  const [dateError, setDateError] = useState("");
  const { allProductData } = useSelector((state) => state.newProduct);

  const fetchAllSingleFillingStock = useCallback(() => {
    dispatch(
      getSingleFillingStock({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchAllSingleFillingStock();
  }, [fetchAllSingleFillingStock]);

  useEffect(() => {
    dispatch(getAllNewProduct(() => {}));
  }, [dispatch]);

  const HandleEditFllingStock = () => {
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
      updateNewFllingStock({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/addnewfillingstock");
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

  return (
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <h5 className="d-inline">
            <b>Edit Filling Stock</b>
          </h5>
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
            </div>
            <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button
                className="button"
                style={{ verticalAlign: "middle" }}
                onClick={HandleEditFllingStock}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default EditFillingStock;
