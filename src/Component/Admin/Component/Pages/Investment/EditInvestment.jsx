import React from 'react'

const EditInvestment = () => {
    return (
        <>
            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        <div className="row">
                            <div className="col-md-8 ">
                                <h5 className="d-inline">
                                    <b>Edit Investment</b>
                                </h5>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Search by ID or Name</label>
                                    <input
                                        type="text"
                                        className="form-control  "
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className=" m-0 mb-3   " style={{
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
                                <input type="text" className="form-control a1" placeholder="Customer Name" />
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "1rem" }}>
                                <label style={{ marginTop: "1.3rem" }} htmlFor="specificSizeSelect">
                                    Investment Detail:
                                </label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Enter Detail"
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

                        </div>
                        <hr className=" m-0 my-4   " style={{
                            background: 'black',
                        }} />
                        <div className="row mt-3">
                            <div className=" col-md-3 col-sm-12" style={{ lineHeight: "1rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    From Date:
                                </label>
                                <input type="date" className="form-control a1" placeholder="" />
                            </div>
                            <div className="  col-md-3 col-sm-12" style={{ lineHeight: "1rem" }}>
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
                                <input
                                    type="text"
                                    className="form-control a1"
                                    style={{ marginTop: "1.5rem" }}
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}
                        <div className=" d-flex justify-content-center mt-4">
                            <button className="button  ">
                                <span>Save </span>
                            </button>
                        </div>



                    </div>
                </section>
            </main>
        </>
    )
}

export default EditInvestment