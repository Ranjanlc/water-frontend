import React, { useCallback, useEffect, useState } from "react";
import "./AddNewProduct.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  deleteNewProduct,
  getAllNewProduct,
} from "../../../../../Redux/Features/Products/AddNewProductSlice";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import Loader from "../../../../Loader/Loader";
import { getAllProductType } from "../../../../../Redux/Features/Products/AddProductTypeSlice";

const AddNewProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [typeError, setTypeError] = useState("");
  const dispatch = useDispatch();
  const { allProductData, loading } = useSelector((state) => state.newProduct);
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { allProductTypeData } = useSelector((state) => state.productType);

  useEffect(() => {
    dispatch(getAllProductType(() => {}));
  }, [dispatch]);

  const fetchNewProducts = useCallback(() => {
    dispatch(
      getAllNewProduct((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchNewProducts();
  }, [fetchNewProducts]);

  const handleSubmitProduct = () => {
    setProductNameError("");
    setPriceError("");
    setTypeError("");

    if (!productName) {
      setProductNameError("Product Name is Required!!");
      return;
    }
    if (!price) {
      setPriceError("Price is Required!!");
      return;
    }
    if (!type) {
      setTypeError("Type is Required!!");
      return;
    }

    let payload = {
      productName: productName,
      price: price,
      quantityType: type,
    };

    dispatch(
      addNewProduct({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewProducts();
          setProductNameError("");
          setPriceError("");
          setTypeError("");
          setProductName("");
          setPrice("");
          setType("");
        },
      })
    );
  };

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const productDeleteHandler = () => {
    dispatch(
      deleteNewProduct({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewProducts();
          handleClose();
        },
      })
    );
  };

  const filteredProducts = allProductData?.filter((product) =>
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
              {/* <h5 className="d-inline">
              <b>New Product</b>
            </h5> */}
              <div className="row">
                <div className="col-md-7 col-sm-12 ">
                  <h5 className="">
                    <b>New Product</b>
                  </h5>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="form-group ">
                    {/* <label>Search by ID or Name</label> */}
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <hr style={{ backgroundColor: "black" }} />
              <div className="row mt-3">
                <div className="row mx-1 ">
                  <div className="col-md-4 ">
                    <div className="form-group mx-1">
                      <label>Product Name</label>
                      <input
                        type="text"
                        className="form-control c2 mt-1 "
                        placeholder="Enter Product Name"
                        value={productName}
                        onChange={(e) => {
                          setProductName(e.target.value);
                          setProductNameError("");
                        }}
                      />
                    </div>
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
                  <div className="col-md-4 ">
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
                    {priceError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {priceError}
                      </div>
                    )}
                    <div class="form-check form-check-inline mt-1">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1">
                        Price USD
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                        Price SHS
                      </label>
                    </div>
                  </div>

                  <div className="col-md-4 ">
                    <div className="form-group mx-1">
                      <label htmlFor="usr">Select Type</label>
                      <select
                        className="form-select c2 mt-1 "
                        aria-label="Default select example"
                        value={type}
                        onChange={(e) => {
                          setType(e.target.value);
                          setTypeError("");
                        }}
                      >
                        <option selected="">Select category</option>

                        {allProductTypeData &&
                          allProductTypeData.map((type, i) => (
                            <option value={type.productType} key={i}>
                              {type.productType}
                            </option>
                          ))}
                      </select>
                      {typeError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {typeError}
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
              </div>

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
                          <th
                            scope="col"
                            style={{ paddingLeft: "2rem", textAlign: "center" }}
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Bottle Type
                          </th>
                          <th scope="col " style={{ paddingLeft: "3rem" }}>
                            ACTION
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts?.length === 0 ? (
                          <td colSpan={8} className="text-center mt-2">
                            No Products Found
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
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {product.productName}
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
                                  {product.quantityType}
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
                                        to={`/admin/editproduct/${product._id}`}
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={productDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End #main */}
    </>
  );
};

export default AddNewProduct;
