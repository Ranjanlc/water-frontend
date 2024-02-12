import React, { useState, useEffect, useCallback } from "react";
import './AddNewBank.css'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSingleNewBank, updateNewBank }
 from "../../../../../Redux/Features/Transection/AddNewBankSlice";
import { useSnackbar } from "notistack";



const EditBank = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { allNewBankData } = useSelector((state) => state.addNewBank);
  const { enqueueSnackbar } = useSnackbar();
  const data =
  allNewBankData && allNewBankData?.find((e) => e?._id === id);
  const navigate = useNavigate();

  const [bankName, setBankName] = useState(data?.bankname);
  const [accountTitle, setAccountTitle] = useState(data?.accounttitle);
  const [accountNumber, setAccountNumber] = useState(data?.accountnumber);
  const [openingBalance, setOpeningBalance] = useState(data?.openinigbalance);

  const [bankNameError, setBankNameError] = useState("");
  const [accountTitleError, setAccountTitleError] = useState("");
  const [accountNumberError, setAccountNumberError] = useState("");
  const [openingBalanceError, setOpeningBalanceError] = useState("");

  
  const fetchSingleNewBank = useCallback(() => {
    dispatch(
      getSingleNewBank({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchSingleNewBank();
  }, [fetchSingleNewBank]);

  const HandleEditNewBank = () => {
    setBankNameError("");
    setAccountTitleError("");
    setAccountNumberError("");
    setOpeningBalanceError("");
   

    if (!bankName) {
      setBankNameError("Bank Name is Required!!");
      return;
    }
    if (!accountTitle) {
      setAccountTitleError("Title is Required!!");
      return;
    }
    if (!accountNumber) {
      setAccountNumberError("Account Number Type is Required!!");
      return;
    }
    if (!openingBalance) {
      setOpeningBalanceError("Opening Balance is Required!!");
      return;
    }

    let payload = {
      bankname: bankName,
      accounttitle: accountTitle,
      accountnumber: accountNumber,
      openinigbalance: openingBalance,
    };

    dispatch(
      updateNewBank({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/add_new_bank");
          setBankName("");
          setAccountTitle("");
          setAccountNumber("");
          setOpeningBalance("");
          
          setBankNameError("");
          setAccountTitleError("");
          setAccountNumberError("");
          setOpeningBalanceError("");
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
         <b>Edit Bank</b>
       </h5>
       <hr style={{ background: 'black', }} />
      
         <div className="row ">
         <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Bank Name </label>
              <input type="text" className="form-control c2" 
              value={bankName}
              onChange={(e) => {
                setBankName(e.target.value);
                setBankNameError("");
              }}
              />
               {bankNameError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {bankNameError}
                        </div>
                      )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Account Title </label>
              <input type="text" className="form-control c2"
               value={accountTitle}
               onChange={(e) => {
                 setAccountTitle(e.target.value);
                 setAccountTitleError("");
               }}
               />
                {accountTitleError && (
                         <div
                           className="d-flex gap-2 align-items-center"
                           style={{ color: "red" }}
                         >
                           <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                           {accountTitleError}
                         </div>
                       )}
            </div>
          </div>
         </div>
         <div className="row ">
         <div className="col-md-6">
            <div className="form-group">
              <label className="form-label"> Account Number </label>
              <input type="text" className="form-control c2"
              value={accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
                setAccountNumberError("");
              }}
              />
               {accountNumberError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {accountNumberError}
                        </div>
                      )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label"> Opening Balance </label>
              <input type="text" className="form-control c2"
               value={openingBalance}
               onChange={(e) => {
                 setOpeningBalance(e.target.value);
                 setOpeningBalanceError("");
               }}
               />
                {openingBalanceError && (
                         <div
                           className="d-flex gap-2 align-items-center"
                           style={{ color: "red" }}
                         >
                           <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                           {openingBalanceError}
                         </div>
                       )}
            </div>
          </div>
         </div>
         <div className="d-grid gap-2 d-flex justify-content-center mt-3">
           <button className="button" style={{ verticalAlign: "middle" }}
           onClick={HandleEditNewBank}
           >
             <span>Save</span>
           </button>
           {/* <button class="button" style="vertical-align:middle"><span>Cancel</span></button> */}
         </div>
      
       
     </div>
   </section>
 </main>
 
    </>

  )
}

export default EditBank