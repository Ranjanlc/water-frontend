import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AddCustomerPayment.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCustomerPayment,
  deleteNewCustomerPayment,
  getAllCustomerPayment,
} from "../../../../../Redux/Features/Customer/AddCustomerPaymentSlice";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import Loader from "../../../../Loader/Loader";

export const AddCustomerPayment = () => {
  const [account, setAccount] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [balanceBottle, setBalanceBottle] = useState("");
  const [balanceAmount, setBalanceAmount] = useState("");
  const [paymentReceiver, setPaymentReceiver] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentMode, setpaymentMode] = useState("");
  const [paymentReceived, setPaymentReceived] = useState("");
  const [taxDiscount, setTaxDiscount] = useState("");
  const [chequeNo, setChequeNo] = useState("");
  const [remarks, setRemarks] = useState("");

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

  const dispatch = useDispatch();
  const { allCustomerPaymentData, loading } = useSelector(
    (state) => state.addCustomerPayment
  );

  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNewCustomers = useCallback(() => {
    dispatch(
      getAllCustomerPayment((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchNewCustomers();
  }, [fetchNewCustomers]);

  const handleSubmitCustomer = () => {
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
      paymentrecieved: paymentReceived,
      tax: taxDiscount,
      checkno: chequeNo,
      remark: remarks,
    };

    dispatch(
      addNewCustomerPayment({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewCustomers();
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

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const customerPaymentDeleteHandler = () => {
    dispatch(
      deleteNewCustomerPayment({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewCustomers();
          handleClose();
        },
      })
    );
  };

  const filteredCustomers = allCustomerPaymentData?.filter((customer) =>
    customer.custumername?.toLowerCase().includes(searchTerm.toLowerCase())
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
                    <b>Add Customer Payment</b>
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
              </div>
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
                      type="text"
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
                      value={paymentReceiver}
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
                      value={paymentMode}
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
                      onClick={handleSubmitCustomer}
                    >
                      Save
                    </button>
                  </div>
                </div>
                {/* form end */}
                {/* Table Strat */}
                <div className="row mt-4">
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
                              style={{
                                paddingLeft: "4rem",
                                whiteSpace: "nowrap",
                              }}
                            >
                              SNO.
                            </th>

                            <th
                              scope="col"
                              className="text-center"
                              style={{
                                paddingLeft: "4rem",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Account
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
                                paddingLeft: "2rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Balance Bottle
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "3rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Balance Amount
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "3rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Payment Receiver
                            </th>
                            {/* <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap"
                            }}
                          >
                            Select Bank
                          </th> */}

                            <th
                              scope="col"
                              style={{
                                paddingLeft: "3rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Payment Date
                            </th>
                            <th
                              scope="col "
                              style={{
                                paddingLeft: "3rem",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Payment Mode{" "}
                            </th>
                            <th
                              scope="col "
                              style={{
                                paddingLeft: "3rem",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Tax / Discount{" "}
                            </th>
                            <th
                              scope="col "
                              style={{
                                paddingLeft: "3rem",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Cheque No
                            </th>
                            <th
                              scope="col "
                              style={{
                                paddingLeft: "2rem",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Remarks
                            </th>
                            <th
                              scope="col "
                              style={{
                                paddingLeft: "4rem",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {filteredCustomers?.length === 0 ? (
                            <td colSpan={8} className="text-center mt-2">
                              No Customer Payment Found
                            </td>
                          ) : (
                            <>
                              {filteredCustomers?.map(
                                (customerpaymentcp, i) => (
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
                                      {customerpaymentcp.account}
                                    </td>

                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customerpaymentcp.custumername}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customerpaymentcp.balancebottle}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customerpaymentcp.balanceamount}
                                    </td>

                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customerpaymentcp.paymentreciever}
                                    </td>

                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customerpaymentcp.paymentdate}
                                    </td>

                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customerpaymentcp.paymentmode}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customerpaymentcp.tax}
                                    </td>

                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customerpaymentcp.checkno}
                                    </td>

                                    <td
                                      className="text-center"
                                      style={{
                                        paddingLeft: "3rem",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {customerpaymentcp.remark}
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
                                            to={`/admin/edit_customer_payment/${customerpaymentcp._id}`}
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
                                              HandleOpenModal(
                                                customerpaymentcp?._id
                                              );
                                            }}
                                          />
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
          <Modal.Title>Delete Customer Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={customerPaymentDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddCustomerPayment;
