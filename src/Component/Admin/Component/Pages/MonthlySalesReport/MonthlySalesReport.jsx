import React from 'react'
import './MonthlySalesReport.css'
import { Link } from 'react-router-dom'
const MonthlySalesReport = () => {
    return (
        <>

            <main id="main" className="main">
                <section className="section">
          
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        {/* <h5>
                            <b>Monthly Sales Report</b>
                        </h5> */}
                           <div className="row">
                            <div className="col-md-7 col-sm-12 ">
                                <h5 className="">
                                    <b>Monthly Sales Report</b>
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
                        <hr className="   " style={{
                            background: 'black',
                        }} />
                        <div className="d-flex justify-content-between">
                            <h6 className="d-inline">
                                <b>User : Tahir Quershi</b>
                            </h6>
                        </div>
                        <div className="row mt-3">
                            <div className="row ">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Employee</label>
                                        <select
                                            className="form-select a1"
                                            aria-label="Default select example"
                                        >
                                            <option selected="">All Employee</option>
                                            <option>Tahir</option>
                                            <option>Rahir</option>
                                            <option>Kahir</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>From Month</label>
                                        <div className="d-flex justify-content-center">
                                            <select
                                                className="form-select a1 mx-1"
                                                aria-label="Default select example"
                                            >
                                                <option selected="">Jan</option>
                                                <option>Feb</option>
                                                <option>March</option>
                                                <option>April</option>
                                            </select>
                                            <input
                                                type="text"
                                                className="form-control a1"
                                                placeholder={2021}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>To Month</label>
                                        <div className="d-flex justify-content-center">
                                            <select
                                                className="form-select a1 mx-1"
                                                aria-label="Default select example"
                                            >
                                                <option selected="">March</option>
                                                <option>Feb</option>
                                                <option>March</option>
                                                <option>April</option>
                                            </select>
                                            <input
                                                type="text"
                                                className="form-control a1"
                                                placeholder={2021}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center ">
                                <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Search</span>
                                </button>
                            </div>
                        </div>
                        <hr className=" m-0 my-3   " style={{
                            background: 'black',
                        }} />
                        <div className="row mt-4 ">
                            <div className="">
                                <h6>From [ Jan 2021 ] To [March 2021]</h6>
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
                                                    SNO
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-center"
                                                    style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                                                >
                                                    Month
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-center"
                                                    style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                                                >
                                                    Year
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ paddingLeft: "3rem", textAlign: "center" }}
                                                >
                                                    Products
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ paddingLeft: "2rem", textAlign: "center" }}
                                                >
                                                    Sale
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Return 19 Ltr Bottle
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Bill Amount
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ paddingLeft: "3rem", textAlign: "center" }}
                                                >
                                                    Payment
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Tax/Discount
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Deliver Person
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
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    Jan
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    2021
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    19 LTR
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    15
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    3
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    1500
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    0
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    Saleem Ahmed
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditMonthlySalesReportfrom" style={{ textDecoration: "none" }}  >
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
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    Jan
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    2021
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    19 LTR
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    15
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    3
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    1500
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    0
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: 29 }}>
                                                    Saleem Ahmed
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditMonthlySalesReportfrom" style={{ textDecoration: "none" }}  >
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

export default MonthlySalesReport