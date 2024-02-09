import "./NewEditCustomer.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { updateNewCustomer } from "../../../../../Redux/Features/Customer/AddNewCustomerSlice";

const EditCustomer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const { allNewCustomerData } = useSelector((state) => state.newCustomer);
  const data = allNewCustomerData.find((e) => e._id === id);
  console.log(data);
  const [customerName, setCustomerName] = useState(data?.custumername);
  const [accountOpenDate, setAccountOpenDate] = useState(data?.accountopendate);
  const [contact, setContact] = useState(data?.contactnumber);
  const [address, setAddress] = useState(data?.address);
  const [amountStatus, setAmountStatus] = useState(data?.amountstatus);
  const [securityDeposit, setSecurityDeposit] = useState(
    data?.securitydepositamount
  );
  const [securityRemark, setSecurityRemark] = useState(data?.securityremark);
  const [openingBottle, setOpeningBottle] = useState(data?.openingbottle);
  const [openingBalance, setOpeningBalance] = useState(data?.openingbalance);
  const [userName, setUserName] = useState(data?.username);
  const [password, setPassword] = useState(data?.password);
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const updateNewCustomerHandler = () => {
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
      updateNewCustomer({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          clearTerms();
          navigate("/admin/new_edit_customer");
        },
      })
    );
  };

  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            {/* <h5 className="d-inline">
            <b>Edit Customer</b>
          </h5> */}
            <div className="row">
              <div className="col-md-7 col-sm-12 ">
                <h5 className="">
                  <b>Edit Customer</b>
                </h5>
              </div>
            </div>
            <hr
              className="m-0 mb-3"
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
            </div>
            <div className="d-grid gap-2 d-flex justify-content-center my-2">
              <button
                className="button"
                style={{ verticalAlign: "middle" }}
                onClick={updateNewCustomerHandler}
              >
                <span>Save</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EditCustomer;
