import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import './AddNewBank.css'

import { addNewBank, getAllNewBank, deleteNewBank }
 from "../../../../../Redux/Features/Transection/AddNewBankSlice";

import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Loader from "../../../../Loader/Loader";

const AddNewBank = () => {

  const [bankName, setBankName] = useState("");
  const [accountTitle, setAccountTitle] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");

  const [bankNameError, setBankNameError] = useState("");
  const [accountTitleError, setAccountTitleError] = useState("");
  const [accountNumberError, setAccountNumberError] = useState("");
  const [openingBalanceError, setOpeningBalanceError] = useState("");

  const dispatch = useDispatch();
  const { allNewBankData, loading } = useSelector(
    (state) => state.addNewBank
  );

  
  const { enqueueSnackbar } = useSnackbar();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNewBank = useCallback(() => {
    dispatch(
      getAllNewBank((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchNewBank();
  }, [fetchNewBank]);

  const handleSubmitNewBank = () => {
    setBankNameError("");
    setAccountTitleError("");
    setAccountNumberError("");
    setOpeningBalanceError("");
   

    if (!bankName) {
      setBankNameError("Bank Name is Required!!");
      return;
    }
    if (!accountTitle) {
      setAccountTitleError("Title is Required!!");
      return;
    }
    if (!accountNumber) {
      setAccountNumberError("Account Number Type is Required!!");
      return;
    }
    if (!openingBalance) {
      setOpeningBalanceError("Opening Balance is Required!!");
      return;
    }
   

    let payload = {
      bankname: bankName,
      accounttitle: accountTitle,
      accountnumber: accountNumber,
      openinigbalance: openingBalance,
    };

    dispatch(
      addNewBank({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewBank();
          setBankName("");
          setAccountTitle("");
          setAccountNumber("");
          setOpeningBalance("");
          
          setBankNameError("");
          setAccountTitleError("");
          setAccountNumberError("");
          setOpeningBalanceError("");
        },
      })
    );
  };

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const newBankDeleteHandler = () => {
    dispatch(
      deleteNewBank({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchNewBank();
          handleClose();
        },
      })
    );
  };

  const filteredNewBank = allNewBankData?.filter((newBank) =>
  newBank.bankname.toLowerCase().includes(searchTerm.toLowerCase())
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
                <b>Add New Bank</b>
              </h5>
            </div>
            <div className='col-md-3 col-sm-12' >
              <div className="form-group ">
         
                <input
                  type="search"
                  className="form-control "
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className='col-md-1 col-sm-12'>
              <button type="button" className="btn btn-danger 
                py-1">
                  Search
                </button>
            </div>
         
          </div>
      <hr className="   " style={{
                            background: 'black',
                        }} />
      <div className="row mt-2">
        <div className="row ">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Bank Name </label>
              <input type="text" className="form-control c2" 
              value={bankName}
              onChange={(e) => {
                setBankName(e.target.value);
                setBankNameError("");
              }}
              />
               {bankNameError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {bankNameError}
                        </div>
                      )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Account Title </label>
              <input type="text" className="form-control c2"
               value={accountTitle}
               onChange={(e) => {
                 setAccountTitle(e.target.value);
                 setAccountTitleError("");
               }}
               />
                {accountTitleError && (
                         <div
                           className="d-flex gap-2 align-items-center"
                           style={{ color: "red" }}
                         >
                           <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                           {accountTitleError}
                         </div>
                       )}
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label"> Account Number </label>
              <input type="text" className="form-control c2"
              value={accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
                setAccountNumberError("");
              }}
              />
               {accountNumberError && (
                        <div
                          className="d-flex gap-2 align-items-center"
                          style={{ color: "red" }}
                        >
                          <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                          {accountNumberError}
                        </div>
                      )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label"> Opening Balance </label>
              <input type="text" className="form-control c2"
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
        </div>
        <div className="d-grid gap-2 d-flex justify-content-center mt-2">
          <button className="button" style={{ verticalAlign: "middle" }}
          onClick={handleSubmitNewBank}
          >
            <span>Save</span>
          </button>
       
        </div>
      </div>
     
      <div className="row mt-4">
        <div className="">
          <div className="table-responsive">
            <table
              className="table table-hover"
              style={{ justifyContent: "center" }}
            >
              <thead style={{ whiteSpace: "nowrap" }}>
                <tr>
                  <th
                    scope="col"
                    className="text-center"
                    style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                  >
                    SNO
                  </th>
                  <th
                    scope="col"
                    style={{ paddingLeft: "3rem", textAlign: "center" }}
                  >
                    Bank Name{" "}
                  </th>
                  <th
                    scope="col"
                    style={{ paddingLeft: "2rem", textAlign: "center" }}
                  >
                    Acount Tittle{" "}
                  </th>
                  <th
                    scope="col"
                    style={{ paddingLeft: "3rem", textAlign: "center" }}
                  >
                    Account #{" "}
                  </th>
                  <th
                    scope="col"
                    style={{ paddingLeft: "2rem", textAlign: "center" }}
                  >
                    Opening Balance{" "}
                  </th>
                  <th scope="col " style={{ paddingLeft: "4rem" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
              {filteredNewBank?.length === 0 ? (
                          <td
                            colSpan={8}
                            className="text-center mt-2"
                            style={{ color: "#10c2a7" }}
                          >
                            No Bank Details Found
                          </td>
                        ) : (
                          <>
                            {filteredNewBank?.map((newBank, i) => (
                <tr style={{ whiteSpace: "nowrap" }} key={i}>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                    {i+1}
                  </td>
                  <td className="text-center" style={{ paddingLeft: "4rem" }}>
                    {newBank.bankname}
                  </td>
                  <td
                    className="text-center"
                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                  >
                    {newBank.accounttitle}
                  </td>
                  <td className="text-center" style={{ paddingLeft: "3rem" }}>
                  {newBank.accountnumber}
                  </td>
                  <td className="text-center" style={{ paddingLeft: 29 }}>
                  {newBank.openinigbalance}
                  </td>
                  
                  <td className="text-center" style={{ paddingLeft: "3rem" }}>
                    <div className="parent_div ">
                      <div
                        style={{ cursor: "pointer" }}
                        className="edit_icon"
                        aria-label="Example icon button with a menu icon"
                      >
                       <Link
                       to={`/admin/edit_bank/${newBank._id}`}
                       style={{textDecoration:"none"}}>
                        <i className="ri-pencil-line" /></Link>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className="delete_icon"
                        aria-label="Example icon button with a menu icon"
                        onClick={() => {
                          HandleOpenModal(newBank?._id);
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
          <Modal.Title>Delete Bank</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={newBankDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

   </>
  )
}

export default AddNewBank