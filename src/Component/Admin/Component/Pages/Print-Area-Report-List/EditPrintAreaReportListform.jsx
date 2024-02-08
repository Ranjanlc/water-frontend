import React from 'react'

const EditPrintAreaReportListform = () => {
    return (
        <>
            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        {/* <h3 class="d-inline m-0 p-0">New Employee
  </h3> */}
                        <div className="row">
                            <div className="col-md-9 ">
                                <h5 className="d-inline">
                                    <b> Edit Print Area List</b>
                                </h5>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Search by ID or Name</label>
                                    <input
                                        type="text"
                                        className="form-control  "
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                            {/* <div className=" col-md-3 float-end mt-4">
                                <button
                                    type="button"
                                    className="btn   mt-2"
                                    style={{ backgroundColor: "#21c0a8", color: "white" }}
                                >
                                    Print Blank Ticket
                                </button>
                            </div> */}
                        </div>
                        <hr className=" m-0 mb-3   " style={{
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
                                    <option selected="">Select Employee</option>
                                    <option value={1}>Employee 1</option>
                                    <option value={2}>Employee 2</option>
                                    <option value={3}>Employee 3</option>
                                </select>
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center my-4">
                                <button className="button " style={{ verticalAlign: "middle" }}>
                                    <span>Save </span>
                                </button>
                                {/* <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Print List</span>
                                </button> */}
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}

                        {/* <hr className=" m-0 mb-3   " style={{
                            background: 'black',
                        }} /> */}

                    </div>
                </section>
            </main>

        </>
    )
}

export default EditPrintAreaReportListform