import React from 'react'
import './AddVendorPayment.css'
import { Link } from 'react-router-dom'

const AddVendorPayment = () => {
  return (
    <>

      <main id="main" className="main">
        <section className="section">

          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">

            {/* <div className="row">
              <div className="col-md-7 ">
                <h5 className="d-inline">
                  <b>Add Vendor Payment</b>
                </h5>
              </div>
              <div className="col-md-5 ">
                <div className="form-group">
                  <label className="mb-1">Search by ID or Name</label>
                  <input
                    type="text "
                    className="form-control "
                    placeholder="Search"
                  />
                </div>
              </div>

            </div> */}

<div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b>Add Vendor Payment</b>
              </h5>
            </div>
            <div className='col-md-3 col-sm-12' >
              <div className="form-group ">
         
                <input
                  type="search"
                  className="form-control   "
                  placeholder="Search"
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

            <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} />

            <div className="row">
              <div className=" col-sm-12  col-md-4 " style={{ lineHeight: "2rem" }}>
                <label className="" htmlFor="specificSizeSelect">
                  Account:
                </label>
                <input
                  type="number"
                  className="form-control a1"
                  placeholder="#25445345"
                />
              </div>
              <div className=" col-sm-12  col-md-4 " style={{ lineHeight: "2rem" }}>
                <label className="" htmlFor="specificSizeSelect">
                  Vendor Name:
                </label>
                <input
                  type="text"
                  className="form-control a1"
                  placeholder="enter customer name"
                />
              </div>
              <div className=" col-sm-12  col-md-4 " style={{ lineHeight: "2rem" }}>
                <label className="" htmlFor="specificSizeSelect">
                  Balance Amount:
                </label>
                <input
                  type="number"
                  className="form-control a1"
                  placeholder="enter customer name"
                />
              </div>
              <div className=" d-flex justify-content-center mt-3 ">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  defaultValue="HTML"
                  className="mx-2 "
                />
                CASH /{" "}
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  defaultValue="HTML"
                  className="mx-2 "
                />
                CHEQUE
              </div>
            </div>
            <div className="row mt-2">
              {/* <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                <label className="" htmlFor="specificSizeSelect">
                  Select Bank:
                </label>
                <select className="form-select a1" id="specificSizeSelect">
                  <option selected="">Select</option>
                  <option value={1}>Bank 2</option>
                  <option value={2}>Bank 3</option>
                  <option value={3}>Bank 4</option>
                </select>
              </div> */}
              <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                <label className="" htmlFor="specificSizeSelect">
                  Payment Date:
                </label>
                <input type="Date" className="form-control a1" placeholder="Name" />
              </div>
              <div className="  col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                <label className="" htmlFor="specificSizeSelect">
                  Payment:
                </label>
                <input type="number" className="form-control a1" placeholder={1000} />
              </div>
              <div className="  col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                <label className="" htmlFor="specificSizeSelect">
                  Cheque No:
                </label>
                <input type="text" className="form-control a1" placeholder="Enter  Cheque No" />
              </div>
              <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                <label className="" htmlFor="specificSizeSelect">
                  Remark:
                </label>
                <input type="text" className="form-control a1" placeholder="Remark" />
              </div>
              <div className="d-grid gap-2 d-flex justify-content-center mt-3">
                {/* <button class="button" style="vertical-align:middle"><span>Cancel</span></button> */}
                <button className="button" style={{ verticalAlign: "middle" }}>
                  <span>Payment</span>
                </button>
              </div>
            </div>
            {/* form end */}
            {/* Table Strat */}
            {/* <hr className="  my-3  "
              style={{
                background: 'black',
              }} /> */}



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
                          style={{ paddingLeft: "4rem" }}
                        >
                          SNO.
                        </th>
                        <th
                          scope="col"
                          style={{ paddingLeft: "3rem", textAlign: "center" }}
                        >
                          Acc#
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Vendor Name
                        </th>
                        <th
                          scope="col"
                          style={{ paddingLeft: "3rem", textAlign: "center" }}
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          style={{ paddingLeft: "3rem", textAlign: "center" }}
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          style={{ paddingLeft: "3rem", textAlign: "center" }}
                        >
                          Balance
                        </th>
                        <th scope="col " style={{ paddingLeft: "3rem" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          01
                        </td>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          #36457
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          ABC
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          indore
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          9876543212
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          2000
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to='/admin/editvendorpaymentform' style={{ textDecoration: "none" }}  >
                                <i className="ri-pencil-line" />
                              </Link>
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className="delete_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <i className="ri-delete-bin-6-line " />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          01
                        </td>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          #36457
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          ABC
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          indore
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          9876543212
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          2000
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to='/admin/editvendorpaymentform' style={{ textDecoration: "none" }}  >
                                <i className="ri-pencil-line" />
                              </Link>
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className="delete_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <i className="ri-delete-bin-6-line " />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          01
                        </td>
                        <td className="text-center" style={{ paddingLeft: "4rem" }}>
                          #36457
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          ABC
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          indore
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          9876543212
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          2000
                        </td>
                        <td className="text-center" style={{ paddingLeft: "3rem" }}>
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to='/admin/editvendorpaymentform' style={{ textDecoration: "none" }}  >
                                <i className="ri-pencil-line" />
                              </Link>

                              {/* <Link to="/addvendorpayment/addvendorpaymentform"  > */}
                              {/* </Link> */}
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className="delete_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <i className="ri-delete-bin-6-line " />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    </>
  )
}

export default AddVendorPayment