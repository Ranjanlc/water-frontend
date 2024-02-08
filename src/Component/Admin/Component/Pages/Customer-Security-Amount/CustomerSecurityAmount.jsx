import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./CustomerSecurityAmount.css";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import {
  addCustomerSecurity,
  getAllCustomerSecurity,
  deleteCustomerSecurity,
} from "../../../../../Redux/Features/Customer/CustomerSecurityAmountSlice";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Loader from "../../../../Loader/Loader";

const CustomerSecurityAmount = () => {
  const [date, setDate] = useState("");
  const [securityStatus, setSecurityStatus] = useState("");
  const [securityDetail, setSecurityDetail] = useState("");
  const [securityAmount, setSecurityAmount] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [totalDeposity, setTotalDeposity] = useState("");
  const [totalRefund, setTotalRefund] = useState("");
  const [balance, setBalance] = useState("");

  const [dateError, setDateError] = useState("");
  const [securityStatusError, setSecurityStatusError] = useState("");
  const [securityDetailError, setSecurityDetailError] = useState("");
  const [securityAmountError, setSecurityAmountError] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [totalDeposityError, setTotalDeposityError] = useState("");
  const [totalRefundError, setTotalRefundError] = useState("");
  const [balanceError, setBalanceError] = useState("");
  const dispatch = useDispatch();
  const { allcustomerSecurityData, loading } = useSelector(
    (state) => state.customerSecurityAmount
  );
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCustomerSecurity = useCallback(() => {
    dispatch(
      getAllCustomerSecurity((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchCustomerSecurity();
  }, [fetchCustomerSecurity]);

  const handleSubmitCustomerSecurity = () => {
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
      addCustomerSecurity({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchCustomerSecurity();
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

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const customerSecurityDeleteHandler = () => {
    dispatch(
      deleteCustomerSecurity({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchCustomerSecurity();
          handleClose();
        },
      })
    );
  };

  const filteredCustomerSecurity = allcustomerSecurityData?.filter(
    (customerSecurity) =>
      customerSecurity.customername
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

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
                <div className="col-md-7 col-sm-12 ">
                  <h5 className="">
                    <b>Customer Security</b>
                  </h5>
                </div>
                <div className="col-md-3 col-sm-12">
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
                <div className="col-md-1 col-sm-12">
                  <button
                    type="button"
                    className="btn btn-danger 
                py-1"
                  >
                    Search
                  </button>
                </div>
              </div>
              <hr
                className="m-0 mb-3 mt-3"
                style={{
                  background: "black",
                }}
              />
              <div className="row mt-4">
                <div className="col-md-3">
                  <div className="form-group">
                    <label type="date">Date</label>
                    <input
                      type="date"
                      className="form-control c2"
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
                      <option>Refund</option>
                      <option>Deposit</option>
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
                    <input
                      type="text"
                      className="form-control c2"
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
                    <input
                      type="number"
                      className="form-control c2"
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
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control c2"
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
                    <input
                      type="text"
                      className="form-control c2"
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
                    <input
                      type="text"
                      className="form-control c2"
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
                    <input
                      type="text"
                      className="form-control c2"
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
                <div className="d-grid gap-2 d-flex justify-content-center mt-4 mb-3">
                  <button
                    className="button"
                    style={{ verticalAlign: "middle" }}
                    onClick={handleSubmitCustomerSecurity}
                  >
                    <span>Save</span>
                  </button>
                </div>

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
                              style={{ paddingLeft: "3rem" }}
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
                              Security Status
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "2rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Security Detail
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "3rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Security Amount
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "3rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Customer Name
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "4rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Address
                            </th>
                            <th
                              scope="col"
                              className="text-center"
                              style={{
                                paddingLeft: "5rem",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Total Deposity
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "3rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Total Refund
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "2rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Balance
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "3rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredCustomerSecurity?.length === 0 ? (
                            <td colSpan={8} className="text-center mt-2">
                              No Amount Details Found
                            </td>
                          ) : (
                            <>
                              {filteredCustomerSecurity?.map(
                                (customersecurity, i) => (
                                  <tr key={i}>
                                    <td
                                      className="text-center"
                                      style={{ paddingLeft: "3rem" }}
                                    >
                                      {customersecurity.date}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{ paddingLeft: 29 }}
                                    >
                                      {customersecurity.securitystatus}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{ paddingLeft: "4rem" }}
                                    >
                                      {customersecurity.securitydetails}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customersecurity.securityamount}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{ paddingLeft: 29 }}
                                    >
                                      {customersecurity.customername}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{ paddingLeft: "3rem" }}
                                    >
                                      {customersecurity.address}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "4rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customersecurity.totaldeposity}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{ paddingLeft: "4rem" }}
                                    >
                                      {customersecurity.totalrefund}
                                    </td>
                                    <td className="text-center">
                                      {customersecurity.balance}
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
                                            to={`/admin/edit_customer_security_amount/${customersecurity._id}`}
                                            style={{ textDecoration: "none" }}
                                          >
                                            <i className="ri-pencil-line" />
                                          </Link>
                                        </div>
                                        <div
                                          style={{ cursor: "pointer" }}
                                          className="delete_icon"
                                          aria-label="Example icon button with a menu icon"
                                          onClick={() => {
                                            HandleOpenModal(
                                              customersecurity?._id
                                            );
                                          }}
                                        >
                                          <i className="ri-delete-bin-6-line " />
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                )
                              )}
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer Security Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={customerSecurityDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomerSecurityAmount;
