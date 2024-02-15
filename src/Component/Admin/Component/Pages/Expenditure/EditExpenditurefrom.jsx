import React, { useCallback, useEffect, useState } from "react";
import './Expenditure.css'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";


import {
    getSingleExpenditure,
    updateExpenditure,
  
  } from "../../../../../Redux/Features/Expenditure/ExpenditureSlice";
  import { useSnackbar } from "notistack";

function EditExpenditurefrom () {


    const { id } = useParams();
  const dispatch = useDispatch();
  
  const { allExpenditureData, loading } = useSelector((state) => state.expenditure);
  const { enqueueSnackbar } = useSnackbar();
  const data = allExpenditureData && allExpenditureData?.find((e) => e?._id === id);

  const navigate = useNavigate();

  const [expenditureHead, setExpenditureHead] = useState(data?.expenditureHead);
    const [date, setDate] = useState(data?.date);
    const [expenseDescription, setExpenseDescription] = useState(data?.expenseDescription);
    const [expenseAmount, setExpenseAmount] = useState(data?.expenseAmount);

    const [expenditureHeadError, setExpenditureHeadError] = useState("");
    const [dateError, setDateError] = useState("");
    const [expenseDescriptionError, setExpenseDescriptionError] = useState("");
    const [expenseAmountError, setExpenseAmountError] = useState("");

    const fetchAllSingleExpenditure = useCallback(() => {
        dispatch(
            getSingleExpenditure({
            id: id,
            callback: (message) => {
              console.log(message);
            },
          })
        );
      }, [dispatch, id]);

      
  useEffect(() => {
    fetchAllSingleExpenditure();
  }, [fetchAllSingleExpenditure]);



  const HandleEditExpenditure = () => {

    setExpenditureHeadError("");
    setDateError("");
    setExpenseDescriptionError("");
    setExpenseAmountError("");


    if (!expenditureHead) {
        setExpenditureHeadError("Expenditure Head is Required!!");
        return;
    }
    if (!date) {
        setDateError("Date is Required!!");
        return;
    }

    if (!expenseDescription) {
        setExpenseDescriptionError("Expense Description is Required!!");
        return;
    }

    if (!expenseAmount) {
        setExpenseAmountError("Expense Amount is Required!!");
        return;
    }



let payload = {
    expenditureHead: expenditureHead,
    date: date,
    expenseDescription: expenseDescription,
    expenseAmount: expenseAmount,

};


    dispatch(
        updateExpenditure({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/expenditure");
          
          setExpenditureHeadError("");
          setDateError("");
          setExpenseDescriptionError("");
          setExpenseAmountError("");

          setExpenditureHead("");
          setDate("");
          setExpenseDescription("");
          setExpenseAmount("");
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
                            <div className="col-md-8 ">
                                <h5 className="d-inline">
                                    <b>Edit Expenditure</b>
                                </h5>
                            </div>
                         
                        </div>
                        <hr className="" style={{
                            background: 'black',
                        }} />

                        {/* <div className="row">
                            <div className="col-md-9 my-2 ">
                                <h5>
                                    <b>Add Expenditure</b>
                                </h5>
                            </div>
                            <div className="col-md-3  ">
                                <button className="button w-75" >
                                    <span>New Head</span>
                                </button>
                            </div>
                        </div> */}
                        <div className="row mt-1 p-4">
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    {" "}
                                    Expenditure Head
                                </label>
                                <select className="form-select a1" id="specificSizeSelect"
                              value={expenditureHead}
                              onChange={(e) => {
                                  setExpenditureHead(e.target.value);
                                  setExpenditureHeadError("");
                              }}>

                                    <option selected="">Select Head</option>
                                    <option >1-Lunch</option>
                                    <option>2-Tea</option>
                                </select>
                                {expenditureHeadError && (
                                        <div
                                            className="d-flex gap-2 align-items-center"
                                            style={{ color: "red" }}
                                        >
                                            <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                            {expenditureHeadError}
                                        </div>
                                    )}

                            </div>
                            
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label htmlFor="specificSizeSelect">Date</label>
                                <input type="date" className="form-control a1" placeholder="Price" 
                                
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
                                            <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                            {dateError}
                                        </div>
                                    )}
                            </div>

                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label htmlFor="specificSizeSelect">Expense Description</label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Enter discription"

                                    value={expenseDescription}
                                    onChange={(e) => {
                                        setExpenseDescription(e.target.value);
                                        setExpenseDescriptionError("");
                                    }}
                                />
                                  {expenseDescriptionError && (
                                        <div
                                            className="d-flex gap-2 align-items-center"
                                            style={{ color: "red" }}
                                        >
                                            <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                            {expenseDescriptionError}
                                        </div>
                                    )}

                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label htmlFor="specificSizeSelect">Expense Amount</label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Enter amount"

                                    value={expenseAmount}
                                    onChange={(e) => {
                                        setExpenseAmount(e.target.value);
                                        setExpenseAmountError("");
                                    }}
                                />
                                    {expenseAmountError && (
                                        <div
                                            className="d-flex gap-2 align-items-center"
                                            style={{ color: "red" }}
                                        >
                                            <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                            {expenseAmountError}
                                        </div>
                                    )}
                            </div>

                        </div>
                        <hr className=" m-0 my-4   " style={{
                            background: 'black',
                        }} />
                        {/* <div className="row mt-1">
                            <div className=" col-md-3 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Expenditure Head
                                </label>
                                <select className="form-select a1" id="specificSizeSelect">
                                    <option selected="">Select Head</option>
                                    <option value={1}>1-Lunch</option>
                                    <option value={2}>2-Tea</option>
                                </select>
                            </div>
                            <div className=" col-md-3 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    From Date
                                </label>
                                <input type="date" className="form-control a1" placeholder="" />
                            </div>
                            <div className="  col-md-3 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    To Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control a1"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="col-md-3 ">
                                <div>
                                    <input
                                        type="text"
                                        className="form-control a1"
                                        style={{ marginTop: "2.5rem" }}
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div> */}

                        <div className=" d-flex justify-content-center mt-4">
                            <button className="button  "    onClick={HandleEditExpenditure}>
                              Save 
                            </button>
                        </div>
                       
                    </div>
                </section>
            </main>

        </>
    )
}

export default EditExpenditurefrom