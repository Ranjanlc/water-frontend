import React from 'react'

const EditVendorPaymentForm = () => {
    // { loggedIn ? <h1>Private page</h1> : <Navigate to="/login" /> }
    return (
        <>
            <main id="main" className="main">
                <section className="section">

                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">

                        <div className="row">
                            <div className="col-md-7 ">
                                <h5 className="d-inline">
                                    <b>Edit Vendor Payment Form </b>
                                </h5>
                            </div>
                            <div className="col-md-5 ">
                                <div className="form-group">
                                    <label className="mb-1">Search by ID or Name</label>
                                    <input
                                        type="text "
                                        className="form-control"
                                        // style={{ backgroundColor: " rgb(236, 236, 236)" }}
                                        placeholder="Search"
                                    />
                                </div>
                                
                            </div>

                        </div>

                        <hr className="m-0 mb-3"
                            style={{
                                background: 'black',
                            }} />

                        <div className="row">
                            <div className=" col-sm-12  col-md-4 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Account:
                                </label>
                                <input
                                    type="number"
                                    className="form-control a1"
                                    placeholder="#25445345"
                                />
                            </div>
                            <div className=" col-sm-12  col-md-4 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Vendor Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="enter customer name"
                                />
                            </div>
                            <div className=" col-sm-12  col-md-4 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Balance Amount:
                                </label>
                                <input
                                    type="number"
                                    className="form-control a1"
                                    placeholder="enter customer name"
                                />
                            </div>
                            <div className=" d-flex justify-content-center mt-3 ">
                                <input
                                    type="radio"
                                    id="html"
                                    name="fav_language"
                                    defaultValue="HTML"
                                    className="mx-2 "
                                />
                                CASH /{" "}
                                <input
                                    type="radio"
                                    id="html"
                                    name="fav_language"
                                    defaultValue="HTML"
                                    className="mx-2 "
                                />
                                CHEQUE
                            </div>
                        </div>
                        <div className="row mt-2">
                      
                            <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Payment Date:
                                </label>
                                <input type="Date" className="form-control a1" placeholder="Name" />
                            </div>
                            <div className="  col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Payment:
                                </label>
                                <input type="number" className="form-control a1" placeholder={1000} />
                            </div>
                            <div className="  col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Cheque No:
                                </label>
                                <input type="text" className="form-control a1" placeholder="Enter  Cheque No" />
                            </div>
                            <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Remark:
                                </label>
                                <input type="text" className="form-control a1" placeholder="Remark" />
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center mt-3">
                                {/* <button class="button" style="vertical-align:middle"><span>Cancel</span></button> */}
                                <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Save </span>
                                </button>
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}




                    </div>
                </section>
            </main>

        </>
    )
}

export default EditVendorPaymentForm