import React from 'react'
// import './PrintAreaReportList.css'
import { Link } from 'react-router-dom'
const PrintAreaReportList = () => {
    return (
        <>
            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        {/* <h3 class="d-inline m-0 p-0">New Employee
  </h3> */}
                        <div className="row mt-2">
                            <div className="col-md-6 ">
                                <h5 className="d-inline">
                                    <b>Print Area List</b>
                                </h5>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">

                                    <input
                                        type="text"
                                        className="form-control  "
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                            <div className=" col-md-3 float-end ">
                                <button
                                    type="button"
                                    className="btn"
                                    style={{ backgroundColor: "#21c0a8", color: "white" }}
                                >
                                    Print Blank Ticket
                                </button>
                            </div>
                        </div>
                        <hr className=" m-0 mt-2 mb-2   " style={{
                            background: 'black',
                        }} />
                        <div className="row">
                            <div className=" col-sm-12  col-md-4" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Date:
                                </label>
                                <input type="date" className="form-control a1" placeholder="Price" />
                            </div>
                            <div className=" col-sm-12  col-md-4" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Employee Name:
                                </label>
                                <input type="text" className="form-control a1" placeholder="Name" />
                            </div>
                            <div className=" col-sm-12  col-md-4" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Day:
                                </label>
                                <input type="text" className="form-control a1" placeholder="Day" />
                            </div>
                        </div>
                        <div className="row">
                            <div className=" col-sm-12  col-md-4" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Select Day:
                                </label>
                                <select className="form-select a1" id="specificSizeSelect">
                                    <option selected="">Monday</option>
                                    <option value={1}>Tuesday</option>
                                    <option value={2}>Wednesday</option>
                                    <option value={3}>Thursday</option>
                                    <option value={3}>Friday</option>
                                    <option value={3}>Saturday</option>
                                    <option value={3}>Sunday</option>
                                </select>
                            </div>
                            <div className=" col-sm-12  col-md-4" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Select Employee:
                                </label>
                                <select className="form-select a1" id="specificSizeSelect">
                                    <option selected=""> Select Employee</option>
                                    <option value={1}>Employee 1</option>
                                    <option value={2}>Employee 2</option>
                                    <option value={3}>Employee 3</option>
                                </select>
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center my-4">
                                {/* <button className="button " style={{ verticalAlign: "middle" }}>
                                    <span>Select</span>
                                </button> */}
                                {/* <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Print List</span>
                                </button> */}

                                <button type="button" class="btn btn-success px-3" style={{ backgroundColor: 'rgb(26, 156, 128)' }}>Select</button>
                                <button type="button" class="btn btn-success" style={{ backgroundColor: 'rgb(26, 156, 128)' }}>Print List</button>
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}
                        <h5>
                            <b>Employee Area List</b>
                        </h5>
                        {/* <hr className=" m-0 mb-3   " style={{
                            background: 'black',
                        }} /> */}
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
                                                    style={{ paddingLeft: "3rem" }}
                                                >
                                                    SNO.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ paddingLeft: "3rem", textAlign: "center" }}
                                                >
                                                    Area
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Cutomer ID
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    address
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
                                                    Req. Bottle
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Price
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Sale Bottle
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Return Bottle
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Bill no.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
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
                                                    Balance Amount
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Received Amount
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Balance Bottle
                                                </th>
                                                <th scope="col " style={{ paddingLeft: "3rem" }}>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    01
                                                </td>
                                                <td className="text-center" >
                                                    vn nagar
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    Shivani
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    indore
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    8897654987
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    20
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    80
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    10
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    09
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    20
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    20
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditPrintAreaReportListform" style={{ textDecoration: "none" }} >
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
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    01
                                                </td>
                                                <td className="text-center" >
                                                    vn nagar
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    Shivani
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    indore
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    8897654987
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    20
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    80
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    10
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    09
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    20
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    20
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditPrintAreaReportListform" style={{ textDecoration: "none" }} >
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
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    01
                                                </td>
                                                <td className="text-center" >
                                                    vn nagar
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    Shivani
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    indore
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    8897654987
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    20
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    80
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    10
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    09
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    2000
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    20
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    20
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/EditPrintAreaReportListform" style={{ textDecoration: "none" }} >
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
                        <div className="row mt-1">
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Total Bottle Required:
                                </label>
                                <label className="" htmlFor="specificSizeSelect">
                                    3
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default PrintAreaReportList