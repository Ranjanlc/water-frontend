import { useCallback, useEffect, useState } from "react";
import "./Expenditure.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpenditure,
  getAllExpenditure,
  deleteExpenditure,
} from "../../../../../Redux/Features/Expenditure/ExpenditureSlice";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import Loader from "../../../../Loader/Loader";

const Expenditure = () => {
  const [expenditureHead, setExpenditureHead] = useState("");
  const [date, setDate] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const [expenditureHeadError, setExpenditureHeadError] = useState("");
  const [dateError, setDateError] = useState("");
  const [expenseDescriptionError, setExpenseDescriptionError] = useState("");
  const [expenseAmountError, setExpenseAmountError] = useState("");

  const dispatch = useDispatch();

  const { allExpenditureData, loading } = useSelector(
    (state) => state.expenditure
  );
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchExpenditureF = useCallback(() => {
    dispatch(
      getAllExpenditure((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchExpenditureF();
  }, [fetchExpenditureF]);

  const handleSubmitByExpenditure = () => {
    setExpenditureHeadError("");
    setDateError("");
    setExpenseDescriptionError("");
    setExpenseAmountError("");

    if (!expenditureHead) {
      setExpenditureHeadError("Expenditure Head is Required!!");
      return;
    }
    if (!date) {
      setDateError("Date is Required!!");
      return;
    }

    if (!expenseDescription) {
      setExpenseDescriptionError("Expense Description is Required!!");
      return;
    }

    if (!expenseAmount) {
      setExpenseAmountError("Expense Amount is Required!!");
      return;
    }

    let payload = {
      expenditureHead: expenditureHead,
      date: date,
      expenseDescription: expenseDescription,
      expenseAmount: expenseAmount,
    };

    dispatch(
      addExpenditure({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });

          fetchExpenditureF();

          setExpenditureHeadError("");
          setDateError("");
          setExpenseDescriptionError("");
          setExpenseAmountError("");

          setExpenditureHead("");
          setDate("");
          setExpenseDescription("");
          setExpenseAmount("");
        },
      })
    );
  };

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const ExpenditureDeleteHandler = () => {
    dispatch(
      deleteExpenditure({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchExpenditureF();
          handleClose();
        },
      })
    );
  };

  const filteredExpenditure = allExpenditureData?.filter((ehead) =>
    ehead.expenditureHead.toLowerCase().includes(searchTerm.toLowerCase())
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
                    <b>Expenditure</b>
                  </h5>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="form-group ">
                    <input
                      type="search"
                      className="form-control   "
                      placeholder="Search Head Name"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <hr
                className=" m-0 mb-3   "
                style={{
                  background: "black",
                }}
              />

              <div className="row">
                <div className="col-md-9 my-2 ">
                  <h5>
                    <b>Add Expenditure</b>
                  </h5>
                </div>
                <div className="col-md-3  ">
                  <button className="button w-75">
                    <span>New Head</span>
                  </button>
                </div>
              </div>
              <div className="row mt-1">
                <div
                  className=" col-sm-12  col-md-3 "
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    {" "}
                    Expenditure Head
                  </label>
                  <select
                    className="form-select a1"
                    id="specificSizeSelect"
                    value={expenditureHead}
                    onChange={(e) => {
                      setExpenditureHead(e.target.value);
                      setExpenditureHeadError("");
                    }}
                  >
                    <option selected="">Select Head</option>
                    <option>1-Lunch</option>
                    <option>2-Tea</option>
                  </select>
                  {expenditureHeadError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {expenditureHeadError}
                    </div>
                  )}
                </div>

                <div
                  className=" col-sm-12  col-md-3 "
                  style={{ lineHeight: "2rem" }}
                >
                  <label htmlFor="specificSizeSelect">Date</label>
                  <input
                    type="date"
                    className="form-control a1"
                    placeholder="Date"
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

                <div
                  className=" col-sm-12  col-md-3 "
                  style={{ lineHeight: "2rem" }}
                >
                  <label htmlFor="specificSizeSelect">
                    Expense Description
                  </label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Enter Description"
                    value={expenseDescription}
                    onChange={(e) => {
                      setExpenseDescription(e.target.value);
                      setExpenseDescriptionError("");
                    }}
                  />
                  {expenseDescriptionError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {expenseDescriptionError}
                    </div>
                  )}
                </div>
                <div
                  className=" col-sm-12  col-md-3 "
                  style={{ lineHeight: "2rem" }}
                >
                  <label htmlFor="specificSizeSelect">Expense Amount</label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Enter amount"
                    value={expenseAmount}
                    onChange={(e) => {
                      setExpenseAmount(e.target.value);
                      setExpenseAmountError("");
                    }}
                  />
                  {expenseAmountError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {expenseAmountError}
                    </div>
                  )}
                </div>
                <div className="d-flex justify-content-center mt-5 mb-4">
                  {/* <button className="button  py-1"    >
                                    <span>Save Expense</span>
                                </button> */}

                  <button
                    type="button"
                    className="btn btn-success"
                    style={{ backgroundColor: "rgb(26, 156, 128)" }}
                    onClick={handleSubmitByExpenditure}
                  >
                    Save Expense
                  </button>
                </div>
              </div>
              <hr
                className=" m-0 mb-3   mt-2"
                style={{
                  background: "black",
                }}
              />
              <div className="row mt-1">
                <div
                  className=" col-md-3 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    Expenditure Head
                  </label>
                  <select className="form-select a1" id="specificSizeSelect">
                    <option selected="">Select Head</option>
                    <option>1-Lunch</option>
                    <option>2-Tea</option>
                  </select>
                </div>
                <div
                  className=" col-md-3 col-sm-12"
                  style={{ lineHeight: "2rem" }}
                >
                  <label className="" htmlFor="specificSizeSelect">
                    From Date
                  </label>
                  <input
                    type="date"
                    className="form-control a1"
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
                    className="form-control a1"
                    placeholder="Address"
                  />
                </div>
                {/* <div className="col-md-3 ">
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control a1"
                                            style={{ marginTop: "2.5rem" }}
                                            placeholder="Search"
                                        />
                                    </div>
                                </div> */}
              </div>
              {/* form end */}
              {/* Table Strat */}

              <hr
                className=" mt-4"
                style={{
                  background: "black",
                }}
              />
              <h5 className="mt-4">
                <b>Expenditure Details</b>
              </h5>

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
                            Head Name
                          </th>
                          <th
                            scope="col"
                            style={{ paddingLeft: "3rem", textAlign: "center" }}
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            style={{ paddingLeft: "3rem", textAlign: "center" }}
                          >
                            Description
                          </th>
                          <th scope="col " style={{ paddingLeft: "7rem" }}>
                            Amount
                          </th>
                          <th scope="col " style={{ paddingLeft: "4rem" }}>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredExpenditure?.length === 0 ? (
                          <td colSpan={10} className="pl-5 mt-2">
                            No Expenditure Details Found!!
                          </td>
                        ) : (
                          <>
                            {filteredExpenditure?.map((heade, i) => (
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
                                  {heade.expenditureHead}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {heade.date}
                                </td>

                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {heade.expenseDescription}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {heade.expenseAmount}
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
                                        to={`/admin/editexpenditureform/${heade._id}`}
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
                                          HandleOpenModal(heade?._id);
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

              <div className="row mt-2">
                <div
                  className=" col-sm-3  col-md-3"
                  style={{ lineHeight: "2rem" }}
                >
                  <div className="d-grid gap-2 d-flex justify-content-right ">
                    {/* <button className="button" type="button" onclick="window.print()">
                                        Print
                                    </button> */}

                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ backgroundColor: "rgb(26, 156, 128)" }}
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Expenditure</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={ExpenditureDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Expenditure;
