import React from 'react'
import './Investment.css'
import { Link } from 'react-router-dom'
import { TbGitBranchDeleted } from "react-icons/tb";

const Investment = () => {
    return (
        <>

            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        <div className="row">
                            <div className="col-md-7 col-sm-12 ">
                                <h5 className="">
                                    <b>Investment</b>
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
                        <hr className=" m-0 mb-2   " style={{
                            background: 'black',
                        }} />
                        <h5 className="m-0 p-0">
                            <b>Add New Investment</b>
                        </h5>
                        <div className="row">
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "1rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Customer Name:
                                </label>
                                <input type="text" className="form-control a1" placeholder="Name" />
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "1rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Investment Detail:
                                </label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Enter discription"
                                />
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "1rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Amount:
                                </label>
                                <input
                                    type="number"
                                    className="form-control a1"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "1rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Date:
                                </label>
                                <input
                                    type="date"
                                    className="form-control a1"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div className=" d-flex justify-content-center mt-4">
                                {/* <button className="button py-1 ">
                                    <span>Save New Investment</span>
                                </button> */}

                                <button type="button" class="btn btn-success" style={{ backgroundColor: 'rgb(26, 156, 128)' }}>Save New Investment</button>

                            </div>
                        </div>
                        <hr className=" m-0 mb-3 mt-4   " style={{
                            background: 'black',
                        }} />
                        <div className="row mt-3">
                            <div className=" col-md-3 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    From Date:
                                </label>
                                <input type="date" className="form-control c2" placeholder="" />
                            </div>
                            <div className="  col-md-3 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    To Date:
                                </label>
                                <input
                                    type="date"
                                    className="form-control c2"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="col-md-3 ">
                                <input
                                    type="text"
                                    className="form-control a1"
                                    style={{ marginTop: "2.5rem" }}
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}
                        <h5 className="mt-4">
                            <b>Investment Details</b>
                        </h5>
                        <hr />
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
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Date
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Invester Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Investment Detail
                                                </th>
                                                <th
                                                    scope="col "
                                                    style={{ paddingLeft: "7rem", whiteSpace: "nowrap" }}
                                                >
                                                    Amount
                                                </th>
                                                <th scope="col " style={{ paddingLeft: "3rem" }}>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    25-12-2023
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    ABC
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    JDFJKD
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "6rem" }}>
                                                    1000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditInvestment" style={{ textDecoration: "none" }} >
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
                                                    1
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    25-12-2023
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    ABC
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    JDFJKD
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "6rem" }}>
                                                    1000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditInvestment" style={{ textDecoration: "none" }} >
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
                                                    1
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    25-12-2023
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    ABC
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    JDFJKD
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "6rem" }}>
                                                    1000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditInvestment" style={{ textDecoration: "none" }} >
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
                        <div className="row">
                            <div className=" col-sm-12  col-md-3" style={{ lineHeight: "2rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Total Investment:
                                </label>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    0
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default Investment