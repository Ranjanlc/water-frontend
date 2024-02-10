import React, { useCallback, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './AddNewEmployee.css'
import {
  updateNewEmployee,
  getSingleNewEmployee,
} from "../../../../../Redux/Features/Employee/AddNewEmployeeSlice";
import { useSnackbar } from "notistack";


const EditEmployee = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { allNewEmployeeData } = useSelector((state) => state.addNewEmployee);
  const { enqueueSnackbar } = useSnackbar();
  const data =
  allNewEmployeeData && allNewEmployeeData?.find((e) => e?._id === id);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(data?.firstName);
  const [lastName, setLastName] = useState(data?.lastName);
  const [joinDate, setJoinDate] = useState(data?.joinDate);
  const [address, setAddress] = useState(data?.address);
  const [designation, setDesignation] = useState(data?.employeeDesignation);
  const [nic, setNIC] = useState(data?.nic);
  const [contact, setContact] = useState(data?.contact);
  const [accountStatus, setAccountStatus] = useState(data?.status);
  const [salary, setSalary] = useState(data?.salary);
  const [salaryPayTo, setSalaryPayTo] = useState(data?.salaryPayTo);

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

  const fetchSingleNewEmployee = useCallback(() => {
    dispatch(
      getSingleNewEmployee({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchSingleNewEmployee();
  }, [fetchSingleNewEmployee]);

  const HandleEditNewEmployee = () => {
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
      updateNewEmployee({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/addnewemployee");
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



  return (
    <main id="main" className="main">
    <section className="section">
      <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
        {/* <h3 class="d-inline m-0 p-0">New Employee
    </h3> */}
        <div className="row">
          <div className="col-md-8 ">
            <h5 className="d-inline">
              <b> Edit Employee</b>
            </h5>
          </div>
        </div>
  
        <hr style={{backgroundColor:'black',}} />
        <div className="row mt-3">
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
         
        </div>
        <div className="d-grid gap-2 d-flex justify-content-center my-4">
          <button className="button" style={{ verticalAlign: "middle" }}
           onClick= {HandleEditNewEmployee}  >
            <span>Save</span>
          </button>
        </div>
        {/* form end */}
      </div>
    </section>
  </main>
  )
}

export default EditEmployee