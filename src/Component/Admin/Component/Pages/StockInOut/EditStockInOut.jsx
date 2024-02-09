import { useCallback, useEffect, useState } from "react";
import "./StockInOut.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleStockInOut,
  updateStockInOut,
} from "../../../../../Redux/Features/Products/StockInOutSlice";
import { useSnackbar } from "notistack";
import { getAllNewProduct } from "../../../../../Redux/Features/Products/AddNewProductSlice";

const EditStockInOut = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allStockInOutData } = useSelector((state) => state.stockInOut);
  const { enqueueSnackbar } = useSnackbar();
  const data =
    allStockInOutData && allStockInOutData?.find((e) => e?._id === id);
  const navigate = useNavigate();

  const [date, setDate] = useState(data?.date);
  const [salesman, setSalesman] = useState(data?.salesman);
  const [product, setProduct] = useState(data?.product);
  const [quantity, setQuantity] = useState(data?.qty);
  const [stockStatus, setStockStatus] = useState(data?.stockStatus);
  const [remark, setRemark] = useState(data?.remarks);
  const [dateError, setDateError] = useState("");
  const [salesmanError, setSalesmanError] = useState("");
  const [productError, setProductError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [stockStatusError, setStockStatusError] = useState("");
  const [remarkError, setRemarkError] = useState("");
  const { allProductData } = useSelector((state) => state.newProduct);

  const fetchSingleStockInOut = useCallback(() => {
    dispatch(
      getSingleStockInOut({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchSingleStockInOut();
  }, [fetchSingleStockInOut]);

  useEffect(() => {
    dispatch(getAllNewProduct(() => {}));
  }, [dispatch]);

  const HandleEditStockInOut = () => {
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
      updateStockInOut({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/stockinout");
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

  return (
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <h5 className="d-inline">
            <b> Edit Stock In/Out</b>
          </h5>
          <hr style={{ backgroundColor: "black" }} />
          <div className="row mt-3">
            <div className="row mx-1">
              <div className="col-md-4">
                <div className="form-group ">
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control c2"
                    placeholder="Enter Order Number"
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
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {dateError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group ">
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
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
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
                    {allProductData &&
                      allProductData.map((data, i) => (
                        <option value={data.productName} key={i}>
                          {data.productName}
                        </option>
                      ))}
                  </select>
                  {productError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
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
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
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
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {stockStatusError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
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
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
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
                onClick={HandleEditStockInOut}
              >
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditStockInOut;
