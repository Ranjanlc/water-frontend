import React from 'react'
import './Expenditure.css'
import { Link } from 'react-router-dom'
const Expenditure = () => {
    return (
        <>

            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        {/* <div className="row">
                            <div className="col-md-8 ">
                                <h5 className="d-inline">
                                    <b>Expenditure</b>
                                </h5>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Search by ID or Name</label>
                                    <input
                                        type="text"
                                        className="form-control   "
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div> */}

                        <div className="row">
                            <div className="col-md-7 col-sm-12 ">
                                <h5 className="">
                                    <b>Expenditure</b>
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
                        <div className="row">
                            <div className="col-md-9 my-2 ">
                                <h5>
                                    <b>Add Expenditure</b>
                                </h5>
                            </div>
                            <div className="col-md-3  ">
                                <button className="button w-75" >
                                    <span>New Head</span>
                                </button>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    {" "}
                                    Expenditure Head:
                                </label>
                                <select className="form-select a1" id="specificSizeSelect">
                                    <option selected="">Select Head</option>
                                    <option value={1}>1-Lunch</option>
                                    <option value={2}>2-Tea</option>
                                </select>
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label htmlFor="specificSizeSelect">Date:</label>
                                <input type="date" className="form-control a1" placeholder="Price" />
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label htmlFor="specificSizeSelect">Expense Description:</label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Enter discription"
                                />
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label htmlFor="specificSizeSelect">Expense Amount:</label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div className="d-flex justify-content-center mt-4 mb-3">
                                {/* <button className="button  py-1"    >
                                    <span>Save Expense</span>
                                </button> */}

                                <button type="button" class="btn btn-success" style={{ backgroundColor: 'rgb(26, 156, 128)' }}>Save Expense</button>
                            </div>
                        </div>
                        <hr className=" m-0 mb-3   mt-2" style={{
                            background: 'black',
                        }} />
                        <div className="row mt-1">
                            <div className=" col-md-3 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Expenditure Head:
                                </label>
                                <select className="form-select a1" id="specificSizeSelect">
                                    <option selected="">Select Head</option>
                                    <option value={1}>1-Lunch</option>
                                    <option value={2}>2-Tea</option>
                                </select>
                            </div>
                            <div className=" col-md-3 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    From Date:
                                </label>
                                <input type="date" className="form-control a1" placeholder="" />
                            </div>
                            <div className="  col-md-3 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    To Date:
                                </label>
                                <input
                                    type="date"
                                    className="form-control a1"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="col-md-3 ">
                                <div>
                                    <input
                                        type="text"
                                        className="form-control a1"
                                        style={{ marginTop: "2.5rem" }}
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}

                        <hr className=" mt-4" style={{
                            background: 'black',
                        }} />
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
                                                        whiteSpace: "nowrap"
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
                                            <tr>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    Lunch
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    25-12-2023
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    Office Lunch
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    100
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditExpenditurefrom" style={{ textDecoration: "none" }}  >
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
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    Tea
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    25-12-2023
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    Office Tea
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    500
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditExpenditurefrom" style={{ textDecoration: "none" }}  >
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
                                                    3
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    Lunch
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    25-12-2023
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    Office Lunch
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    100
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditExpenditurefrom" style={{ textDecoration: "none" }}  >
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
                        <div className="row mt-2">
                            <div className=" col-sm-3  col-md-3" style={{ lineHeight: "2rem" }}>
                                <div className="d-grid gap-2 d-flex justify-content-right ">
                                    {/* <button className="button" type="button" onclick="window.print()">
                                        Print
                                    </button> */}

                                    <button type="button" class="btn btn-success" style={{ backgroundColor: 'rgb(26, 156, 128)' }}>Print</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}

export default Expenditure