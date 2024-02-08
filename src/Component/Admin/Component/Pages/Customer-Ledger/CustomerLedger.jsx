import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./CustomerLedger.css";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import {
  addCustomerLedger,
  getAllCustomerLedger,
  deleteCustomerLedger,
} from "../../../../../Redux/Features/Customer/CustomerLedgerSlice";

import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CustomerLedger = () => {
  const [customerName, setCustomerName] = useState("");
  const [ledgerType, setLedgerType] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [securityBalance, setSecurityBalance] = useState("");
  const [outstandingBottle, setOutstandingBottle] = useState("");
  const [outstandingBalance, setOutstandingBalance] = useState("");
  const [totalSaleWaterBottle, setTotalSaleWaterBottle] = useState("");
  const [totalReturnEmptyBottle, setTotalReturnEmptyBottle] = useState("");
  const [bottleBalance, setBottleBalance] = useState("");
  const [billingAmount, setBillingAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [paymentReceived, setPaymentReceived] = useState("");
  const [tax, setTax] = useState("");
  const [balance, setBalance] = useState("");

  const [customerNameError, setCustomerNameError] = useState("");
  const [ledgerTypeError, setLedgerTypeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [contactError, setContactError] = useState("");
  const [securityBalanceError, setSecurityBalanceError] = useState("");
  const [outstandingBottleError, setOutstandingBottleError] = useState("");
  const [outstandingBalanceError, setOutstandingBalanceError] = useState("");
  const [totalSaleWaterBottleError, setTotalSaleWaterBottleError] =
    useState("");
  const [totalReturnEmptyBottleError, setTotalReturnEmptyBottleError] =
    useState("");
  const [bottleBalanceError, setBottleBalanceError] = useState("");
  const [billingAmountError, setBillingAmountError] = useState("");
  const [totalAmountError, setTotalAmountError] = useState("");
  const [paymentReceivedError, setPaymentReceivedError] = useState("");
  const [taxError, setTaxError] = useState("");
  const [balanceError, setBalanceError] = useState("");

  const dispatch = useDispatch();
  const { allcustomerLedgerData } = useSelector(
    (state) => state.customerLedger
  );
  console.log(allcustomerLedgerData);
  const { enqueueSnackbar } = useSnackbar();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCustomerLedger = useCallback(() => {
    dispatch(
      getAllCustomerLedger((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchCustomerLedger();
  }, [fetchCustomerLedger]);

  const handleSubmitCustomerLedger = () => {
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
      addCustomerLedger({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchCustomerLedger();
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

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const customerLedgerDeleteHandler = () => {
    dispatch(
      deleteCustomerLedger({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchCustomerLedger();
          handleClose();
        },
      })
    );
  };

  const filteredCustomerLedger = allcustomerLedgerData?.filter(
    (customerLedger) =>
      customerLedger.custumername
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            <div className="row">
              <div className="col-md-7 col-sm-12 ">
                <h5 className="">
                  <b>Customer Ledger</b>
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
            <div className="row mt-3">
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
                  <label>Contact </label>
                  <input
                    type="number"
                    className="form-control c2"
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
                  <input
                    type="text"
                    className="form-control c2"
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
                  <input
                    type="text"
                    className="form-control c2"
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
                  <input
                    type="text"
                    className="form-control c2"
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
              {/* Table Strat */}
              <div className="col-md-3">
                <div className="form-group">
                  <label>Total Sale Water Bottle</label>
                  <input
                    type="text"
                    className="form-control c2"
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
                  <input
                    type="text"
                    className="form-control c2"
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
                  <input
                    type="text"
                    className="form-control c2"
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
                  <input
                    type="text"
                    className="form-control c2"
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
                  <input
                    type="text"
                    className="form-control c2"
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
                  <input
                    type="text"
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
                  <label>Tax / Discount</label>
                  <input
                    type="text"
                    className="form-control c2"
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

              <div className="d-grid gap-2 d-flex justify-content-center my-4">
                <button
                  className="button"
                  style={{ verticalAlign: "middle" }}
                  onClick={handleSubmitCustomerLedger}
                >
                  <span>Save</span>
                </button>
              </div>
              {/* <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} /> */}
            </div>

            <div className="row mt-2">
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
                          Ledger Type
                        </th>

                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Security Balance
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{
                            paddingLeft: "4rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Outstanding Bottle
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Outstanding Balance
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Total Sale Water Bottle
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Total Return Empty Bottle
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{
                            paddingLeft: "4rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Bottle Balance
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Billing Amount
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Total Amount
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Payment Received
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{
                            paddingLeft: "4rem",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Tax / Discount
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Balance
                        </th>
                        <th
                          scope="col"
                          style={{ paddingLeft: "3rem", textAlign: "center" }}
                        >
                          Action{" "}
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredCustomerLedger?.length === 0 ? (
                        <h5 className="text-center mt-2">No Products Found</h5>
                      ) : (
                        <>
                          {filteredCustomerLedger?.map((customerLedger, i) => (
                            <tr key={i}>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.custumername}
                              </td>
                              <td className="text-center">
                                {customerLedger.ledgertype}
                              </td>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.address}
                              </td>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.contact}
                              </td>
                              <td className="text-center">
                                {customerLedger.securitybalance}
                              </td>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.outstandingbotal}
                              </td>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.outstandingbalance}
                              </td>
                              <td className="text-center">
                                {customerLedger.totalsalewaterbottal}
                              </td>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.totalreturnwaterbottal}
                              </td>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.bottalbalance}
                              </td>
                              <td className="text-center">
                                {customerLedger.billingamount}
                              </td>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.totalamount}
                              </td>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.paymentrecieved}
                              </td>
                              <td className="text-center">
                                {customerLedger.tax}
                              </td>
                              <td
                                className="text-center"
                                style={{ paddingLeft: "4rem" }}
                              >
                                {customerLedger.balance}
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
                                      to={`/admin/edit_customer_ledger/${customerLedger._id}`}
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
                                        HandleOpenModal(customerLedger?._id);
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
          </div>
        </section>
      </main>
      {/* End #main */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Customer Ledger</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={customerLedgerDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomerLedger;
