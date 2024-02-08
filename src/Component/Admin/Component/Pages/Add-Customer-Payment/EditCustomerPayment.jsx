import React, { useCallback, useEffect, useState } from "react";
import "./AddCustomerPayment.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleCustomerPayment,
  updateNewCustomerPayment,
} from "../../../../../Redux/Features/Customer/AddCustomerPaymentSlice";

import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";

function EditCustomerPayment() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allCustomerPaymentData } = useSelector(
    (state) => state.addCustomerPayment
  );
  const { enqueueSnackbar } = useSnackbar();
  const data =
    allCustomerPaymentData &&
    allCustomerPaymentData?.find((e) => e?._id === id);
  console.log(data);
  const navigate = useNavigate();
  const [account, setAccount] = useState(data?.account);
  const [customerName, setCustomerName] = useState(data?.custumername);
  const [balanceBottle, setBalanceBottle] = useState(data?.balancebottle);
  const [balanceAmount, setBalanceAmount] = useState(data?.balanceamount);
  const [paymentReceiver, setPaymentReceiver] = useState(data?.paymentreciever);
  const [paymentDate, setPaymentDate] = useState(data?.paymentdate);
  const [paymentMode, setpaymentMode] = useState(data?.paymentmode);
  const [paymentReceived, setPaymentReceived] = useState(data?.paymentrecieved);
  const [taxDiscount, setTaxDiscount] = useState(data?.tax);
  const [chequeNo, setChequeNo] = useState(data?.checkno);
  const [remarks, setRemarks] = useState(data?.remark);

  const [accountError, setAccountError] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [balanceBottleError, setBalanceBottleError] = useState("");
  const [balanceAmountError, setBalanceAmountError] = useState("");
  const [paymentReceiverError, setPaymentReceiverError] = useState("");
  const [paymentDateError, setPaymentDateError] = useState("");
  const [paymentModeError, setpaymentModeError] = useState("");
  const [paymentReceivedError, setPaymentReceivedError] = useState("");
  const [taxDiscountError, setTaxDiscountError] = useState("");
  const [chequeNoError, setChequeNoError] = useState("");
  const [remarksError, setRemarksError] = useState("");

  const fetchAllSingleCustomerPayment = useCallback(() => {
    dispatch(
      getSingleCustomerPayment({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchAllSingleCustomerPayment();
  }, [getSingleCustomerPayment]);

  const HandleEditCustomerPayment = () => {
    setAccountError("");
    setCustomerNameError("");
    setBalanceBottleError("");
    setBalanceAmountError("");
    setPaymentReceiverError("");
    setPaymentDateError("");
    setpaymentModeError("");
    setPaymentReceivedError("");
    setTaxDiscountError("");
    setChequeNoError("");
    setRemarksError("");

    if (!account) {
      setAccountError("Account is Required!!");
      return;
    }
    if (!customerName) {
      setCustomerNameError("Customer Name is Required!!");
      return;
    }
    if (!balanceBottle) {
      setBalanceBottleError("Balance Bottal is Required!!");
      return;
    }
    if (!balanceAmount) {
      setBalanceAmountError("Balance Amount  is Required!!");
      return;
    }
    if (!paymentReceiver) {
      setPaymentReceiverError("Payment Receiver is Required!!");
      return;
    }
    if (!paymentDate) {
      setPaymentDateError("Payment Date  is Required!!");
      return;
    }
    if (!paymentMode) {
      setpaymentModeError(" Payment Mode is Required!!");
      return;
    }
    if (!paymentReceived) {
      setPaymentReceivedError(" Payment Received is Required!!");
      return;
    }
    if (!taxDiscount) {
      setTaxDiscountError(" Tax Discount is Required!!");
      return;
    }
    if (!chequeNo) {
      setChequeNoError(" Check No is Required!!");
      return;
    }
    if (!remarks) {
      setRemarksError(" Remark is Required!!");
      return;
    }

    let payload = {
      account: account,
      custumername: customerName,
      balancebottle: balanceBottle,
      balanceamount: balanceAmount,
      paymentreciever: paymentReceiver,
      paymentdate: paymentDate,
      paymentmode: paymentMode,
      paymentReceived: paymentReceived,
      tax: taxDiscount,
      checkno: chequeNo,
      remark: remarks,
    };

    dispatch(
      updateNewCustomerPayment({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/add_customer_payment");

          setAccountError("");
          setCustomerNameError("");
          setBalanceBottleError("");
          setBalanceAmountError("");
          setPaymentReceiverError("");
          setPaymentDateError("");
          setpaymentModeError("");
          setPaymentReceivedError("");
          setTaxDiscountError("");
          setChequeNoError("");
          setRemarksError("");

          setAccount("");
          setCustomerName("");
          setBalanceBottle("");
          setBalanceAmount("");
          setPaymentReceiver("");
          setPaymentDate("");
          setpaymentMode("");
          setPaymentReceived("");
          setTaxDiscount("");
          setChequeNo("");
          setRemarks("");
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
              <b>Edit Customer Payment</b>
            </h5>
            <hr
              className=" m-0 my-4   "
              style={{
                background: "black",
              }}
            />
            <div className="row mt-3">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Account </label>
                  <input
                    type="text"
                    className="form-control c2"
                    value={account}
                    onChange={(e) => {
                      setAccount(e.target.value);
                      setAccountError("");
                    }}
                  />
                  {accountError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {accountError}
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
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {customerNameError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Balance Bottle</label>
                  <input
                    type="text"
                    className="form-control c2"
                    value={balanceBottle}
                    onChange={(e) => {
                      setBalanceBottle(e.target.value);
                      setBalanceBottleError("");
                    }}
                  />
                  {balanceBottleError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {balanceBottleError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Balance Amount</label>
                  <input
                    type="number"
                    className="form-control c2"
                    value={balanceAmount}
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
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {balanceAmountError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Payment Receiver</label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setPaymentReceiver(e.target.value);
                      setPaymentReceiverError("");
                    }}
                  >
                    <option selected="">Select Salesman</option>
                    <option value={1}>rohan</option>
                    <option value={1}>uohan</option>
                    <option value={1}>eohan</option>
                    <option value={1}>mohan</option>
                  </select>
                  {paymentReceiverError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {paymentReceiverError}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label>Payment Date</label>
                  <input
                    type="date"
                    className="form-control c2"
                    value={paymentDate}
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
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {paymentDateError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Payment Mode </label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setpaymentMode(e.target.value);
                      setpaymentModeError("");
                    }}
                  >
                    <option selected="">Mobile Wallet</option>
                    <option value={1}>EVC Plus</option>
                    <option value={1}>Online</option>
                    <option value={1}>Cash</option>
                    <option value={1}>eDahab</option>
                  </select>
                  {paymentModeError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {paymentModeError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Payment Received</label>
                  <input
                    type="number"
                    className="form-control c2"
                    value={paymentReceived}
                    onChange={(e) => {
                      setPaymentReceived(e.target.value);
                      setPaymentReceivedError("");
                    }}
                  />
                  {paymentReceivedError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {paymentReceivedError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Tax / Discount </label>
                  <input
                    type="number"
                    className="form-control c2"
                    value={taxDiscount}
                    onChange={(e) => {
                      setTaxDiscount(e.target.value);
                      setTaxDiscountError("");
                    }}
                  />
                  {taxDiscountError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {taxDiscountError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Cheque No</label>
                  <input
                    type="text"
                    className="form-control c2"
                    value={chequeNo}
                    onChange={(e) => {
                      setChequeNo(e.target.value);
                      setChequeNoError("");
                    }}
                  />
                  {chequeNoError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {chequeNoError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Remarks</label>
                  <input
                    type="text"
                    className="form-control c2"
                    value={remarks}
                    onChange={(e) => {
                      setRemarks(e.target.value);
                      setRemarksError("");
                    }}
                  />
                  {remarksError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {remarksError}
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="d-grid gap-2 d-flex justify-content-center mt-4">
                  <button
                    className="button"
                    style={{ verticalAlign: "middle" }}
                    onClick={HandleEditCustomerPayment}
                  >
                    Save
                  </button>
                </div>
              </div>
              {/* form end */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default EditCustomerPayment;
