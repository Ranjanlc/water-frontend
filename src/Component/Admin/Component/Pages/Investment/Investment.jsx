import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import "./Investment.css";
// import { TbGitBranchDeleted } from "react-icons/tb";

import {
  addInvestment,
  getAllInvestment,
  deleteInvestment,
} from "../../../../../Redux/Features/Expenditure/InvestmentSlice";

import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Loader from "../../../../Loader/Loader";

const Investment = () => {
  const [investor, setInvestor] = useState("");
  const [investmentDetail, setInvestmentDetail] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [investorError, setInvestorError] = useState("");
  const [investmentDetailError, setInvestmentDetailError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [dateError, setDateError] = useState("");

  const dispatch = useDispatch();
  const { allInvestmentData, loading } = useSelector(
    (state) => state.addinvestment
  );

  const { enqueueSnackbar } = useSnackbar();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchInvestment = useCallback(() => {
    dispatch(
      getAllInvestment((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchInvestment();
  }, [fetchInvestment]);

  const handleSubmitInvestment = () => {
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
      addInvestment({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchInvestment();
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

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const investmentDeleteHandler = () => {
    dispatch(
      deleteInvestment({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchInvestment();
          handleClose();
        },
      })
    );
  };

  //   const filteredInvestment = allInvestmentData?.filter((investment) =>
  //   investment.investorName.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredInvestor = allInvestmentData?.filter((investment) =>
    investment.investorName?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(allInvestmentData);

  // const data = async=()=>{
  //         return QueryParametr =  allInvestmentData?.filter((investment) =>
  //         investment.investorName.toLowerCase().includes(searchTerm.toLowerCase())
  //         );
  // }

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <main id="main" className="main">
          <section className="section">
            <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
              <div className="row">
                <div className="col-md-9 col-sm-12 ">
                  <h5 className="">
                    <b>Investment</b>
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
                {/* <div className='col-md-1 col-sm-12'>
                                <button type="button" className="btn btn-danger py-1">
                                    Search
                                </button>
                            </div> */}
              </div>
              <hr
                className=" m-0 mb-2   "
                style={{
                  background: "black",
                }}
              />
              <h5 className="m-0 p-0">
                <b>Add New Investment</b>
              </h5>
              <div className="row">
                <div
                  className=" col-sm-12  col-md-3 "
                  style={{ lineHeight: "1rem" }}
                >
                  <label
                    style={{ marginTop: "1.3rem" }}
                    htmlFor="specificSizeSelect"
                  >
                    Investor Name
                  </label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Investor Name"
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
                <div
                  className=" col-sm-12  col-md-3 "
                  style={{ lineHeight: "1rem" }}
                >
                  <label
                    style={{ marginTop: "1.3rem" }}
                    htmlFor="specificSizeSelect"
                  >
                    Investment Detail
                  </label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Enter discription"
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
                <div
                  className=" col-sm-12  col-md-3 "
                  style={{ lineHeight: "1rem" }}
                >
                  <label
                    style={{ marginTop: "1.3rem" }}
                    htmlFor="specificSizeSelect"
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control a1"
                    placeholder="Enter amount"
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
                <div
                  className=" col-sm-12  col-md-3 "
                  style={{ lineHeight: "1rem" }}
                >
                  <label
                    style={{ marginTop: "1.3rem" }}
                    htmlFor="specificSizeSelect"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control a1"
                    placeholder="Enter amount"
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
                <div className=" d-flex justify-content-center mt-4">
                  {/* <button className="button py-1 ">
                                    <span>Save New Investment</span>
                                </button> */}

                  <button
                    type="button"
                    class="btn btn-success"
                    style={{ backgroundColor: "rgb(26, 156, 128)" }}
                    onClick={handleSubmitInvestment}
                  >
                    Save New Investment
                  </button>
                </div>
              </div>
              <hr
                className=" m-0 mb-3 mt-4   "
                style={{
                  background: "black",
                }}
              />
              <div className="row mt-3">
                <div
                  className=" col-md-3 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    From Date
                  </label>
                  <input
                    type="date"
                    className="form-control c2"
                    placeholder=""
                  />
                </div>
                <div
                  className="  col-md-3 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    To Date
                  </label>
                  <input
                    type="date"
                    className="form-control c2"
                    placeholder="Address"
                  />
                </div>
                {/* <div className="col-md-3 ">
                                <input
                                    type="text"
                                    className="form-control a1"
                                    style={{ marginTop: "2.5rem" }}
                                    placeholder="Search"
                                />
                            </div> */}
              </div>
              {/* form end */}
              {/* Table Strat */}
              <h5 className="mt-4">
                <b>Investment Details</b>
              </h5>
              <hr />
              <div className="row">
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
                            style={{ paddingLeft: "4rem" }}
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
                            Date
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Investor Name
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Investment Detail
                          </th>
                          <th
                            scope="col "
                            style={{
                              paddingLeft: "7rem",
                              whiteSpace: "nowrap",
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
                        {filteredInvestor?.length === 0 ? (
                          <td
                            colSpan={8}
                            className="text-center mt-2"
                            style={{ color: "#10c2a7" }}
                          >
                            No Investment Details Found
                          </td>
                        ) : (
                          <>
                            {filteredInvestor?.map((newInvestment, i) => (
                              <tr key={i}>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {i + 1}
                                </td>
                                <td
                                  className="text-center"
                                  style={{
                                    paddingLeft: "3rem",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {newInvestment.date}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "3rem" }}
                                >
                                  {newInvestment.investorName}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "3rem" }}
                                >
                                  {newInvestment.investmentDetail}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "6rem" }}
                                >
                                  {newInvestment.amount}
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
                                        to={`/admin/EditInvestment/${newInvestment._id}`}
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
                                          HandleOpenModal(newInvestment?._id);
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
                <div
                  className=" col-sm-12  col-md-3"
                  style={{ lineHeight: "2rem" }}
                >
                  <label
                    style={{ marginTop: "1.3rem" }}
                    htmlFor="specificSizeSelect"
                  >
                    Total Investment:
                  </label>
                  <label
                    style={{ marginTop: "1.3rem" }}
                    htmlFor="specificSizeSelect"
                  >
                    0
                  </label>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Investor</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={investmentDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Investment;
