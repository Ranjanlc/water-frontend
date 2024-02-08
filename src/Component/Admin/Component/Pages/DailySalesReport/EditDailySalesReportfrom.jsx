import React from 'react'

const EditDailySalesReportfrom = () => {
    return (
        <>


            <main id="main" className="main">
                <section className="section">

                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        <h5>
                            <b>Edit Daily Sales Report </b>
                        </h5>
                        <hr className=""
              style={{
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
                                        <label>From Date</label>
                                        <input
                                            type="date"
                                            className="form-control a1"
                                            placeholder={2021}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>To Date</label>
                                        <input
                                            type="date"
                                            className="form-control a1"
                                            placeholder={2021}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center ">
                                <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Save</span>
                                </button>
                                {/* <button class="button" style="vertical-align:middle"><span>Search</span></button> */}
                                {/* <button class="button" style="vertical-align:middle"><span>Print</span></button> */}
                            </div>
                        </div>
                        <hr className=" m-0 my-3   " style={{
                            background: 'black',
                        }} />
                       
                    </div>
                </section>
            </main>

        </>
    )
}

export default EditDailySalesReportfrom