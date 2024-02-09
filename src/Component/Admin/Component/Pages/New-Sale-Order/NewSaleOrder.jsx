import { useState, useCallback, useEffect } from "react";
import "./NewSaleOrder.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import {
  addSelectProduct,
  deleteSelectProduct,
  getAllSelectProduct,
} from "../../../../../Redux/Features/Customer/SalesOrderSlice";
import { getAllNewProduct } from "../../../../../Redux/Features/Products/AddNewProductSlice";
import Loader from "../../../../Loader/Loader";

const NewSaleOrder = () => {
  const [ProductType, setProductType] = useState("");
  const [price, setPrice] = useState("");
  const [sQuantity, setSQuantity] = useState("");
  const [rQuantity, setRQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [selectSalesMan, setSelectSalesMan] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [invoice, setInvoice] = useState("");
  const [billBook, setBillBook] = useState("");
  const { allSelectProductData, loading } = useSelector(
    (state) => state.salesOrder
  );
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
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
  const { allProductData } = useSelector((state) => state.newProduct);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [showModel, setShowModel] = useState(false);
  const handleClose = () => setShowModel(false);
  const handleShowModel = () => setShowModel(true);

  const fetchNewSalesOrders = useCallback(() => {
    dispatch(
      getAllSelectProduct((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchNewSalesOrders();
  }, [fetchNewSalesOrders]);

  useEffect(() => {
    dispatch(getAllNewProduct(() => {}));
  }, [dispatch]);

  const handleSubmitSaleOrders = () => {
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

    if (!ProductType) {
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
      selectproduct: ProductType,
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
      addSelectProduct({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewSalesOrders();
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
  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShowModel();
  };

  const NewSaleDeleteHandler = () => {
    dispatch(
      deleteSelectProduct({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewSalesOrders();
          handleClose();
        },
      })
    );
  };
  const filteredSelectProducts = allSelectProductData?.filter((product) =>
    product.selectproduct.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main id="main" className="main">
          <section className="section">
            <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-7 col-sm-12 ">
                  <h5 className="">
                    <b>Sale Order</b>
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
              <hr
                className="m-0 mb-3 mt-3"
                style={{
                  background: "black",
                }}
              />
              <div className="row mt-3">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Select Product</label>
                    <select
                      className="form-select c2"
                      aria-label="Default select example"
                      value={ProductType}
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
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control c2  "
                    placeholder="Price"
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
                  <div className="form-check form-check-inline mt-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      Price USD
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                    >
                      Price SHS
                    </label>
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
                        setSQuantityError("");
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
              </div>
              <div className="row mt-1">
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
              </div>
              <div className="row">
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
              </div>
              <div className="d-grid gap-2 d-flex justify-content-center my-4">
                <button
                  className="button"
                  style={{ verticalAlign: "middle" }}
                  onClick={handleSubmitSaleOrders}
                >
                  Save
                </button>
              </div>

              {/* form end */}
              {/* Table Strat */}

              <div className="row">
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
                            S.No
                          </th>
                          <th
                            scope="col"
                            className="text-center"
                            style={{
                              paddingLeft: "4rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Select Product
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            S-Quantity
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            R-Quantity
                          </th>
                          <th
                            scope="col"
                            className="text-center"
                            style={{
                              paddingLeft: "4rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Amount
                          </th>

                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Customer Name
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Address
                          </th>
                          <th
                            scope="col"
                            className="text-center"
                            style={{
                              paddingLeft: "4rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Select Salesman
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Oder Date
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Invoice
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Bill Book
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredSelectProducts?.length === 0 ? (
                          <td
                            colSpan={12}
                            className="text-center mt-2"
                            style={{ color: "#10c2a7" }}
                          >
                            No Sale Order Details Found
                          </td>
                        ) : (
                          <>
                            {filteredSelectProducts?.map((product, i) => (
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
                                  {product.selectproduct}
                                </td>
                                <td
                                  className="text-center"
                                  style={{
                                    paddingLeft: "3rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {product.price}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: 29 }}
                                >
                                  {product.s_quantity}
                                </td>
                                <td className="text-center">
                                  {product.r_quantity}
                                </td>
                                <td
                                  className="text-center"
                                  style={{
                                    paddingLeft: "3rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {product.amount}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: 29 }}
                                >
                                  {product.custumername}
                                </td>
                                <td className="text-center">
                                  {product.adress}
                                </td>
                                <td
                                  className="text-center"
                                  style={{
                                    paddingLeft: "3rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {product.selectsalesman}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: 29 }}
                                >
                                  {product.orderdate}
                                </td>
                                <td className="text-center">
                                  {product.invoice}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: 29 }}
                                >
                                  {product.billbook}
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
                                        to={`/admin/new_sale_order/edit_sale_order/${product._id}`}
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
                                          HandleOpenModal(product?._id);
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

      <Modal show={showModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Sale Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={NewSaleDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewSaleOrder;
