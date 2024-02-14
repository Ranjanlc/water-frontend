import React, { useCallback, useEffect, useState } from "react";
import './PurchaseOrderVendor.css'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import {
    addPurchaseOrderVendor,
    getAllPurchaseOrderVendor,
    deletePurchaseOrderVendor,
} from "../../../../../Redux/Features/Vendor/PurchaseOrderVendorSlice";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import Loader from "../../../../Loader/Loader";

const PurchaseOrderVendor = () => {

    const [selectProduct, setSelectProduct] = useState("");
    const [price, setPrice] = useState("");
    const [purchaseQuantity, setPurchaseQuantity] = useState("");
    const [amount, setAmount] = useState("");

    const [selectProductError, setSelectProductError] = useState("");
    const [priceError, setPriceError] = useState("");
    const [purchaseQuantityError, setPurchaseQuantityError] = useState("");
    const [amountError, setAmountError] = useState("");
    const dispatch = useDispatch();

    const { allPurchaseOrderVendorData, loading } = useSelector((state) => state.purchaseordervendors);
    const { enqueueSnackbar } = useSnackbar();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedRow, setSelectedRow] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchPurchaseOrderVendor = useCallback(() => {
        dispatch(
            getAllPurchaseOrderVendor((message) => {
                console.log(message);
            })
        );
    }, [dispatch]);


    useEffect(() => {
        fetchPurchaseOrderVendor();
    }, [fetchPurchaseOrderVendor]);

    const handleSubmitPurchaseVendor = () => {
        setSelectProductError("");
        setPriceError("");
        setPurchaseQuantityError("");
        setAmountError("");

        if (!selectProduct) {
            setSelectProductError(" Select Product is Required!!");
            return;
        }
        if (!price) {
            setPriceError("Price is Required!!");
            return;
        }

        if (!purchaseQuantity) {
            setPurchaseQuantityError("Purchase Quantity is Required!!");
            return;
        }

        if (!amount) {
            setAmountError("Amount is Required!!");
            return;
        }


        let payload = {
            product: selectProduct,
            price: price,
            purchaseQuantity: purchaseQuantity,
            amount: amount,
        };
       

        dispatch(
            addPurchaseOrderVendor({
                payload: payload,
                callback: (message) => {
                    enqueueSnackbar(message, { variant: "success" });

                    fetchPurchaseOrderVendor();

                    setSelectProductError("");
                    setPriceError("");
                    setPurchaseQuantityError("");
                    setAmountError("");

                    setSelectProduct("");
                    setPrice("");
                    setPurchaseQuantity("");
                    setAmount("");

                },
            })
        );
    };



    const HandleOpenModal = (id) => {
        setSelectedRow(id);
        handleShow();
    };


    const purchaseDeleteHandler = () => {
        dispatch(
            deletePurchaseOrderVendor({
                id: selectedRow,
                callback: (message) => {
                    enqueueSnackbar(message, { variant: "success" });
                    fetchPurchaseOrderVendor();
                    handleClose();
                },
            })
        );
    };


    const filteredPurchaseOrder = allPurchaseOrderVendorData?.filter((productst) =>
        productst.product.toLowerCase().includes(searchTerm.toLowerCase())
    );
