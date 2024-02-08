import React from 'react'
import './VendorBalanceSheet.css'
const VendorBalanceSheet = () => {
    return (
        <>
            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        {/* <div className="row">
                            <div className="col-md-8 ">
                                <h5 className="d-inline">
                                    <b>Vendor Balance sheet</b>
                                </h5>
                            </div>
                            <div className="col-md-4 ">
                                <div className="form-group">
                                    <label>Search by ID or Name</label>
                                    <input
                                        type="text"
                                        className="form-control  "
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div> */}
                            <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="d-inline">
                <b>Vendor Balance sheet</b>
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
                                                    Balance
                                                </th>
                                                {/* <th scope="col " style={{ paddingLeft: "4rem" }}>
                                                    Action
                                                </th> */}
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
                                                {/* <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <i className="ri-pencil-line" />
                                                        </div>
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="delete_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <i className="ri-delete-bin-6-line " />
                                                        </div>
                                                    </div>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1231
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1231845897#
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
                                                {/* <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <i className="ri-pencil-line" />
                                                        </div>
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="delete_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <i className="ri-delete-bin-6-line " />
                                                        </div>
                                                    </div>
                                                </td> */}
                                            </tr>
                                            <tr>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1231
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    1231845897#
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
                                                {/* <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <i className="ri-pencil-line" />
                                                        </div>
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="delete_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <i className="ri-delete-bin-6-line " />
                                                        </div>
                                                    </div>
                                                </td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="form-group my-2 ">
                                    <div className="row">
                                        <div className="col-md-4 mt-2">
                                            <label>Balance Amount</label>
                                            <input
                                                type="text"
                                                className="form-control a1"
                                                placeholder={2000}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}

export default VendorBalanceSheet