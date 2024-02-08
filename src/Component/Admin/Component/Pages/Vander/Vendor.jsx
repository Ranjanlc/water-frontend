import React from 'react'
import './Vander.css'
import { Link } from 'react-router-dom'
const Vendor = () => {
    return (
        <>
            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        {/* <div className=" row">
                            <div className="col-md-7">
                                <h5 className="d-inline">
                                    <b>   New Vendor</b>
                                </h5>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Search by  ID or Name</label>
                                    <input
                                        type="text"
                                        className="form-control mt-1 "
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div> */}
                            <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b> New Vendor</b>
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
                        <hr className=" m-0 mb-3   " style={{
                            background: 'black',

                        }} />
                        <h5>
                            <b>Vendor Account</b>
                        </h5>
                        <div className=" row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Open Account Date</label>
                                    <input type="date" className="form-control a1" placeholder="Date" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Vendor Name</label>
                                    <input
                                        type="text"
                                        className="form-control a1"
                                        placeholder="Vendor Name"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Contact Number</label>
                                    <input
                                        type="number"
                                        className="form-control a1"
                                        placeholder="Contact Number"
                                    />
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
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Remark</label>
                                    <input
                                        type="text"
                                        className="form-control a1"
                                        placeholder="Remark"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Opening Balance</label>
                                    <input
                                        type="text"
                                        className="form-control a1"
                                        placeholder="Opening Balance"
                                    />
                                </div>
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center my-0">
                                <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Save</span>
                                </button>
                                {/* <button class="button" style="vertical-align:middle"><span>Cancel</span></button> */}
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}
                        {/* <hr className=" mt-2 mb-3   " style={{
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
                                                    style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                                                >
                                                    SNO.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
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
                                                    Open Date
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Vender Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Address
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Contact
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
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
                                            <tr>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1231
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1231845897#
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    23-10-2023
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    ABC
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    indore
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    9887654321
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    2000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/editvendorform" style={{ textDecoration: "none" }}>
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
                                                    1231
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1231845897#
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    23-10-2023
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    ABC
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    indore
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    9887654321
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    2000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/editvendorform" style={{ textDecoration: "none" }}>
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
                                                    1231
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1231845897#
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    23-10-2023
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    ABC
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    indore
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    9887654321
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    2000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/editvendorform" style={{ textDecoration: "none" }}>
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

export default Vendor;