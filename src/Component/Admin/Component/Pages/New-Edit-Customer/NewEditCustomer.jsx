import { useCallback, useEffect, useState } from "react";
import "./NewEditCustomer.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { Modal, Button } from "react-bootstrap";
import {
  getAllNewCustomer,
  addNewCustomer,
  deleteNewCustomer,
} from "../../../../../Redux/Features/Customer/AddNewCustomerSlice";
import Loader from "../../../../Loader/Loader";

const NewEditCustomer = () => {
  const { allNewCustomerData, loading } = useSelector(
    (state) => state.newCustomer
  );
  const [customerName, setCustomerName] = useState("");
  const [accountOpenDate, setAccountOpenDate] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [amountStatus, setAmountStatus] = useState("");
  const [securityDeposit, setSecurityDeposit] = useState("");
  const [securityRemark, setSecurityRemark] = useState("");
  const [openingBottle, setOpeningBottle] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [customerNameError, setCustomerNameError] = useState("");
  const [accountOpenDateError, setAccountOpenDateError] = useState("");
  const [contactError, setContactError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [amountStatusError, setAmountStatusError] = useState("");
  const [securityDepositError, setSecurityDepositError] = useState("");
  const [securityRemarkError, setSecurityRemarkError] = useState("");
  const [openingBottleError, setOpeningBottleError] = useState("");
  const [openingBalanceError, setOpeningBalanceError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const clearTerms = () => {
    setAccountOpenDateError("");
    setCustomerNameError("");
    setContactError("");
    setAddressError("");
    setAmountStatusError("");
    setSecurityDepositError("");
    setSecurityRemarkError("");
    setOpeningBottleError("");
    setOpeningBalanceError("");
    setUserNameError("");
    setPasswordError("");
  };

  const addNewCustomerHandler = () => {
    setAccountOpenDateError("");
    setCustomerNameError("");
    setContactError("");
    setAddressError("");
    setAmountStatusError("");
    setSecurityDepositError("");
    setSecurityRemarkError("");
    setOpeningBottleError("");
    setOpeningBalanceError("");
    setUserNameError("");
    setPasswordError("");

    if (!accountOpenDate) {
      setAccountOpenDateError("Account Open Date is required!!");
      return;
    }
    if (!customerName) {
      setCustomerNameError("Customer Name is required!!");
      return;
    }
    if (!contact) {
      setContactError("Contact Number is required!!");
      return;
    }
    if (!address) {
      setAddressError("Address Details is required!!");
      return;
    }
    if (!amountStatus) {
      setAmountStatusError("Amount Status is required!!");
      return;
    }
    if (!securityDeposit) {
      setSecurityDepositError("Security Deposit is required!!");
      return;
    }
    if (!securityRemark) {
      setSecurityRemarkError("Security Remark is required!!");
      return;
    }
    if (!openingBottle) {
      setOpeningBottleError("Opening Bootle is required!!");
      return;
    }
    if (!openingBalance) {
      setOpeningBalanceError("Opening Balance is required!!");
      return;
    }
    if (!userName) {
      setUserNameError("User Name is required!!");
      return;
    }
    if (!password) {
      setPasswordError("Password is required!!");
      return;
    }
    let payload = {
      accountopendate: accountOpenDate,
      custumername: customerName,
      contactnumber: contact,
      address: address,
      amountstatus: amountStatus,
      securitydepositamount: securityDeposit,
      securityremark: securityRemark,
      openingbottle: openingBottle,
      openingbalance: openingBalance,
      username: userName,
      password: password,
    };
    dispatch(
      addNewCustomer({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          clearTerms();
          fetchAllNewCustomers();
        },
      })
    );
  };

  const fetchAllNewCustomers = useCallback(() => {
    dispatch(getAllNewCustomer(() => {}));
  }, [dispatch]);

  useEffect(() => {
    fetchAllNewCustomers();
  }, [fetchAllNewCustomers]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const deleteModal = (id) => {
    setDeleteId(id);
    handleShow();
  };

  const filteredCustomers = allNewCustomerData?.filter((customer) =>
    customer.custumername?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteCustomerHandler = () => {
    dispatch(
      deleteNewCustomer({
        id: deleteId,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchAllNewCustomers();
          handleClose();
        },
      })
    );
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main id="main" className="main">
          <section className="section">
            <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
              {/* <h5 className="d-inline">
            <b>New Customer</b>
          </h5> */}
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-7 col-sm-12 ">
                  <h5 className="d-inline">
                    <b>New Customer</b>
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
                className=""
                style={{
                  background: "black",
                }}
              />
              <div className="row mt-3">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Account Open Date</label>
                    <input
                      type="date"
                      className="form-control c2"
                      placeholder="Enter Order Number"
                      value={accountOpenDate}
                      onChange={(e) => {
                        setAccountOpenDate(e.target.value);
                        setAccountOpenDateError("");
                      }}
                    />
                    {accountOpenDateError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {accountOpenDateError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Customer Name</label>
                    <input
                      type="text"
                      className="form-control c2"
                      placeholder="Enter Customer Name"
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
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {customerNameError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      type="number"
                      className="form-control c2"
                      placeholder="Enter Contact Number"
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
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {contactError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control c2"
                      placeholder="Enter address"
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
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {addressError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Amount Status</label>
                    <select
                      className="form-select c2"
                      aria-label="Default select example"
                      value={amountStatus}
                      onChange={(e) => {
                        setAmountStatus(e.target.value);
                        setAmountStatusError("");
                      }}
                    >
                      <option selected="">Mobile Wallet</option>
                      <option value={1}>EVC Plus</option>
                      <option value={1}>Online</option>
                      <option value={1}>Cash</option>
                      <option value={1}>eDahab</option>
                    </select>
                    {amountStatusError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {amountStatusError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Security Deposit Amount</label>
                    <input
                      type="number"
                      className="form-control c2"
                      value={securityDeposit}
                      onChange={(e) => {
                        setSecurityDeposit(e.target.value);
                        setSecurityDepositError("");
                      }}
                    />
                    {securityDepositError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {securityDepositError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Security Remarks</label>
                    <input
                      type="text"
                      className="form-control c2"
                      placeholder="Enter Remark"
                      value={securityRemark}
                      onChange={(e) => {
                        setSecurityRemark(e.target.value);
                        setSecurityRemarkError("");
                      }}
                    />
                    {securityRemarkError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {securityRemarkError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <label>Opening Bottle</label>
                    <input
                      type="text"
                      className="form-control c2"
                      placeholder={0}
                      value={openingBottle}
                      onChange={(e) => {
                        setOpeningBottle(e.target.value);
                        setOpeningBottleError("");
                      }}
                    />
                    {openingBottleError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {openingBottleError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <label>Opening Balance</label>
                    <input
                      type="number"
                      className="form-control c2"
                      placeholder={0}
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
                <div className="col-md-4">
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      type="text"
                      className="form-control c2"
                      placeholder="Enter User Name"
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                        setUserNameError("");
                      }}
                    />
                    {userNameError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {userNameError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control c2"
                      placeholder="*******"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError("");
                      }}
                    />
                    {passwordError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {passwordError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4 mt-4">
                  <div style={{ paddingTop: "1%" }} className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Show Password
                    </label>
                  </div>
                </div>

                {/* Filterss */}
                <div className="col-md-4 ">
                  <div className="form-group  ">
                    <label>Search By Customer Id</label>
                    <input type="number" className="form-control c2  " />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group ps-1">
                    <label>Select Area</label>
                    <select
                      className="form-select c2"
                      aria-label="Default select example"
                    >
                      <option selected="">inodre</option>
                      <option value={1}>bhopal</option>
                      <option value={1}>ujjain</option>
                      <option value={1}>jabalpur</option>
                      <option value={1}>jaipur</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="form-group ps-2">
                    <label>Required Bottle Qty</label>
                    <input type="number" className="form-control c2" />
                  </div>
                </div>

                <div
                  className="col-md-2"
                  style={{ paddingTop: "1%", marginLeft: "20px" }}
                >
                  <div className="form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label>Monday</label>
                  </div>
                </div>
                <div
                  className="col-md-2"
                  style={{ paddingTop: "1%", marginLeft: "20px" }}
                >
                  <div className="form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label>Tuesday</label>
                  </div>
                </div>
                <div
                  className="col-md-2"
                  style={{ paddingTop: "1%", marginLeft: "20px" }}
                >
                  <div className="form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label>Wednesday</label>
                  </div>
                </div>
                <div
                  className="col-md-2"
                  style={{ paddingTop: "1%", marginLeft: "20px" }}
                >
                  <div className="form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label>Thursday</label>
                  </div>
                </div>
                <div
                  className="col-md-2"
                  style={{ paddingTop: "1%", marginLeft: "20px" }}
                >
                  <div className="form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label>Friday</label>
                  </div>
                </div>
                <div
                  className="col-md-2"
                  style={{ paddingTop: "1%", marginLeft: "20px" }}
                >
                  <div className="form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label>Saturday</label>
                  </div>
                </div>
                <div
                  className="col-md-2"
                  style={{ paddingTop: "1%", marginLeft: "20px" }}
                >
                  <div className="form-group">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label>Sunday</label>
                  </div>
                </div>
                <div className="d-grid gap-2 d-flex justify-content-center my-2">
                  <button
                    className="button"
                    style={{ verticalAlign: "middle" }}
                    onClick={addNewCustomerHandler}
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>

              <div className="row mt-3 mb-3">
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
                            Account Open Date
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
                            Contact Number
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
                            className="text-center"
                            style={{
                              paddingLeft: "4rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Amount Status
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Security Deposit Amount
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Security Remarks
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
                            Opening Bottle
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Opening Balance
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Search By Custmoer Id
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Select Area
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
                        {filteredCustomers?.length === 0 ? (
                          <td
                            colSpan={8}
                            className="text-center mt-2"
                            style={{ color: "#10c2a7" }}
                          >
                            No Customer Details Found
                          </td>
                        ) : (
                          <>
                            {filteredCustomers &&
                              filteredCustomers.map((data, i) => (
                                <tr key={i}>
                                  <td
                                    className="text-center"
                                    style={{ paddingLeft: "4rem" }}
                                  >
                                    {data.accountopendate}
                                  </td>
                                  <td
                                    className="text-center"
                                    style={{
                                      paddingLeft: "3rem",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {data.custumername}
                                  </td>
                                  <td
                                    className="text-center"
                                    style={{ paddingLeft: 29 }}
                                  >
                                    {data.contactnumber}
                                  </td>
                                  <td className="text-center">100</td>
                                  <td
                                    className="text-center"
                                    style={{ paddingLeft: "4rem" }}
                                  >
                                    {data.address}
                                  </td>
                                  <td
                                    className="text-center"
                                    style={{
                                      paddingLeft: "3rem",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {data.amountstatus}
                                  </td>
                                  <td
                                    className="text-center"
                                    style={{ paddingLeft: 29 }}
                                  >
                                    {data.securitydepositamount}
                                  </td>
                                  <td className="text-center">100</td>
                                  <td
                                    className="text-center"
                                    style={{ paddingLeft: "4rem" }}
                                  >
                                    {data.securityremark}
                                  </td>
                                  <td
                                    className="text-center"
                                    style={{
                                      paddingLeft: "3rem",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    {data.openingbottle}
                                  </td>
                                  <td
                                    className="text-center"
                                    style={{ paddingLeft: 29 }}
                                  >
                                    {data.openingbalance}
                                  </td>
                                  <td className="text-center">100</td>
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
                                          to={`/admin/new_edit_customer/edit_customer/${data?._id}`}
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
                                          deleteModal(data?._id);
                                        }}
                                      >
                                        <i className="ri-delete-bin-6-line " />
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
          <Modal.Title>Delete Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteCustomerHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewEditCustomer;
