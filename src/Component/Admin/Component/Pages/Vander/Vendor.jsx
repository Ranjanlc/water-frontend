import { useCallback, useEffect, useState } from "react";
import "./Vander.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addVendorMy,
  getAllVendorMy,
  deleteVendorMy,
} from "../../../../../Redux/Features/Vendor/VendorSlice";
import { useSnackbar } from "notistack";
import { Modal } from "react-bootstrap";
import Loader from "../../../../Loader/Loader";

const Vendor = () => {
  const [openAccountDate, setOpenAccountDate] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [remarkMy, setRemarkMy] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");

  const [openAccountDateError, setOpenAccountDateError] = useState("");
  const [vendorNameError, setVendorNameError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [remarkMyError, setRemarkMyError] = useState("");
  const [openingBalanceError, setOpeningBalanceError] = useState("");

  const dispatch = useDispatch();

  const { allVendorMyData, loading } = useSelector((state) => state.vendor);
  const { enqueueSnackbar } = useSnackbar();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedRow, setSelectedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchVendorInfo = useCallback(() => {
    dispatch(
      getAllVendorMy((message) => {
        console.log(message);
      })
    );
  }, [dispatch]);

  useEffect(() => {
    fetchVendorInfo();
  }, [fetchVendorInfo]);

  const handleSubmitByVendor = () => {
    setOpenAccountDateError("");
    setVendorNameError("");
    setContactNumberError("");
    setAddressError("");
    setRemarkMyError("");
    setOpeningBalanceError("");

    if (!openAccountDate) {
      setOpenAccountDateError(" Open Account Date  is Required!!");
      return;
    }
    if (!vendorName) {
      setVendorNameError("Vendor Name is Required!!");
      return;
    }

    if (!contactNumber) {
      setContactNumberError("Contact Number is Required!!");
      return;
    }

    if (!address) {
      setAddressError("Address is Required!!");
      return;
    }

    if (!remarkMy) {
      setRemarkMyError("Remark is Required!!");
      return;
    }

    if (!openingBalance) {
      setOpeningBalanceError("Opening Balance is Required!!");
      return;
    }

    let payload = {
      openAccountDate: openAccountDate,
      vendorName: vendorName,
      contactNumber: contactNumber,
      address: address,
      remark: remarkMy,
      openingBalance: openingBalance,
    };

    dispatch(
      addVendorMy({
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });

          fetchVendorInfo();

          setOpenAccountDateError("");
          setVendorNameError("");
          setContactNumberError("");
          setAddressError("");
          setRemarkMyError("");
          setOpeningBalanceError("");

          setOpenAccountDate("");
          setVendorName("");
          setContactNumber("");
          setAddress("");
          setRemarkMy("");
          setOpeningBalance("");
        },
      })
    );
  };

  const HandleOpenModal = (id) => {
    setSelectedRow(id);
    handleShow();
  };

  const rvendorDeleteHandler = () => {
    dispatch(
      deleteVendorMy({
        id: selectedRow,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          fetchVendorInfo();
          handleClose();
        },
      })
    );
  };

  const filteredVendorn = allVendorMyData?.filter((vendorme) =>
    vendorme.vendorName.toLowerCase().includes(searchTerm.toLowerCase())
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
                    <b> New Vendor</b>
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
                className=" m-0 mb-3   "
                style={{
                  background: "black",
                }}
              />

              <h5>
                <b>Vendor Account</b>
              </h5>

              <div className=" row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Open Account Date</label>
                    <input
                      type="date"
                      className="form-control a1"
                      placeholder="Date"
                      value={openAccountDate}
                      onChange={(e) => {
                        setOpenAccountDate(e.target.value);
                        setOpenAccountDateError("");
                      }}
                    />
                    {openAccountDateError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {openAccountDateError}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label>Vendor Name</label>
                    <input
                      type="text"
                      className="form-control a1"
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
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      type="number"
                      className="form-control a1"
                      placeholder="Contact Number"
                      value={contactNumber}
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                        setContactNumberError("");
                      }}
                    />
                    {contactNumberError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {contactNumberError}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control a1"
                      placeholder="Address"
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
                    <label>Remark</label>
                    <input
                      type="text"
                      className="form-control a1"
                      placeholder="Remark"
                      value={remarkMy}
                      onChange={(e) => {
                        setRemarkMy(e.target.value);
                        setRemarkMyError("");
                      }}
                    />
                    {remarkMyError && (
                      <div
                        className="d-flex gap-2 align-items-center"
                        style={{ color: "red" }}
                      >
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        {remarkMyError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Opening Balance</label>
                    <input
                      type="text"
                      className="form-control a1"
                      placeholder="Opening Balance"
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

                <div className="d-grid gap-2 d-flex justify-content-center my-0">
                  <button
                    className="button"
                    style={{ verticalAlign: "middle" }}
                    onClick={handleSubmitByVendor}
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
                            style={{
                              paddingLeft: "4rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            SNO.
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Open Account Date
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
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Remark
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
                          <th scope="col " style={{ paddingLeft: "3rem" }}>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredVendorn?.length === 0 ? (
                          <td colSpan={10} className="pl-5 mt-2">
                            No Vendor Details Found!!
                          </td>
                        ) : (
                          <>
                            {filteredVendorn?.map((vendormp, i) => (
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
                                  {vendormp.openAccountDate}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {vendormp.vendorName}
                                </td>

                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {vendormp.contactNumber}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {vendormp.address}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {vendormp.remark}
                                </td>
                                <td
                                  className="text-center"
                                  style={{ paddingLeft: "4rem" }}
                                >
                                  {vendormp.openingBalance}
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
                                        to={`/admin/editvendorform/${vendormp._id}`}
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
                                          HandleOpenModal(vendormp?._id);
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
          <Modal.Title>Delete Vendor</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={rvendorDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Vendor;
