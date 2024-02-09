import React, { useCallback, useEffect, useState } from "react";
import "./AddVendorPayment.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
    getSingleVendorPayment,
    updateVendorPayment,
 
} from "../../../../../Redux/Features/Vendor/AddVendorPaymentSlice";
import { useSnackbar } from "notistack";



function EditVendorPaymentForm () {
    // { loggedIn ? <h1>Private page</h1> : <Navigate to="/login" /> }

    const { id } = useParams();
  const dispatch = useDispatch();
  const { allVendorPMData } = useSelector((state) => state.addVendorPayment);
  const { enqueueSnackbar } = useSnackbar();
  const data = allVendorPMData && allVendorPMData?.find((e) => e?._id === id);
  const navigate = useNavigate();
console.log(allVendorPMData);
  const [accountVendor, setAccountVendor] = useState(data?.accountVendor);
  const [vendorName, setVendorName] = useState(data?.vendorName);
  const [balanceAmount, setBalanceAmount] = useState(data?.balanceAmount);
  const [paymentDate, setPaymentDate] = useState(data?.paymentDate);
  const [payment, setPayment] = useState(data?.payment);
  const [vendorChequeNo, setVendorChequeNo] = useState(data?.vendorChequeNo);
  const [vendorRemark, setVendorRemark] = useState(data?.vendorRemark);
  
  const [accountVendorError, setAccountVendorError] = useState("");
  const [vendorNameError, setVendorNameError] = useState("");
  const [balanceAmountError, setBalanceAmountError] = useState("");
  const [paymentDateError, setPaymentDateError] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [vendorChequeNoError, setVendorChequeNoError] = useState("");
  const [vendorRemarkError, setVendorRemarkError] = useState("");

  const fetchAllSinglePaymentVendor = useCallback(() => {
    dispatch(
        getSingleVendorPayment({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchAllSinglePaymentVendor();
  }, [fetchAllSinglePaymentVendor]);

  const HandleEditVendorPayment = () => {
    setAccountVendorError("");
    setVendorNameError("");
    setBalanceAmountError("");
    setPaymentDateError("");
    setPaymentError("");
    setVendorChequeNoError("");
    setVendorRemarkError("");

   
    if (!accountVendor) {
        setAccountVendorError("Account Vendor is Required!!");
      return;
    }
    if (!vendorName) {
        setVendorNameError("Vendor  Name is Required!!");
      return;
    }

    if (!balanceAmount) {
        setBalanceAmountError("Balance Amount Name is Required!!");
      return;
    }
    if (!paymentDate) {
        setPaymentDateError("Payment Date Name is Required!!");
      return;
    }
    if (!payment) {
        setPaymentError("Payment Name is Required!!");
      return;
    }
    if (!vendorChequeNo) {

        setVendorChequeNoError("Cheque Name is Required!!");
      return;
    }
    if(!vendorRemark)
    {
        setVendorChequeNoError("Remark is Required");
        return;
    }



    let payload = {
        accountNo: accountVendor,
        vendorName: vendorName,
        balanceAmount: balanceAmount,
        paymentDate:paymentDate ,
        payment:payment,
        chequeNo:vendorChequeNo,
        remark:vendorRemark,
    };

    dispatch(
        updateVendorPayment({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/addvendorpayment");
          setAccountVendorError("");
          setVendorNameError("");
          setBalanceAmountError("");
          setPaymentDateError("");
          setPaymentError("");
          setVendorChequeNoError("");
          setVendorRemarkError("");
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
                            <div className="col-md-12 ">
                                <h5 className="d-inline">
                                    <b>Edit Vendor Payment </b>
                                </h5>
                            </div>
                            {/* <div className="col-md-5 ">
                                <div className="form-group">
                                    <label className="mb-1">Search by ID or Name</label>
                                    <input
                                        type="text "
                                        className="form-control"
                                       
                                        placeholder="Search"
                                    />
                                </div>
                                
                            </div> */}

                        </div>

                        <hr className=" mb-3"
                            style={{
                                background: 'black',
                            }} />

                        <div className="row">
                            <div className=" col-sm-12  col-md-4 ">
                                <label className="" htmlFor="specificSizeSelect">
                                    Account
                                </label>
                                <input
                                    type="number"
                                    className="form-control a1"
                                    placeholder="Account"
                                    onChange={(e) => {
                                        setAccountVendor(e.target.value);
                                        setAccountVendorError("");
                                      }}
                                    />
                                    {accountVendorError && (
                                      <div
                                        className="d-flex gap-2 align-items-center"
                                        style={{ color: "red" }}
                                      >
                                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                        {accountVendorError}
                                      </div>
                                    )}
                            </div>
                            <div className=" col-sm-12  col-md-4 " >
                                <label className="" htmlFor="specificSizeSelect">
                                    Vendor Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Vendor Name"
                                    onChange={(e) => {
                                        setVendorName(e.target.value);
                                        setVendorNameError("");
                                      }}
                                    />
                                    {vendorNameError && (
                                      <div
                                        className="d-flex gap-2 align-items-center"
                                        style={{ color: "red" }}
                                      >
                                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                        {vendorNameError}
                                      </div>
                                    )}
  <div className="form-check form-check-inline mt-1">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label" for="inlineRadio1">Cheque</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label" for="inlineRadio2">Cash</label>
                </div>

                            </div>
                            <div className=" col-sm-12  col-md-4 " >
                                <label className="" htmlFor="specificSizeSelect">
                                    Balance Amount
                                </label>
                                <input
                                    type="number"
                                    className="form-control a1"
                                    placeholder="Enter Balance Amount"
                                    onChange={(e) => {
                                        setBalanceAmount(e.target.value);
                                        setBalanceAmountError("");
                                      }}
                                    />
                                    {balanceAmountError && (
                                      <div
                                        className="d-flex gap-2 align-items-center"
                                        style={{ color: "red" }}
                                      >
                                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                        {balanceAmountError}
                                      </div>
                                    )}
                            </div>
                            {/* <div className=" d-flex justify-content-center mt-3 ">
                                <input
                                    type="radio"
                                    id="html"
                                    name="fav_language"
                                    defaultValue="HTML"
                                    className="mx-2 "
                                />
                                CASH /{" "}
                                <input
                                    type="radio"
                                    id="html"
                                    name="fav_language"
                                    defaultValue="HTML"
                                    className="mx-2 "
                                />
                                CHEQUE
                            </div> */}
                        </div>
                        
                        <div className="row mt-2">
                      
                            <div className=" col-md-4 col-sm-12" >
                                <label className="" htmlFor="specificSizeSelect">
                                    Payment Date
                                </label>
                                <input type="Date" className="form-control a1" placeholder="Name"
                                
                                onChange={(e) => {
                                    setPaymentDate(e.target.value);
                                    setPaymentDateError("");
                                  }}
                                />
                                {paymentDateError && (
                                  <div
                                    className="d-flex gap-2 align-items-center"
                                    style={{ color: "red" }}
                                  >
                                    <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                    {paymentDateError}
                                  </div>
                                )}
                            </div>
                            <div className="  col-md-4 col-sm-12" >
                                <label className="" htmlFor="specificSizeSelect">
                                    Payment
                                </label>
                                <input type="number" className="form-control a1" placeholder="Payment"
                                
                                onChange={(e) => {
                                    setPayment(e.target.value);
                                    setPaymentError("");
                                  }}
                                />
                                {paymentError && (
                                  <div
                                    className="d-flex gap-2 align-items-center"
                                    style={{ color: "red" }}
                                  >
                                    <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                    {paymentError}
                                  </div>
                                )}


                            </div>
                            <div className="  col-md-4 col-sm-12" >
                                <label className="" htmlFor="specificSizeSelect">
                                    Cheque No
                                </label>
                                <input type="text" className="form-control a1" placeholder="  Cheque No"
                                 onChange={(e) => {
                                    setVendorChequeNo(e.target.value);
                                    setVendorChequeNoError("");
                                  }}
                                />
                                {vendorChequeNoError && (
                                  <div
                                    className="d-flex gap-2 align-items-center"
                                    style={{ color: "red" }}
                                  >
                                    <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                    {vendorChequeNoError}
                                  </div>
                                )}

                            </div>
                            <div className=" col-md-4 col-sm-12 mt-1">
                                <label className="" htmlFor="specificSizeSelect">
                                    Remark
                                </label>
                                <input type="text" className="form-control a1" placeholder="Remark"
                                onChange={(e) => {
                                    setVendorRemark(e.target.value);
                                    setVendorRemarkError("");
                                  }}
                                />
                
                                {vendorRemarkError && (
                                  <div
                                    className="d-flex gap-2 align-items-center"
                                    style={{ color: "red" }}
                                  >
                                    <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                    {vendorRemarkError}
                                  </div>
                                )}

                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center mt-3">
                                <button className="button" style={{ verticalAlign: "middle" }}
                                onClick={HandleEditVendorPayment}>
                                   Save 
                                </button>
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}




                    </div>
                </section>
            </main>

        </>
    )
}

export default EditVendorPaymentForm