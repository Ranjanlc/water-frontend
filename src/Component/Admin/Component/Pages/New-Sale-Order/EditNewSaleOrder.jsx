import { useCallback, useEffect, useState } from "react";
import "./NewSaleOrder.css";
import { useParams, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleSelectProduct,
  updateSelectProduct,
} from "../../../../../Redux/Features/Customer/SalesOrderSlice";
import { getAllNewProduct } from "../../../../../Redux/Features/Products/AddNewProductSlice";

const EditNewSaleOrder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allSelectProductData } = useSelector((state) => state.salesOrder);
  const { enqueueSnackbar } = useSnackbar();
  const data =
    allSelectProductData && allSelectProductData?.find((e) => e?._id === id);
  const { allProductData } = useSelector((state) => state.newProduct);
  const navigate = useNavigate();
  const [productType, setProductType] = useState(data?.productType);
  const [price, setPrice] = useState(data?.price);
  const [sQuantity, setSQuantity] = useState(data?.s_quantity);
  const [rQuantity, setRQuantity] = useState(data?.r_quantity);
  const [amount, setAmount] = useState(data?.amount);
  const [customerName, setCustomerName] = useState(data?.custumername);
  const [address, setAddress] = useState(data?.adress);
  const [selectSalesMan, setSelectSalesMan] = useState(data?.selectsalesman);
  const [orderDate, setOrderDate] = useState(data?.orderdate);
  const [invoice, setInvoice] = useState(data?.invoice);
  const [billBook, setBillBook] = useState(data?.billbook);

  const [productTypeError, setProductTypeError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [sQuantityError, setSQuantityError] = useState("");
  const [rQuantityError, setRQuantityError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [selectSalesManError, setSelectSalesManError] = useState("");
  const [orderDateError, setOrderDateError] = useState("");
  const [invoiceError, setInvoiceError] = useState("");
  const [billBookError, setBillBookError] = useState("");

  const fetchAllSingleSelectProduct = useCallback(() => {
    dispatch(
      getSingleSelectProduct({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);
  useEffect(() => {
    fetchAllSingleSelectProduct();
  }, [fetchAllSingleSelectProduct]);

  useEffect(() => {
    dispatch(getAllNewProduct(() => {}));
  }, [dispatch]);

  const HandleEditNewProduct = () => {
    setProductTypeError("");
    setPriceError("");
    setSQuantityError("");
    setRQuantityError("");
    setAmountError("");
    setCustomerNameError("");
    setAddressError("");
    setSelectSalesManError("");
    setOrderDateError("");
    setInvoiceError("");
    setBillBookError("");

    if (!productType) {
      setProductTypeError("Product Type is Required!!");
      return;
    }
    if (!price) {
      setPriceError("Price Name is Required!!");
      return;
    }
    if (!sQuantity) {
      setSQuantityError("S-Quantity is Required!!");
      return;
    }
    if (!rQuantity) {
      setRQuantityError("R-Quantity is Required!!");
      return;
    }
    if (!amount) {
      setAmountError("Amount is Required!!");
      return;
    }
    if (!customerName) {
      setCustomerNameError("CustomerId is Required!!");
      return;
    }
    if (!address) {
      setAddressError("Address is Required!!");
      return;
    }
    if (!selectSalesMan) {
      setSelectSalesManError("Select Sales Man is Required!!");
      return;
    }
    if (!orderDate) {
      setOrderDateError("Order Date is Required!!");
      return;
    }
    if (!invoice) {
      setInvoiceError("Invoice is Required!!");
      return;
    }
    if (!billBook) {
      setBillBookError("Bill Book is Required!!");
      return;
    }

    let payload = {
      selectproduct: productType,
      price: price,
      s_quantity: sQuantity,
      r_quantity: rQuantity,
      amount: amount,
      custumername: customerName,
      adress: address,
      selectsalesman: selectSalesMan,
      orderdate: orderDate,
      invoice: invoice,
      billbook: billBook,
    };

    dispatch(
      updateSelectProduct({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/new_sale_order");
          setProductTypeError("");
          setPriceError("");
          setSQuantityError("");
          setRQuantityError("");
          setAmountError("");
          setCustomerNameError("");
          setAddressError("");
          setSelectSalesManError("");
          setOrderDateError("");
          setInvoiceError("");
          setBillBookError("");
          setProductType("");
          setPrice("");
          setSQuantity("");
          setRQuantity("");
          setAmount("");
          setCustomerName("");
          setAddress("");
          setSelectSalesMan("");
          setOrderDate("");
          setInvoice("");
          setBillBook("");
        },
      })
    );
  };

  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            <h5 className="d-inline">
              <b>Edit Order</b>
            </h5>
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Select Product</label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                    value={productType}
                    onChange={(e) => {
                      setProductType(e.target.value);
                      setProductTypeError("");
                    }}
                  >
                    <option selected="">Select Product Name</option>
                    {allProductData &&
                      allProductData.map((d, i) => (
                        <option value={d.productName} key={i}>
                          {d.productName}
                        </option>
                      ))}
                  </select>
                  {productTypeError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {productTypeError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Price USD</label>
                  <input
                    type="number"
                    className="form-control c2"
                    placeholder={0.5}
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                      setPriceError("");
                    }}
                  />
                  {priceError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {priceError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>S-Quantity</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder={0}
                    value={sQuantity}
                    onChange={(e) => {
                      setSQuantity(e.target.value);
                      setSQuantityError("");
                    }}
                  />
                  {sQuantityError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {sQuantityError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>R-Quantity</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder={0}
                    value={rQuantity}
                    onChange={(e) => {
                      setRQuantity(e.target.value);
                      setRQuantityError("");
                    }}
                  />
                  {rQuantityError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {rQuantityError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder={0}
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setAmountError("");
                    }}
                  />
                  {amountError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {amountError}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label>Customer Name</label>
                  <input
                    type="text"
                    className="form-control c2"
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      setCustomerNameError("");
                    }}
                  />
                  {customerNameError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {customerNameError}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control c2"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setAddressError("");
                    }}
                  />
                  {addressError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {addressError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Select Salesman</label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                    value={selectSalesMan}
                    onChange={(e) => {
                      setSelectSalesMan(e.target.value);
                      setSelectSalesManError("");
                    }}
                  >
                    <option selected="">Select Salesman</option>
                    <option value={1}>rohan </option>
                    <option value={1}>Ahmad</option>
                    <option value={1}>Nelu</option>
                    <option value={1}>Rahul</option>
                  </select>
                  {selectSalesManError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {selectSalesManError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Oder Date</label>
                  <input
                    type="date"
                    className="form-control c2"
                    value={orderDate}
                    onChange={(e) => {
                      setOrderDate(e.target.value);
                      setOrderDateError("");
                    }}
                  />
                  {orderDateError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {orderDateError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Invoice </label>
                  <input
                    type="text"
                    className="form-control c2"
                    value={invoice}
                    onChange={(e) => {
                      setInvoice(e.target.value);
                      setInvoiceError("");
                    }}
                  />
                  {invoiceError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {invoiceError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Bill Book </label>
                  <input
                    type="text"
                    className="form-control c2"
                    value={billBook}
                    onChange={(e) => {
                      setBillBook(e.target.value);
                      setBillBookError("");
                    }}
                  />
                  {billBookError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {billBookError}
                    </div>
                  )}
                </div>
              </div>

              <div className="d-grid gap-2 d-flex justify-content-center my-4">
                <button
                  className="button"
                  style={{ verticalAlign: "middle" }}
                  onClick={HandleEditNewProduct}
                >
                  Save
                </button>
              </div>
            </div>
            {/* form end */}
          </div>
        </section>
      </main>
    </>
  );
};

export default EditNewSaleOrder;
