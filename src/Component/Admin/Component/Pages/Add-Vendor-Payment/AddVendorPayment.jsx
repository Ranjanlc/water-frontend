import { useCallback, useEffect, useState } from "react";
import "./AddVendorPayment.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import {
  addPTVendorPayment,
  deleteVendorPayment,
  getAllVendorPayment,
} from "../../../../../Redux/Features/Vendor/AddVendorPaymentSlice";
import Loader from "../../../../Loader/Loader";

const AddVendorPayment = () => {
  const [accountVendor, setAccountVendor] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [balanceAmount, setBalanceAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [payment, setPayment] = useState("");
  const [vendorChequeNo, setVendorChequeNo] = useState("");
  const [vendorRemark, setVendorRemark] = useState("");

  const [accountVendorError, setAccountVendorError] = useState("");
  const [vendorNameError, setVendorNameError] = useState("");
  const [balanceAmountError, setBalanceAmountError] = useState("");
  const [paymentDateError, setPaymentDateError] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [vendorChequeNoError, setVendorChequeNoError] = useState("");
  const [vendorRemarkError, setVendorRemarkError] = useState("");

  const dispatch = useDispatch();

  const { allVendorPaymentData, loading } = useSelector(
    (state) => state.addVendorPayment
  );
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchVendorsPayment = useCallback(() => {
    dispatch(
      getAllVendorPayment((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchVendorsPayment();
  }, [fetchVendorsPayment]);

  const handleSubmitMyPayment = () => {
    setAccountVendorError("");
    setVendorNameError("");
    setBalanceAmountError("");
    setPaymentDateError("");
    setPaymentError("");
    setVendorChequeNoError("");
    setVendorRemarkError("");

    if (!accountVendor) {
      setAccountVendorError("Account  is Required!!");
      return;
    }
    if (!vendorName) {
      setVendorNameError("Vendor Name is Required!!");
      return;
    }

    if (!balanceAmount) {
      setBalanceAmountError("Balance Amount is Required!!");
      return;
    }

    if (!paymentDate) {
      setPaymentDateError("Payment Date is Required!!");
      return;
    }

    if (!payment) {
      setPaymentError("Payment is Required!!");
      return;
    }

    if (!vendorChequeNo) {
      setVendorChequeNoError("Cheque No is Required!!");
      return;
    }

    if (!vendorRemark) {
      setVendorRemarkError("Remark is Required!!");
      return;
    }

    let payload = {
      accountNo: accountVendor,
      vendorName: vendorName,
      balanceAmount: balanceAmount,
      paymentDate: paymentDate,
      payment: payment,
      chequeNo: vendorChequeNo,
      remark: vendorRemark,
    };

    dispatch(
      addPTVendorPayment({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchVendorsPayment();
          setAccountVendorError("");
          setVendorNameError("");
          setBalanceAmountError("");
          setPaymentDateError("");
          setPaymentError("");
          setVendorChequeNoError("");
          setVendorRemarkError("");
          setAccountVendor("");
          setVendorName("");
          setBalanceAmount("");
          setPaymentDate("");
          setPayment("");
          setVendorChequeNo("");
          setVendorRemark("");
        },
      })
    );
  };
  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const vendorDeleteHandler = () => {
    dispatch(
      deleteVendorPayment({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchVendorsPayment();
          handleClose();
        },
      })
    );
  };

  const filteredVendor = allVendorPaymentData?.filter((vendorpt) =>
    vendorpt.vendorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main id="main" className="main">
          <section className="section">
            <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
              <div className="row">
                <div className="col-md-9 col-sm-12 ">
                  <h5 className="">
                    <b>Add Vendor Payment</b>
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
                className="m-0 mb-3"
                style={{
                  background: "black",
                }}
              />

              <div className="row">
                <div className=" col-sm-12  col-md-4 ">
                  <label className="" htmlFor="specificSizeSelect">
                    Account
                  </label>
                  <input
                    type="number"
                    className="form-control a1"
                    placeholder="#25445345"
                    value={accountVendor}
                    onChange={(e) => {
                      setAccountVendor(e.target.value);
                      setAccountVendorError("");
                    }}
                  />
                  {accountVendorError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {accountVendorError}
                    </div>
                  )}
                </div>
                <div className=" col-sm-12  col-md-4 ">
                  <label> Vendor Name</label>
                  <input
                    type="text"
                    className="form-control c2  "
                    placeholder="Vendor Name"
                    value={vendorName}
                    onChange={(e) => {
                      setVendorName(e.target.value);
                      setVendorNameError("");
                    }}
                  />
                  {vendorNameError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {vendorNameError}
                    </div>
                  )}

                  <div className="form-check form-check-inline mt-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Cheque
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Cash
                    </label>
                  </div>
                </div>
                <div className=" col-sm-12  col-md-4 ">
                  <label className="" htmlFor="specificSizeSelect">
                    Balance Amount
                  </label>
                  <input
                    type="number"
                    className="form-control a1"
                    placeholder="Balance Amount"
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
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {balanceAmountError}
                    </div>
                  )}
                </div>
              </div>
              <div className="row mt-1">
                <div className=" col-md-4 col-sm-12">
                  <label className="" htmlFor="specificSizeSelect">
                    Payment Date
                  </label>
                  <input
                    type="Date"
                    className="form-control a1"
                    placeholder="Name"
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
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {paymentDateError}
                    </div>
                  )}
                </div>
                <div className="  col-md-4 col-sm-12">
                  <label className="" htmlFor="specificSizeSelect">
                    Payment
                  </label>
                  <input
                    type="number"
                    className="form-control a1"
                    placeholder={1000}
                    value={payment}
                    onChange={(e) => {
                      setPayment(e.target.value);
                      setPaymentError("");
                    }}
                  />
                  {paymentError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {paymentError}
                    </div>
                  )}
                </div>
                <div className="  col-md-4 col-sm-12">
                  <label className="" htmlFor="specificSizeSelect">
                    Cheque No
                  </label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Enter  Cheque No"
                    value={vendorChequeNo}
                    onChange={(e) => {
                      setVendorChequeNo(e.target.value);
                      setVendorChequeNoError("");
                    }}
                  />
                  {vendorChequeNoError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {vendorChequeNoError}
                    </div>
                  )}
                </div>
                <div className=" col-md-4 col-sm-12 mt-2">
                  <label className="" htmlFor="specificSizeSelect">
                    Remark
                  </label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Remark"
                    value={vendorRemark}
                    onChange={(e) => {
                      setVendorRemark(e.target.value);
                      setVendorRemarkError("");
                    }}
                  />

                  {vendorRemarkError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {vendorRemarkError}
                    </div>
                  )}
                </div>
                <div className="d-grid gap-2 d-flex justify-content-center mt-3">
                  <button
                    className="button"
                    style={{ verticalAlign: "middle" }}
                    onClick={handleSubmitMyPayment}
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="row mt-3">
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
                            SNO.
                          </th>
                          <th
                            scope="col"
                            style={{ paddingLeft: "3rem", textAlign: "center" }}
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
                            Vendor Name
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
                            Payment Date
                          </th>

                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Payment
                          </th>

                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Cheque No
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Remark
                          </th>
                          <th
                            scope="col "
                            style={{
                              paddingLeft: "3rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredVendor?.length === 0 ? (
                          <td
                            colSpan={10}
                            className="text-center mt-2"
                            style={{ color: "#10c2a7" }}
                          >
                            No Vendor Payment details found!!
                          </td>
                        ) : (
                          <>
                            {filteredVendor?.map((ftvendor, i) => (
                              <tr key={i}>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {i + 1}
                                </td>

                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {ftvendor.accountNo}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {ftvendor.vendorName}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {ftvendor.balanceAmount}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {ftvendor.paymentDate}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {ftvendor.payment}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {ftvendor.chequeNo}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {ftvendor.remark}
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
                                        to={`/admin/editvendorpaymentform/${ftvendor._id}`}
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
                                          HandleOpenModal(ftvendor?._id);
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
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Vendor Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={vendorDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddVendorPayment;
