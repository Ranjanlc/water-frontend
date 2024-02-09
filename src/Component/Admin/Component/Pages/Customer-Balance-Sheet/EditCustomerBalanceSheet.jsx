import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateBalanceSheet } from "../../../../../Redux/Features/Customer/CustomerBalanceSheetSlice";

const EditCustomerBalanceSheet = () => {
  const { allBalanceSheetData } = useSelector((state) => state.addBalanceSheet);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const singleData =
    allBalanceSheetData && allBalanceSheetData.find((e) => e._id === id);
  const [salesmanAccount, setSalesmanAccount] = useState(
    singleData?.salesmanAccount
  );
  const [accountStatus, setAccountStatus] = useState(singleData?.accountStatus);
  const [balanceAmount, setBalanceAmount] = useState(singleData?.balanceAmount);
  const [balanceBottle, setBalanceBottle] = useState(singleData?.balanceBottle);
  const [balanceAmountError, setBalanceAmountError] = useState("");
  const [balanceBottleError, setBalanceBottleError] = useState("");

  const handleUpdateBalanceSheet = () => {
    setBalanceAmountError("");
    setBalanceBottleError("");

    if (!balanceBottle) {
      setBalanceBottleError("Balance Bottle is required!!");
      return;
    }
    if (!balanceAmount) {
      setBalanceAmountError("Balance Amount is required!!");
      return;
    }

    let payload = {
      salesmanAccount: salesmanAccount,
      accountStatus: accountStatus,
      balanceBottle: balanceBottle,
      balanceAmount: balanceAmount,
    };

    dispatch(
      updateBalanceSheet({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/customer_balance_sheet");
          setSalesmanAccount("");
          setAccountStatus("");
          setBalanceAmount("");
          setBalanceBottle("");
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
              <b>Edit Customer Balance Sheet</b>
            </h5>
            <hr
              className="m-0 mb-3 mt-3"
              style={{
                background: "black",
              }}
            />
            <div className="row ">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Salesman Account</label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                    value={salesmanAccount}
                    onChange={(e) => {
                      setSalesmanAccount(e.target.value);
                    }}
                  >
                    <option selected="" value="All Account">
                      All Account
                    </option>
                    <option value="rohan">rohan</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Account Status</label>
                  <select
                    className="form-select c2 "
                    aria-label="Default select example"
                    value={accountStatus}
                    onChange={(e) => {
                      setAccountStatus(e.target.value);
                    }}
                  >
                    <option selected="" value="All">
                      All
                    </option>
                    <option value="Active Accounts">Active Accounts</option>
                    <option value="DeActive Accounts">DeActive Accounts</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="form-group">
                  <label>Balance Bottle</label>
                  <input
                    type="text"
                    className="form-control c2  mt-1"
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
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {balanceBottleError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4 mt-2">
                <div className="form-group">
                  <label>Balance Amount</label>
                  <input
                    type="number"
                    className="form-control c2  mt-1"
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
              <div className="d-grid gap-2 d-flex justify-content-center  mt-3 mb-3">
                <button
                  className="button"
                  style={{ verticalAlign: "middle" }}
                  onClick={handleUpdateBalanceSheet}
                >
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EditCustomerBalanceSheet;
