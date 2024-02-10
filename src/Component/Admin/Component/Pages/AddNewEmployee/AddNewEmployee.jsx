import React, {useState, useEffect, useCallback} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import {
  addNewEmployee,
  getAllNewEmployee,
  deleteNewEmployee,
} from "../../../../../Redux/Features/Employee/AddNewEmployeeSlice";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const AddNewEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [nic, setNIC] = useState("");
  const [contact, setContact] = useState("");
  const [accountStatus, setAccountStatus] = useState("");
  const [salary, setSalary] = useState("");
  const [salaryPayTo, setSalaryPayTo] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [joinDateError, setJoinDateError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [designationError, setDesignationError] = useState("");
  const [nicError, setNICError] = useState("");
  const [contactError, setContactError] = useState("");
  const [accountStatusError, setAccountStatusError] = useState("");
  const [salaryError, setSalaryError] = useState("");
  const [salaryPayToError, setSalaryPayToError] = useState("");

  const dispatch = useDispatch();
  const { allNewEmployeeData, loading } = useSelector(
    (state) => state.addNewEmployee
  );

  const { enqueueSnackbar } = useSnackbar();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNewEmployee = useCallback(() => {
    dispatch(
      getAllNewEmployee((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchNewEmployee();
  }, [fetchNewEmployee]);

  const handleSubmitNewEmployee = () => {
    setFirstNameError("");
    setLastNameError("");
    setJoinDateError("");
    setAddressError("");
    setDesignationError("");
    setNICError("");
    setContactError("");
    setAccountStatusError("");
    setSalaryError("");
    setSalaryPayToError("");

    if (!firstName) {
      setFirstNameError("First Name is Required!!");
      return;
    }
    if (!lastName) {
      setLastNameError("Last Name is Required!!");
      return;
    }
    if (!joinDate) {
      setJoinDateError("Date is Required!!");
      return;
    }
    if (!address) {
      setAddressError("Address is Required!!");
      return;
    }
    if (!designation) {
      setDesignationError("Designation is Required!!");
      return;
    }
    if (!nic) {
      setNICError("NIC is Required!!");
      return;
    }
    if (!contact) {
      setContactError("Contact is Required!!");
      return;
    }
    if (!accountStatus) {
      setAccountStatusError("Account Status is Required!!");
      return;
    }
    if (!salary) {
      setSalaryError("Salary is Required!!");
      return;
    }
    if (!salaryPayTo) {
      setSalaryPayToError("Salary Pay To is Required!!");
      return;
    }

    let payload = {
      firstName: firstName,
      lastName: lastName,
      joinDate: joinDate,
      address: address,
      employeeDesignation: designation,
      nic: nic,
      contact: contact,
      status: accountStatus,
      salary: salary,
      salaryPayTo: salaryPayTo,
    };

    dispatch(
      addNewEmployee({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewEmployee();

          setFirstName("");
          setLastName("");
          setJoinDate("");
          setAddress("");
          setDesignation("");
          setNIC("");
          setContact("");
          setAccountStatus("");
          setSalary("");
          setSalaryPayTo("");

          setFirstNameError("");
          setLastNameError("");
          setJoinDateError("");
          setAddressError("");
          setDesignationError("");
          setNICError("");
          setContactError("");
          setAccountStatusError("");
          setSalaryError("");
          setSalaryPayToError("");
        },
      })
    );
  };

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const newEmployeeDeleteHandler = () => {
    dispatch(
      deleteNewEmployee({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewEmployee();
          handleClose();
        },
      })
    );
  };

  const filteredNewEmployee = allNewEmployeeData?.filter((addEmployee) =>
  addEmployee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(allNewEmployeeData);

  return (
    <>
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-7 ">
                <h5 className="d-inline">
                  <b>Employee</b>
                </h5>
              </div>

              <div className="col-md-3">
                <div className="form-group ">
                  {/* <label>Search by ID or Name</label> */}
                  <input
                    type="text"
                    className="form-control   "
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-1 ">
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
              className=""
              style={{
                background: "black",
              }}
            />
            <div className="row mt-4">
              <div className="col-md-3">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control c2 mt-1"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setFirstNameError("");
                    }}
                  />
                  {firstNameError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {firstNameError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control c2 mt-1"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setLastNameError("");
                    }}
                  />
                  {lastNameError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {lastNameError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label> Join Date</label>
                  <input
                    type="date"
                    className="form-control c2 mt-1"
                    placeholder="Enter Join Date"
                    value={joinDate}
                    onChange={(e) => {
                      setJoinDate(e.target.value);
                      setJoinDateError("");
                    }}
                  />
                  {joinDateError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {joinDateError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label> Address</label>
                  <input
                    type="text"
                    className="form-control c2 mt-1"
                    placeholder="Enter Address"
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
            </div>
            <div className="row mt-1">
              <div className="col-md-3">
                <div className="form-group ">
                  <label>Employee Designation</label>
                  <select
                    className="form-select c2 mt-1"
                    aria-label="Default select example"
                    value={designation}
                    onChange={(e) => {
                      setDesignation(e.target.value);
                      setDesignationError("");
                    }}
                  >
                    <option selected="">Select Designation</option>
                    <option>delivery man</option>
                    <option>Sales man</option>
                    <option>warehouse assistant</option>
                    <option>warehouse managers</option>
                    <option> delivery manager</option>
                  </select>
                  {designationError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {designationError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>NIC</label>
                  <input
                    type="text"
                    className="form-control c2 mt-1"
                    placeholder="Enter NIC"
                    value={nic}
                    onChange={(e) => {
                      setNIC(e.target.value);
                      setNICError("");
                    }}
                  />
                  {nicError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {nicError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Contact</label>
                  <input
                    type="text"
                    className="form-control c2 mt-1"
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
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {contactError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group ">
                  <label>Account Status</label>
                  <select
                    className="form-select c2 mt-1"
                    aria-label="Default select example"
                    value={accountStatus}
                    onChange={(e) => {
                      setAccountStatus(e.target.value);
                      setAccountStatusError("");
                    }}
                  >
                    <option selected >Select</option>
                    <option >Active</option>
                    <option >Deactive</option>
                  </select>
                  {accountStatusError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {accountStatusError}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Salary</label>
                  <input
                    type="number"
                    className="form-control c2 mt-1"
                    placeholder="Enter Salary"
                    value={salary}
                    onChange={(e) => {
                      setSalary(e.target.value);
                      setSalaryError("");
                    }}
                  />
                  {salaryError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {salaryError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group ">
                  <label>Salary Pay To(Account)</label>
                  <select
                    className="form-select c2 mt-1"
                    aria-label="Default select example"
                    value={salaryPayTo}
                    onChange={(e) => {
                      setSalaryPayTo(e.target.value);
                      setSalaryPayToError("");
                    }}
                  >
                    <option value="">Select Pay To Account</option>
                    <option selected="">Mobile Wallet</option>
                    <option >EVC Plus</option>
                    <option >Online</option>
                    <option >Cash</option>
                    <option >eDahab</option>
                  </select>
                  {salaryPayToError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red" }}
                    >
                      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {salaryPayToError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="border p-3">
                  <h6>
                    <b>Customer Login Info</b>
                  </h6>
                  <div className="row mt-2 ">
                    <div className="col-auto col-md-4">
                      <label htmlFor="" className="col-form-label ">
                        Username
                      </label>
                    </div>
                    <div className="col-auto col-md-8 ">
                      <input
                        type="text"
                        className="form-control c2"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-auto col-md-4">
                      <label htmlFor="" className="col-form-label">
                        Password
                      </label>
                    </div>
                    <div className="col-auto col-md-8">
                      <input
                        type="password"
                        className="form-control c2"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button className="button" style={{ verticalAlign: "middle" }} 
              onClick= {handleSubmitNewEmployee} >
                <span>Save</span>
              </button>
            </div>
            </div>
            {/* form end */}
            {/* Table Strat */}
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
                          style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                        >
                          First Name
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Last Name
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Join Date
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
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Employee Designation
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          NIC
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "1rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "1rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Account Status
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "1.4rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Salary
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "1rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Salary Pay To(Account)
                        </th>
                        <th scope="col " style={{ paddingLeft: "2rem" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {filteredNewEmployee?.length === 0 ? (
                          <td colSpan={8} className="text-center mt-2">
                            No Stock Details Found
                          </td>
                        ) : (
                          <>
                            {filteredNewEmployee?.map((addEmployee, i) => (
                      <tr>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem" }}
                        >
                         {addEmployee.firstName}
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "1rem", whiteSpace: "nowrap" }}
                        >
                         {addEmployee.lastName}
                        </td>
                        <td className="text-center" style={{ paddingLeft: "1.3rem" }}>
                        {addEmployee.joinDate}
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem"}} >{addEmployee.address}</td>
                        <td className="text-center" style={{ paddingLeft: "2rem" }}>{addEmployee.employeeDesignation}</td>
                        <td className="text-center" style={{ paddingLeft: "2rem" }}>{addEmployee.nic}</td>
                        <td className="text-center" style={{ paddingLeft: "2rem" }}>{addEmployee.contact}</td>
                        <td className="text-center" style={{ paddingLeft: "2rem" }}>{addEmployee.status}</td>
                        <td className="text-center" style={{ paddingLeft: "2rem" }}>{addEmployee.salary}</td>
                        <td className="text-center" style={{ paddingLeft: "1rem" }}>{addEmployee.salaryPayTo}</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "1.5rem" }}
                        >
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link
                                to={`/admin/editemployee/${addEmployee._id}`}
                                style={{ textDecoration: "none" }}
                              >
                                {" "}
                                <i className="ri-pencil-line" />
                              </Link>
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className="delete_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <i className="ri-delete-bin-6-line " 
                               onClick={() => {
                                HandleOpenModal(addEmployee?._id);
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

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={newEmployeeDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    </>

    
  );
};

export default AddNewEmployee;
