import React, { useState, useEffect, useCallback } from 'react'
import './CustomerLedger.css'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingalCustomerLedger, updateCustomerLedger } 
from "../../../../../Redux/Features/Customer/CustomerLedgerSlice"

import { useSnackbar } from "notistack";


const EditCustomerLedger = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const {allcustomerLedgerData} = useSelector((state)=> state.customerLedger);
  const { enqueueSnackbar } = useSnackbar();
  const data = allcustomerLedgerData && allcustomerLedgerData?.find((e) => e?._id === id);
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState(data?.custumername);
  const [ledgerType, setLedgerType] = useState(data?.ledgertype);
  const [address, setAddress] = useState(data?.address);
  const [contact, setContact] = useState(data?.contact);
  const [securityBalance, setSecurityBalance] = useState(data?.securitybalance);
  const [outstandingBottle, setOutstandingBottle] = useState(data?.outstandingbotal);
  const [outstandingBalance, setOutstandingBalance] = useState(data?.outstandingbalance);
  const [totalSaleWaterBottle, setTotalSaleWaterBottle] = useState(data?.totalsalewaterbottal);
  const [totalReturnEmptyBottle, setTotalReturnEmptyBottle] = useState(data?.totalreturnwaterbottal);
  const [bottleBalance, setBottleBalance] = useState(data?.bottalbalance);
  const [billingAmount, setBillingAmount] = useState(data?.billingamount);
  const [totalAmount, setTotalAmount] = useState(data?.totalamount);
  const [paymentReceived, setPaymentReceived] = useState(data?.paymentrecieved);
  const [tax, setTax] = useState(data?.tax);
  const [balance, setBalance] = useState(data?.balance);

  const [customerNameError, setCustomerNameError] = useState("");
  const [ledgerTypeError, setLedgerTypeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [contactError, setContactError] = useState("");
  const [securityBalanceError, setSecurityBalanceError] = useState("");
  const [outstandingBottleError, setOutstandingBottleError] = useState("");
  const [outstandingBalanceError, setOutstandingBalanceError] = useState("");
  const [totalSaleWaterBottleError, setTotalSaleWaterBottleError] = useState("");
  const [totalReturnEmptyBottleError, setTotalReturnEmptyBottleError] = useState("");
  const [bottleBalanceError, setBottleBalanceError] = useState("");
  const [billingAmountError, setBillingAmountError] = useState("");
  const [totalAmountError, setTotalAmountError] = useState("");
  const [paymentReceivedError, setPaymentReceivedError] = useState("");
  const [taxError, setTaxError] = useState("");
  const [balanceError, setBalanceError] = useState("");

  const fetchSingleCustomerLedger = useCallback(() => {
    dispatch(
      getSingalCustomerLedger({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchSingleCustomerLedger();
  }, [fetchSingleCustomerLedger]);

  const HandleEditCustomerLedger = () => {
    setCustomerNameError("");
    setLedgerTypeError("");
    setAddressError("");
    setContactError("");
    setSecurityBalanceError("");
    setOutstandingBottleError("");
    setOutstandingBalanceError("");
    setTotalSaleWaterBottleError("");
    setTotalReturnEmptyBottleError("");
    setBottleBalanceError("");
    setBillingAmountError("");
    setTotalAmountError("");
    setPaymentReceivedError("");
    setTaxError("");
    setBalanceError("");

    if (!customerName) {
      setCustomerNameError("Customer Name is Required!!");
      return;
    }
    if (!ledgerType) {
      setLedgerTypeError("Ledger Type is Required!!");
      return;
    }
    if (!address) {
      setAddressError("Address is Required!!");
      return;
    }
    if (!contact) {
      setContactError("Contact is Required!!");
      return;
    }
    if (!securityBalance) {
      setSecurityBalanceError("Security Balance is Required!!");
      return;
    }
    if (!outstandingBottle) {
      setOutstandingBottleError("Outstanding Bottle Type is Required!!");
      return;
    }
    if (!outstandingBalance) {
      setOutstandingBalanceError("Outstanding Balance is Required!!");
      return;
    }
    if (!totalSaleWaterBottle) {
      setTotalSaleWaterBottleError("Total Sale Water Bottle is Required!!");
      return;
    }
    if (!totalReturnEmptyBottle) {
      setTotalReturnEmptyBottleError("Total Return Empty Bottle is Required!!");
      return;
    }
    if (!bottleBalance) {
      setBottleBalanceError("Bottle Balance is Required!!");
      return;
    }
    if (!billingAmount) {
      setBillingAmountError("Billing Amount is Required!!");
      return;
    }
    if (!totalAmount) {
      setTotalAmountError("Total Amount is Required!!");
      return;
    }
    if (!paymentReceived) {
      setPaymentReceivedError("Payment Received is Required!!");
      return;
    }
    if (!tax) {
      setTaxError("Tax is Required!!");
      return;
    }
    if (!balance) {
      setBalanceError("Balance is Required!!");
      return;
    }

    let payload = {
      custumername: customerName,
      ledgertype: ledgerType,
      address: address,
      contact: contact,
      securitybalance: securityBalance,
      outstandingbotal: outstandingBottle,
      outstandingbalance: outstandingBalance,
      totalsalewaterbottal: totalSaleWaterBottle,
      totalreturnwaterbottal: totalReturnEmptyBottle,
      bottalbalance: bottleBalance,
      billingamount: billingAmount,
      totalamount: totalAmount,
      paymentrecieved: paymentReceived,
      tax: tax,
      balance: balance,
    };

    dispatch(
      updateCustomerLedger({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/customer_ledger");
          setCustomerName("");
          setLedgerType("");
          setAddress("");
          setContact("");
          setSecurityBalance("");
          setOutstandingBottle("");
          setOutstandingBalance("");
          setTotalSaleWaterBottle("");
          setTotalReturnEmptyBottle("");
          setBottleBalance("");
          setBillingAmount("");
          setTotalAmount("");
          setPaymentReceived("");
          setTax("");
          setBalance("");

          setCustomerNameError("");
          setLedgerTypeError("");
          setAddressError("");
          setContactError("");
          setSecurityBalanceError("");
          setOutstandingBottleError("");
          setOutstandingBalanceError("");
          setTotalSaleWaterBottleError("");
          setTotalReturnEmptyBottleError("");
          setBottleBalanceError("");
          setBillingAmountError("");
          setTotalAmountError("");
          setPaymentReceivedError("");
          setTaxError("");
          setBalanceError("");
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
            <b>Edit Customer Ledger</b>
          </h5>
          <hr className="m-0 mb-3 mt-3"
              style={{
                background: 'black',
              }} />
          <div className="row mt-3">
            <div className="col-md-3">
              <div className="form-group">
                <label>Customer Name/ID</label>
                <input type="text" className="form-control c2" 
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
                <label>Ledger Type</label>
                <select
                  className="form-select c2"
                  aria-label="Default select example"
                  value={ledgerType}
                  onChange={(e) => {
                    setLedgerType(e.target.value);
                    setLedgerTypeError("");
                  }}
                >
                  <option selected>All Date Wiste Ledger</option>
                  <option>All Month wise Ledger</option>
                  <option>Form and To (Date Wise Ledger)</option>
                  <option>Form and To (Month Wise Ledger)</option>
                </select>
                {ledgerTypeError && (
                  <div
                    className="d-flex gap-2 align-items-center"
                    style={{ color: "red" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                    {ledgerTypeError}
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control c2"
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
                  <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                  {addressError}
                </div>
              )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Contact </label>
                <input type="text" className="form-control c2"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  setContactError("");
                }}
              />
              {contactError && (
                <div
                  className="d-flex gap-2 align-items-center"
                  style={{ color: "red" }}
                >
                  <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                  {contactError}
                </div>
              )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Security Balance</label>
                <input type="text" className="form-control c2"
                 value={securityBalance}
                 onChange={(e) => {
                   setSecurityBalance(e.target.value);
                   setSecurityBalanceError("");
                 }}
               />
               {securityBalanceError && (
                 <div
                   className="d-flex gap-2 align-items-center"
                   style={{ color: "red" }}
                 >
                   <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                   {securityBalanceError}
                 </div>
               )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Outstanding Bottle</label>
                <input type="text" className="form-control c2" 
                value={outstandingBottle}
                onChange={(e) => {
                  setOutstandingBottle(e.target.value);
                  setOutstandingBottleError("");
                }}
              />
              {outstandingBottleError && (
                <div
                  className="d-flex gap-2 align-items-center"
                  style={{ color: "red" }}
                >
                  <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                  {outstandingBottleError}
                </div>
              )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Outstanding Balance</label>
                <input type="text" className="form-control c2" 
               value={outstandingBalance}
               onChange={(e) => {
                 setOutstandingBalance(e.target.value);
                 setOutstandingBalanceError("");
               }}
             />
             {outstandingBalanceError && (
               <div
                 className="d-flex gap-2 align-items-center"
                 style={{ color: "red" }}
               >
                 <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                 {outstandingBalanceError}
               </div>
             )}
              </div>
            </div>
            {/* form end */}
           
            <div className="col-md-3">
              <div className="form-group">
                <label>Total Sale Water Bottle</label>
                <input type="text" className="form-control c2"
                 value={totalSaleWaterBottle}
                 onChange={(e) => {
                   setTotalSaleWaterBottle(e.target.value);
                   setTotalSaleWaterBottleError("");
                 }}
               />
               {totalSaleWaterBottleError && (
                 <div
                   className="d-flex gap-2 align-items-center"
                   style={{ color: "red" }}
                 >
                   <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                   {totalSaleWaterBottleError}
                 </div>
               )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Total Return Empty Bottle</label>
                <input type="text" className="form-control c2"
                value={totalReturnEmptyBottle}
                onChange={(e) => {
                  setTotalReturnEmptyBottle(e.target.value);
                  setTotalReturnEmptyBottleError("");
                }}
              />
              {totalReturnEmptyBottleError && (
                <div
                  className="d-flex gap-2 align-items-center"
                  style={{ color: "red" }}
                >
                  <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                  {totalReturnEmptyBottleError}
                </div>
              )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Bottle Balance</label>
                <input type="text" className="form-control c2"
                value={bottleBalance}
                onChange={(e) => {
                  setBottleBalance(e.target.value);
                  setBottleBalanceError("");
                }}
              />
              {bottleBalanceError && (
                <div
                  className="d-flex gap-2 align-items-center"
                  style={{ color: "red" }}
                >
                  <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                  {bottleBalanceError}
                </div>
              )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Billing Amount</label>
                <input type="text" className="form-control c2" 
                 value={billingAmount}
                 onChange={(e) => {
                   setBillingAmount(e.target.value);
                   setBillingAmountError("");
                 }}
               />
               {billingAmountError && (
                 <div
                   className="d-flex gap-2 align-items-center"
                   style={{ color: "red" }}
                 >
                   <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                   {billingAmountError}
                 </div>
               )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Total Amount</label>
                <input type="text" className="form-control c2"
                 value={totalAmount}
                 onChange={(e) => {
                   setTotalAmount(e.target.value);
                   setTotalAmountError("");
                 }}
               />
               {totalAmountError && (
                 <div
                   className="d-flex gap-2 align-items-center"
                   style={{ color: "red" }}
                 >
                   <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                   {totalAmountError}
                 </div>
               )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Payment Received</label>
                <input type="text" className="form-control c2" 
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
                <label>Tax / Discount</label>
                <input type="text" className="form-control c2" 
                value={tax}
                onChange={(e) => {
                  setTax(e.target.value);
                  setTaxError("");
                }}
              />
              {taxError && (
                <div
                  className="d-flex gap-2 align-items-center"
                  style={{ color: "red" }}
                >
                  <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                  {taxError}
                </div>
              )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Balance</label>
                <input type="text" className="form-control c2"
                value={balance}
                onChange={(e) => {
                  setBalance(e.target.value);
                  setBalanceError("");
                }}
              />
              {balanceError && (
                <div
                  className="d-flex gap-2 align-items-center"
                  style={{ color: "red" }}
                >
                  <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                  {balanceError}
                </div>
              )}
              </div>
            </div>

            {/* <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} />
           */}
           
            <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button className="button" style={{ verticalAlign: "middle" }}
              onClick={HandleEditCustomerLedger} >
                <span>Save</span>
              </button>
              {/* <button class="button" style="vertical-align:middle"><span>Edite</span></button> */}
              {/* <button class="button" style="vertical-align:middle; background-color: #db0909;"><span>Refress</span></button> */}
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* End #main */}
  </>
  )
}

export default EditCustomerLedger