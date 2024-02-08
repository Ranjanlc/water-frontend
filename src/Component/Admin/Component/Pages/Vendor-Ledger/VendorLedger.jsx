import React from 'react'
import './VendorLedger.css'
import { Link } from 'react-router-dom'
const VendorLedger = () => {
    return (
        <>

            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        {/* <div className=" row">
                            <div className="col-md-7">
                                <h5 className="d-inline">
                                    <b>Vendor Ledger</b>
                                </h5>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Search by ID or Name</label>
                                    <input
                                        type="text"
                                        className="form-control  mt-1"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-md-7 col-sm-12 ">
                                <h5 className="d-inline">
                                    <b>Vendor Ledger</b>
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
                        <hr className=" m-0  mb-3   " style={{
                            background: 'black',
                        }} />
                        <h5>Generate Vendor Ledger</h5>
                        <div className="row">

                            <div className=" col-sm-12  col-md-4 ">
                                <label className="" htmlFor="specificSizeSelect">
                                    Vendor Name/ID
                                </label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div className=" col-sm-12  col-md-4 ">
                                <label className="" htmlFor="specificSizeSelect">
                                    Ledger Type:
                                </label>
                                <select className="form-select a1" id="specificSizeSelect">
                                    <option selected="">Select Ledger</option>
                                    <option selected="">All Date Wiste Ledger</option>
                                    <option value={1}>All Month wise Ledger</option>
                                    <option value={1}>Form and To (Date Wise Ledger)</option>
                                    <option value={1}>Form and To (Month Wise Ledger)</option>
                                </select>
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center mt-3 mb-3">
                                <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Ledger</span>
                                </button>
                            </div>
                        </div>
                        <hr className=" m-0 mb-3   " style={{
                            background: 'black',
                        }} />

                        <h5>Vendor Detail</h5>
                        <div className="row">
                            <div className=" col-md-4 col-sm-12" >
                                <label className="" htmlFor="specificSizeSelect">
                                    Vendor Name/ID
                                </label>
                                <input type="text" className="form-control a1" placeholder="" />
                            </div>

                            <div className=" col-md-4 col-sm-12">
                                <label className="" htmlFor="specificSizeSelect">
                                    Outstanding Balance:
                                </label>
                                <input type="text" className="form-control a1" placeholder="20,000" />
                            </div>
                            <div className=" col-md-4 col-sm-12" >

                                <label className="" htmlFor="specificSizeSelect">
                                    Address:
                                </label>
                                <input type="text" className="form-control a1" placeholder="" />
                            </div>

                        </div>
                        <div className='row mt-2'>

                            <div className='col-md-4 col-sm-4'>
                                <label className="" htmlFor="specificSizeSelect">
                                    Contact:
                                </label>
                                <input type="number" className="form-control a1" placeholder="" />
                            </div>

                        </div>
                        <div className="d-grid gap-2 d-flex justify-content-center mt-3">
              <button className="button" style={{ verticalAlign: "middle" }}>
                <span>Save</span>
              </button>
            </div>


                        <hr className=" m-0 mb-3 mt-4      " style={{
                            background: 'black',

                        }} />
                        <h5 className="mt-3">
                            <b> All Dates Ledger</b>
                        </h5>
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
                                                    style={{ paddingLeft: "4rem" }}
                                                >
                                                    NO.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                   Vendor Name/ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                  Ledger Type
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                Outstanding Balance
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
                                              
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    ABC
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    4
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    457777
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    vijy nager bhopal
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    4080456454
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditVendorLedger" style={{ textDecoration: "none" }}>
                                                                <i className="ri-pencil-line" />
                                                            </Link>
                                                            {/* <i className="ri-pencil-line" /> */}
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

export default VendorLedger