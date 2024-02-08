import React, { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateCustomerSecurity, getSingalCustomerSecurity } from '../../../../../Redux/Features/Customer/CustomerSecurityAmountSlice';
import { useSnackbar } from "notistack";


const EditCustomerSecurityAmount = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const {allcustomerSecurityData} = useSelector((state)=> state.customerSecurityAmount);
  const { enqueueSnackbar } = useSnackbar();
  const data = allcustomerSecurityData && allcustomerSecurityData?.find((e) => e?._id === id);
  console.log(data)
  const navigate = useNavigate();

  const [date, setDate] = useState(data?.date);
  const [securityStatus, setSecurityStatus] = useState(data?.securitystatus);
  const [securityDetail, setSecurityDetail] = useState(data?.securitydetails);
  const [securityAmount, setSecurityAmount] = useState(data?.securityamount);
  const [customerName, setCustomerName] = useState(data?.customername);
  const [address, setAddress] = useState(data?.address);
  const [totalDeposity, setTotalDeposity] = useState(data?.totaldeposity);
  const [totalRefund, setTotalRefund] = useState(data?.totalrefund);
  const [balance, setBalance] = useState(data?.balance);

  const [dateError, setDateError] = useState("");
  const [securityStatusError, setSecurityStatusError] = useState("");
  const [securityDetailError, setSecurityDetailError] = useState("");
  const [securityAmountError, setSecurityAmountError] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [totalDeposityError, setTotalDeposityError] = useState("");
  const [totalRefundError, setTotalRefundError] = useState("");
  const [balanceError, setBalanceError] = useState("");


  const fetchSingleCustomerSecurity = useCallback(() => {
    dispatch(
      getSingalCustomerSecurity({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchSingleCustomerSecurity();
  }, [fetchSingleCustomerSecurity]);

  const HandleEditCustomerSecurity = () => {
    setDateError("");
    setSecurityStatusError("");
    setSecurityDetailError("");
    setSecurityAmountError("");
    setCustomerNameError("");
    setAddressError("");
    setTotalDeposityError("");
    setTotalRefundError("");
    setBalanceError("");

    if (!date) {
      setDateError("Date is Required!!");
      return;
    }
    if (!securityStatus) {
      setSecurityStatusError("Security Status is Required!!");
      return;
    }
    if (!securityDetail) {
      setSecurityDetailError("Security Detail Type is Required!!");
      return;
    }
    if (!securityAmount) {
      setSecurityAmountError("Security Amount is Required!!");
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
    if (!totalDeposity) {
      setTotalDeposityError("Total Deposity is Required!!");
      return;
    }
    if (!totalRefund) {
      setTotalRefundError("Total Refund is Required!!");
      return;
    }
    if (!balance) {
      setBalanceError("Balance is Required!!");
      return;
    }

    let payload = {
      date: date,
      securitystatus: securityStatus,
      securitydetails: securityDetail,
      securityamount: securityAmount,
      customername: customerName,
      address: address,
      totaldeposity: totalDeposity,
      totalrefund: totalRefund,
      balance: balance,
    };

    dispatch(
      updateCustomerSecurity({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/customer_security_amount");
          fetchSingleCustomerSecurity();
          setDate("");
          setSecurityStatus("");
          setSecurityDetail("");
          setSecurityAmount("");
          setCustomerName("");
          setAddress("");
          setTotalDeposity("");
          setTotalRefund("");
          setBalance("");

          setDateError("");
          setSecurityStatusError("");
          setSecurityDetailError("");
          setSecurityAmountError("");
          setCustomerNameError("");
          setAddressError("");
          setTotalDeposityError("");
          setTotalRefundError("");
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
        <b>Edit Customer Security</b>
      </h5>
      <hr className="m-0 mb-2 mt-3"
              style={{
                background: 'black',
              }} />
      <div className="row mt-4">
      
        <div className="col-md-3">
          <div className="form-group">
            <label type="date">Date</label>
            <input type="date" className="form-control c2"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setDateError("");
            }}
            />
            {dateError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {dateError}
                    </div>
                  )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Security Status</label>
            <select
              className="form-select c2"
              aria-label="Default select example"
              value={securityStatus}
              onChange={(e) => {
                setSecurityStatus(e.target.value);
                setSecurityStatusError("");
              }}
            >
              <option selected>Select</option>
              <option >Refund</option>
              <option >Deposit</option>
             
            </select>
            {securityStatusError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {securityStatusError}
                    </div>
                  )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Security Detail</label>
            <input type="text" className="form-control c2"
             value={securityDetail}
             onChange={(e) => {
               setSecurityDetail(e.target.value);
               setSecurityDetailError("");
             }}
             />
              {securityDetailError && (
                     <div
                       className="d-flex gap-2 align-items-center"
                       style={{ color: "red" }}
                     >
                       <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                       {securityDetailError}
                     </div>
                   )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Security Amount</label>
            <input type="number" className="form-control c2"
              value={securityAmount}
              onChange={(e) => {
                setSecurityAmount(e.target.value);
                setSecurityAmountError("");
              }}
             />
              {securityAmountError && (
                     <div
                       className="d-flex gap-2 align-items-center"
                       style={{ color: "red" }}
                     >
                       <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                       {securityAmountError}
                     </div>
                   )}
          </div>
        </div>
      
     
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
            <label>Total Deposity</label>
            <input type="text" className="form-control c2"
            value={totalDeposity}
            onChange={(e) => {
              setTotalDeposity(e.target.value);
              setTotalDeposityError("");
            }}
           />
           {totalDeposityError && (
                   <div
                     className="d-flex gap-2 align-items-center"
                     style={{ color: "red" }}
                   >
                     <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                     {totalDeposityError}
                   </div>
                 )}
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label>Total Refund</label>
            <input type="text" className="form-control c2"
             value={totalRefund}
             onChange={(e) => {
               setTotalRefund(e.target.value);
               setTotalRefundError("");
             }}
            />
             {totalRefundError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {totalRefundError}
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
        <div className="d-grid gap-2 d-flex justify-content-center mt-4">
          <button className="button" style={{ verticalAlign: "middle" }}
          onClick={HandleEditCustomerSecurity}>
            <span>Save</span>
          </button>
        </div>
        {/* form end */}
        {/* Table Strat */}
        {/* <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} /> */}
       
      </div>
    </div>
  </section>
</main>
</>
  )
}

export default EditCustomerSecurityAmount