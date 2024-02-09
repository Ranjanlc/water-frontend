import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CustomerBalanceSheet.css";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import Loader from "../../../../Loader/Loader";
import { useCallback, useEffect, useState } from "react";
import {
  addBalanceSheet,
  deleteBalanceSheet,
  getAllBalanceSheet,
} from "../../../../../Redux/Features/Customer/CustomerBalanceSheetSlice";

const CustomerBalanceSheet = () => {
  const { allBalanceSheetData, loading } = useSelector(
    (state) => state.addBalanceSheet
  );
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [salesmanAccount, setSalesmanAccount] = useState("");
  const [accountStatus, setAccountStatus] = useState("");
  const [balanceAmount, setBalanceAmount] = useState("");
  const [balanceBottle, setBalanceBottle] = useState("");
  const [balanceAmountError, setBalanceAmountError] = useState("");
  const [balanceBottleError, setBalanceBottleError] = useState("");
  const [rowId, setRowId] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchBalanceSheet = useCallback(() => {
    dispatch(getAllBalanceSheet(() => {}));
  }, [dispatch]);

  useEffect(() => {
    fetchBalanceSheet();
  }, [fetchBalanceSheet]);

  const handleAddBalanceSheet = () => {
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
      addBalanceSheet({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchBalanceSheet();
          setSalesmanAccount("");
          setAccountStatus("");
          setBalanceAmount("");
          setBalanceBottle("");
        },
      })
    );
  };

  const handleOpenModal = (id) => {
    setRowId(id);
    handleShow();
  };

  const handleDeleteBalanceSheet = () => {
    dispatch(
      deleteBalanceSheet({
        id: rowId,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchBalanceSheet();
          handleClose();
        },
      })
    );
  };

  const filteredDetails = allBalanceSheetData?.filter((product) =>
    product.salesmanAccount?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main id="main" className="main">
          <section className="section">
            <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-7 col-sm-12 ">
                  <h5 className="">
                    <b>Customer Balance Sheet</b>
                  </h5>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="form-group ">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <hr
                className="m-0 mb-3 mt-3"
                style={{
                  background: "black",
                }}
              />
              <div className="row mt-3">
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
                      <option value="DeActive Accounts">
                        DeActive Accounts
                      </option>
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
                    onClick={handleAddBalanceSheet}
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
                              Balance Bottle
                            </th>
                            <th
                              scope="col"
                              style={{
                                paddingLeft: "2rem",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Balance Amount
                            </th>
                            <th
                              scope="col"
                              style={{
                                textAlign: "center",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredDetails?.length === 0 ? (
                            <td
                              colSpan={10}
                              className="text-center mt-2"
                              style={{ color: "#10c2a7" }}
                            >
                              No Balance Sheet Details Found!!
                            </td>
                          ) : (
                            <>
                              {filteredDetails &&
                                filteredDetails.map((data, i) => (
                                  <tr key={i}>
                                    <td
                                      className="text-center"
                                      style={{ paddingLeft: "4rem" }}
                                    >
                                      {data?.salesmanAccount}
                                    </td>
                                    <td className="text-center">
                                      {data?.balanceBottle}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{ paddingLeft: "4rem" }}
                                    >
                                      {data?.balanceAmount}
                                    </td>
                                    <td
                                      className="text-center"
                                      style={{ paddingLeft: "4rem" }}
                                    >
                                      <div className="parent_div ">
                                        <div
                                          style={{ cursor: "pointer" }}
                                          className="edit_icon"
                                          aria-label="Example icon button with a menu icon"
                                        >
                                          <Link
                                            to={`/admin/edit_customer_balance_sheet/${data?._id}`}
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
                                            handleOpenModal(data?._id);
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
            </div>
          </section>
        </main>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteBalanceSheet}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomerBalanceSheet;
