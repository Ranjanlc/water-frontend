import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SetProductionPrice.css";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  addProductPrice,
  deleteProductPrice,
  getAllProductPrice,
} from "../../../../../Redux/Features/Customer/SetProductionPriceSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../Loader/Loader";

const SetProductionPrice = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [selectProduct, setSelectProduct] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [selectProductError, setSelectProductError] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { allProductPriceData, loading } = useSelector(
    (state) => state.setproductionPrice
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchSetProductPrice = useCallback(() => {
    dispatch(
      getAllProductPrice((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchSetProductPrice();
  }, [fetchSetProductPrice]);

  const handleSubmitProduct = () => {
    setProductNameError("");
    setSelectProductError("");
    setPriceError("");
    setCustomerNameError("");
    setAddressError("");

    if (!productName) {
      setProductNameError("Product Name is Required!!");
      return;
    }
    if (!price) {
      setPriceError("Price is Required!!");
      return;
    }
    if (!selectProduct) {
      setSelectProductError("Select Product is Required!!");
      return;
    }
    if (!customerName) {
      setCustomerNameError("Customer Name is Required!!");
      return;
    }
    if (!address) {
      setAddressError("Address is Required!!");
      return;
    }

    let payload = {
      product: productName,
      price: price,
      selectproduct: selectProduct,
      custumername: customerName,
      address: address,
    };

    dispatch(
      addProductPrice({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchSetProductPrice();
          setProductNameError("");
          setPriceError("");
          setSelectProductError("");
          setCustomerNameError("");
          setAddressError("");
          setProductName("");
          setPrice("");
          setSelectProduct("");
          setCustomerName("");
          setAddress("");
        },
      })
    );
  };
  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const productPriceDeleteHandler = () => {
    dispatch(
      deleteProductPrice({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchSetProductPrice();
          handleClose();
        },
      })
    );
  };
  const filteredProducts = allProductPriceData?.filter((productPrice) =>
    productPrice.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main id="main" className="main">
          <section className="section">
            <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
              <div className="row">
                <div className="col-md-7 col-sm-12 ">
                  <h5 className="">
                    <b>Set Product Price</b>
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Select Product</label>
                    <select
                      className="form-select c2"
                      aria-label="Default select example"
                      value={productName}
                      onChange={(e) => {
                        setProductName(e.target.value);
                        setProductNameError("");
                      }}
                    >
                      <option selected="">1.9 LTR</option>
                      <option selected="">1.8 LTR</option>
                      <option selected="">500 ML</option>
                      <option selected="">2 LTR</option>
                    </select>
                    {productNameError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {productNameError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control c2 mt-1 "
                    placeholder="Price"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                      setPriceError("");
                    }}
                  />
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Select Product</label>
                    <input
                      type="text"
                      className="form-control c2"
                      value={selectProduct}
                      onChange={(e) => {
                        setSelectProduct(e.target.value);
                        setSelectProductError("");
                      }}
                    />
                    {selectProductError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {selectProductError}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-4">
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
                <div className="col-md-4">
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
              </div>
              <div className="d-grid gap-2 d-flex justify-content-center my-4">
                <button
                  className="button"
                  style={{ verticalAlign: "middle" }}
                  onClick={handleSubmitProduct}
                >
                  Save
                </button>
              </div>

              {/* form end */}

              <div style={{ paddingTop: "2%" }}>
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
                              style={{ paddingLeft: "4rem" }}
                            >
                              S.No
                            </th>
                            <th
                              scope="col"
                              className="text-center"
                              style={{ paddingLeft: "4rem" }}
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "3rem",
                                textAlign: "center",
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
                              Select Product
                            </th>
                            {/* <th
                            scope="col"
                            style={{ paddingLeft: "3rem", textAlign: "center" }}
                          >
                            Price
                          </th>
                           */}
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "3rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Customer Name
                            </th>
                            {/* <th
                            scope="col"
                            style={{ paddingLeft: "3rem", textAlign: "center" }}
                          >
                            Price
                          </th> */}
                            <th scope="col " style={{ paddingLeft: "2rem" }}>
                              Address
                            </th>
                            <th scope="col " style={{ paddingLeft: "4rem" }}>
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredProducts?.length === 0 ? (
                            <td
                              colSpan={10}
                              className="text-center mt-2"
                              style={{ color: "#10c2a7" }}
                            >
                              No Products Details Found!!
                            </td>
                          ) : (
                            <>
                              {filteredProducts?.map((product, i) => (
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
                                    {product.product}
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
                                    {product.selectproduct}
                                  </td>

                                  <td
                                    className="text-center"
                                    style={{
                                      paddingLeft: "3rem",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {product.custumername}
                                  </td>
                                  <td
                                    className="text-center"
                                    style={{ paddingLeft: 29 }}
                                  >
                                    {product.address}
                                  </td>
                                  {/* <td className="text-center">{product.address}</td> */}
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
                                          to={`/admin/edit_production_price/${product._id}`}
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
            </div>
          </section>
        </main>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product Price</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={productPriceDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SetProductionPrice;