// console.log(allPurchaseOrderVendorData);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <main id="main" className="main">
                    <section className="section">
                        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">

                            <div className="row">
                                <div className="col-md-9 col-sm-12 ">
                                    <h5 className="">
                                        <b>New Vendor</b>
                                    </h5>
                                </div>
                                <div className='col-md-3 col-sm-12' >
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
                            <hr className="" style={{
                                background: 'black',

                            }} />
                            <div className="row">
                                <h5 className="">New Purchase Order:</h5>
                                <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Select Product:
                                    </label>
                                    <select className="form-select a1" id="specificSizeSelect"
                                           value={selectProduct}
                                           onChange={(e) => {
                                            setSelectProduct(e.target.value);
                                             setSelectProductError("");
                                           }}>
                                        <option selected="">Select Product</option>
                                        <option >19 Ltr</option>
                                        <option>600 Ml</option>
                                        <option>1.5 Ltr</option>
                                        <option>Caps</option>
                                    </select>       
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
                                <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
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
                                    <div class="form-check form-check-inline mt-1">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label class="form-check-label" for="inlineCheckbox1">Price USD</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                        <label class="form-check-label" for="inlineCheckbox2">Price SHS</label>
                                    </div>
                                </div>
                                <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Purchase Quantity:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control a1"
                                        placeholder='1'
                                        value={purchaseQuantity}
                                        onChange={(e) => {
                                            setPurchaseQuantity(e.target.value);
                                            setPurchaseQuantityError("");
                                        }}
                                      />
                                      {purchaseQuantityError && (
                                        <div
                                          className="d-flex gap-2 align-items-center"
                                          style={{ color: "red" }}
                                        >
                                          <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                          {purchaseQuantityError}
                                        </div>
                                      )}
                                </div>
                                <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Amount:
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control   a1"
                                        placeholder="Enter Amount"
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
                                <div className="d-grid gap-2 d-flex justify-content-center mt-4">
                                    <button className="button" style={{ verticalAlign: "middle" }}
                                      onClick={handleSubmitPurchaseVendor}>
                                      Save
                                    </button>

                                </div>
                            </div>
                            <hr className=" m-0 my-3" style={{
                                background: 'black',

                            }} />
                            <div className="row mt-2">
                                <h5>Billing:</h5>
                                <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Vendor Name/ID:
                                    </label>
                                    <input type="text" className="form-control a1" placeholder="" />
                                </div>

                                <div className="  col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Address:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control a1"
                                        placeholder="Address"
                                    />
                                </div>
                                <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Order Date:
                                    </label>
                                    <input type="Date" className="form-control a1" placeholder="20 $" />
                                </div>
                                <div className="  col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Purchase Invoice:
                                    </label>
                                    <input type="text" className="form-control a1" placeholder="" />
                                </div>
                                <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Bill Book:
                                    </label>
                                    <input type="text" className="form-control a1" placeholder="" />
                                </div>
                            </div>
                            {/* form end */}

                            <div className="row mt-5 ">
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
                                                        style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                                                    >
                                                        Product Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            paddingLeft: "3rem",
                                                            textAlign: "center",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Price
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            paddingLeft: "3rem",
                                                            textAlign: "center",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Quantity
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        style={{
                                                            paddingLeft: "3rem",
                                                            textAlign: "center",
                                                            whiteSpace: "nowrap"
                                                        }}
                                                    >
                                                        Amount
                                                    </th>
                                                    <th scope="col " style={{ paddingLeft: "3rem" }}>
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {filteredPurchaseOrder?.length === 0 ? (
                          <td colSpan={10} className="pl-5 mt-2">
                            No Vendor Details Found!!
                          </td>
                        ) : (
                          <>
                            {filteredPurchaseOrder?.map((purchase, i) => (
                              <tr>
                             
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {purchase.product}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {purchase.price}
                                </td>

                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {purchase.purchaseQuantity}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {purchase.amount}
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
                                        to={`/admin/purchaseordervendorform/${purchase._id}`}
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
                                          HandleOpenModal(purchase?._id);
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
                            <div className="row">
                                <div className=" col-sm-12  col-md-6 " style={{ lineHeight: "2rem" }}>
                                    <div className="d-grid gap-2 d-flex justify-content-left my-4">
                                     

                                        <button type="button" class="btn btn-secondary  border-0 rounded-2" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" style={{ backgroundColor: '#10c2a7 ', }}>Save Purchase Bill</button>
                                    </div>
                                    {/* save purchase bill modal */}
                                    {/* Button trigger modal */}
                                    {/* Modal */}
                                    <div
                                        className="modal fade"
                                        id="exampleModal"
                                        tabIndex={-1}
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                    >
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">
                                                        Purchase Order Bill Payment
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="modal"
                                                        aria-label="Close"
                                                    />
                                                </div>
                                                <div className="modal-body">
                                                    <label className="" htmlFor="specificSizeSelect">
                                                        Payment
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        placeholder={10000}
                                                    />
                                                </div>
                                                <div className="modal-footer">


                                                    <button type="button" className="btn btn-secondary  border-0 rounded-2" d data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal" style={{ backgroundColor: '#10c2a7 ', }}>Payment</button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary"
                                                        data-bs-dismiss="modal"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* save purchase bill modal */}
                                </div>
                                <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Total Amount:
                                    </label>
                                    <input type="number" className="form-control a1" placeholder="Total Amount" />
                                </div>
                                <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                    <label className="" htmlFor="specificSizeSelect">
                                        Payment:
                                    </label>
                                    <input type="number" className="form-control a1" placeholder="Payment" />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Purchase Vendor Order </Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={purchaseDeleteHandler}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default PurchaseOrderVendor;