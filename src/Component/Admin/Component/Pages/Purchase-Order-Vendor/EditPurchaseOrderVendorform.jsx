import React, { useCallback, useEffect, useState } from "react";
import './PurchaseOrderVendor.css'
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
    getSinglePurchaseOrderVendor,
    updatePurchaseOrderVendor,

} from "../../../../../Redux/Features/Vendor/PurchaseOrderVendorSlice";
import { useSnackbar } from "notistack"

function EditPurchaseOrderVendorform() {


    const { id } = useParams();

    const dispatch = useDispatch();
    const { allPurchaseOrderVendorData } = useSelector((state) => state.purchaseordervendors);
    const { enqueueSnackbar } = useSnackbar();
    const data = allPurchaseOrderVendorData && allPurchaseOrderVendorData?.find((e) => e?._id === id);
    const navigate = useNavigate();

    const [selectProduct, setSelectProduct] = useState(data?.product);
    const [price, setPrice] = useState(data?.price);
    const [purchaseQuantity, setPurchaseQuantity] = useState(data?.purchaseQuantity);
    const [amount, setAmount] = useState(data?.amount);

    const [selectProductError, setSelectProductError] = useState("");
    const [priceError, setPriceError] = useState("");
    const [purchaseQuantityError, setPurchaseQuantityError] = useState("");
    const [amountError, setAmountError] = useState("");

    const fetchAllSinglePurchaseVendor = useCallback(() => {
        dispatch(
            getSinglePurchaseOrderVendor({
                id: id,
                callback: (message) => {
                    console.log(message);
                },
            })
        );
    }, [dispatch, id]);


    useEffect(() => {
        fetchAllSinglePurchaseVendor();
    }, [fetchAllSinglePurchaseVendor]);


    const HandleEditVendorpurchase = () => {
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
            updatePurchaseOrderVendor({
                id: id,
                payload: payload,
                callback: (message) => {
                    enqueueSnackbar(message, { variant: "success" });
                    navigate("/admin/purchaseordervendor");


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



    return (
        <>
            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">

                        <div className="row">
                            <div className="col-md-12 col-sm-12 ">
                                <h5 className="">
                                    <b>Edit Vendor</b>
                                </h5>
                            </div>
                        </div>
                        <hr className=" m-0 mb-3   " style={{
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
                                    className="form-control c2 "
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
                                    placeholder="enter customer name"
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
                                    placeholder="Enter Amounts"
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
                        <hr className=" m-0 my-4    " style={{
                            background: 'black',
                        }} />
                        <div className="row mt-2">
                            <h5>Billing:</h5>
                            <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Vendor Name/ID:
                                </label>
                                <input type="text" className="form-control a1" placeholder="#5412" />
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
                                <input type="text" className="form-control a1" placeholder="Purchase Invoice" />
                            </div>
                            <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Bill Book:
                                </label>
                                <input type="text" className="form-control a1" placeholder="Bill Book" />
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}
                        <hr className=" my-4 mb-3   " style={{
                            background: 'black',
                        }} />
                        <div className="row">
                            <div className="col-md-2 mx-auto ">
                                <div className="d-grid gap-2 d-flex justify-content-center ">
                                    <button className="button" style={{ verticalAlign: "middle" }}
                                        onClick={HandleEditVendorpurchase}>
                                        Save
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default EditPurchaseOrderVendorform;