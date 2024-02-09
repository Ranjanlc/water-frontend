import "./AddProductType.css";
import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductType,
  addNewProductType,
  deleteProductType,
} from "../../../../../Redux/Features/Products/AddProductTypeSlice";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Loader from "../../../../Loader/Loader";

const AddProductType = () => {
  const [productType, setproductType] = useState("");
  const dispatch = useDispatch();
  const [productTypeError, setProductTypeError] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { allProductTypeData, loading } = useSelector(
    (state) => state.productType
  );
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProductType = useCallback(() => {
    dispatch(
      getAllProductType((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchProductType();
  }, [fetchProductType]);

  const handleSubmitProductType = () => {
    setProductTypeError("");

    if (!productType) {
      setProductTypeError(" Name is Required!!");
      return;
    }

    let payload = {
      productType: productType,
    };

    dispatch(
      addNewProductType({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchProductType();
          setProductTypeError("");
          setproductType("");
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
      deleteProductType({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchProductType();
          handleClose();
        },
      })
    );
  };

  const filteredproductType = allProductTypeData?.filter((product) =>
    product.productType.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div className="shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-7 col-sm-12 ">
                  <h5 className="">
                    <b>Add Product Type</b>
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
              </div>
              <hr style={{ backgroundColor: "black" }} />
              <div className="row mt-3">
                <div className="row mx-1 ">
                  <div className="col-md-4 ">
                    <div className="form-group mx-1">
                      <label> Name</label>
                      <input
                        type="text"
                        className="form-control c2 mt-1 "
                        placeholder="Enter  Name"
                        value={productType}
                        onChange={(e) => {
                          setproductType(e.target.value);
                          setProductTypeError("");
                        }}
                      />
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
                </div>
                <div className="d-grid gap-2 d-flex justify-content-center my-4">
                  <button
                    className="button"
                    style={{ verticalAlign: "middle" }}
                    onClick={handleSubmitProductType}
                  >
                    <span>Submit</span>
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
                            Name
                          </th>
                          <th scope="col " style={{ paddingLeft: "3rem" }}>
                            ACTION
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredproductType?.length === 0 ? (
                          <h5 className="text-center mt-2">
                            No Products Found
                          </h5>
                        ) : (
                          <>
                            {filteredproductType?.map((product, i) => (
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
                                  {product.productType}
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
                                        to={`/admin/editproducttype/${product._id}`}
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

      {/* End #main */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product Type</Modal.Title>
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
    </>
  );
};

export default AddProductType;
