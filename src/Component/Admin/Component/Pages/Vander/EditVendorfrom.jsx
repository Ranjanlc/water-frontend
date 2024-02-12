import React, { useCallback, useEffect, useState } from "react";
import "./Vander.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import {
  getSingleVendorMy,
  updateVendorMy,

} from "../../../../../Redux/Features/Vendor/VendorSlice";
import { useSnackbar } from "notistack";


function EditVendorfrom() {

  const { id } = useParams();

  const dispatch = useDispatch();
  const { allVendorMyData } = useSelector((state) => state.vendor);
  const { enqueueSnackbar } = useSnackbar();
  const data = allVendorMyData && allVendorMyData?.find((e) => e?._id === id);
  const navigate = useNavigate();
  const [openAccountDate, setOpenAccountDate] = useState(data?.openAccountDate);
  const [vendorName, setVendorName] = useState(data?.vendorName);
  const [contactNumber, setContactNumber] = useState(data?.contactNumber);
  const [address, setAddress] = useState(data?.address);
  const [remarkMy, setRemarkMy] = useState(data?.remark);
  const [openingBalance, setOpeningBalance] = useState(data?.openingBalance);

  const [openAccountDateError, setOpenAccountDateError] = useState("");
  const [vendorNameError, setVendorNameError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [remarkMyError, setRemarkMyError] = useState("");
  const [openingBalanceError, setOpeningBalanceError] = useState("");

  const fetchAllSingleVendor = useCallback(() => {
    dispatch(
      getSingleVendorMy({
        id: id,
        callback: (message) => {
          console.log(message);
        },
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    fetchAllSingleVendor();
  }, [fetchAllSingleVendor]);

  const HandleEditVendor = () => {
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
      updateVendorMy({
        id: id,
        payload: payload,
        callback: (message) => {
          enqueueSnackbar(message, { variant: "success" });
          navigate("/admin/vendor");


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


  return (
    <>

      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            <div className=" row">
              <div className="col-md-12">
                <h5 className="d-inline">
                  <b> Edit Vendor</b>
                </h5>
              </div>

            </div>
            <hr className=" mb-3" style={{
              background: 'black',

            }} />
            <h5>
              <b>Vendor Account</b>
            </h5>
            <div className=" row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Open Account Date</label>
                  <input type="date" className="form-control a1" placeholder="Date"
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
              <div className="d-grid gap-2 d-flex justify-content-center mt-2">
                <button className="button mb-3 " style={{ verticalAlign: "middle" }}
                onClick={HandleEditVendor}>
                 Save
                </button>
                {/* <button class="button" style="vertical-align:middle"><span>Cancel</span></button> */}
              </div>
            </div>
            {/* form end */}
            {/* Table Strat */}


          </div>
        </section>
      </main>

    </>
  )
}

export default EditVendorfrom;