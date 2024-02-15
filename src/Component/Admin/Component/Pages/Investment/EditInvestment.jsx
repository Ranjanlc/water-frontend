import React from 'react'
import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSingleInvestment, updateInvestment }
 from '../../../../../Redux/Features/Expenditure/InvestmentSlice';
import { useSnackbar } from "notistack";


const EditInvestment = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { allInvestmentData } = useSelector((state) => state.addinvestment);
    const { enqueueSnackbar } = useSnackbar();

    const data =
    allInvestmentData && allInvestmentData?.find((e) => e?._id === id);
  const navigate = useNavigate();

  const [investor, setInvestor] = useState(data?.investorName);
  const [investmentDetail, setInvestmentDetail] = useState(data?.investmentDetail);
  const [amount, setAmount] = useState(data?.amount);
  const [date, setDate] = useState(data?.date);

  const [investorError, setInvestorError] = useState("");
  const [investmentDetailError, setInvestmentDetailError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [dateError, setDateError] = useState("");

  const fetchSingleInvestment = useCallback(() => {
    dispatch(
      getSingleInvestment({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchSingleInvestment();
  }, [fetchSingleInvestment]);

  const HandleEditInvestment = () => {
    setInvestorError("");
    setInvestmentDetailError("");
    setAmountError("");
    setDateError("");

    if (!investor) {
        setInvestorError("Investor Name is Required!!");
        return;
      }
      if (!investmentDetail) {
        setInvestmentDetailError("Investment Detail is Required!!");
        return;
      }
      if (!amount) {
        setAmountError("Amount Detail is Required!!");
        return;
      }
    if (!date) {
      setDateError("Date is Required!!");
      return;
    }

    let payload = {
        investorName: investor,
        investmentDetail: investmentDetail,
        amount: amount,
        date: date,
    };

    dispatch(
      updateInvestment({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/investment");
          setInvestor("");
          setInvestmentDetail("");
          setAmount("");
          setDate("");
          
          setInvestorError("");
          setInvestmentDetailError("");
          setAmountError("");
          setDateError("");
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
                                    <b>Edit Investment</b>
                                </h5>
                            </div>
                        </div>
                        <hr className=" m-0 mb-3   " style={{
                            background: 'black',
                        }} />
                        <h5 className="m-0 p-0">
                            <b>Add New Investment</b>
                        </h5>
                        <div className="row">
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "1rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Investor Name
                                </label>
                                <input type="text" className="form-control a1" placeholder="Investor Name"
                                value={investor}
                                onChange={(e) => {
                                  setInvestor(e.target.value);
                                  setInvestorError("");
                                }}
                              />
                              {investorError && (
                                <div
                                  className="d-flex gap-2 align-items-center"
                                  style={{ color: "red" }}
                                >
                                  <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                  {investorError}
                                </div>
                              )}
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "1rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Investment Detail
                                </label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Enter Investment Detail"
                                    value={investmentDetail}
                                    onChange={(e) => {
                                      setInvestmentDetail(e.target.value);
                                      setInvestmentDetailError("");
                                    }}
                                  />
                                  {investmentDetailError && (
                                    <div
                                      className="d-flex gap-2 align-items-center"
                                      style={{ color: "red" }}
                                    >
                                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                                      {investmentDetailError}
                                    </div>
                                  )}
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "1rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    className="form-control a1"
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
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "1rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control a1"
                                    placeholder="Enter Date"
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

                        </div>
                       
                        {/* form end */}
                        {/* Table Strat */}
                        <div className=" d-flex justify-content-center mt-4">
                            <button className="button "
                            onClick={HandleEditInvestment}
                            >
                                <span>Save </span>
                            </button>
                        </div>



                    </div>
                </section>
            </main>
        </>
    )
}

export default EditInvestment