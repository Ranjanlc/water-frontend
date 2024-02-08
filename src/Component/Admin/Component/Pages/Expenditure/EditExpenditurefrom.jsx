import React from 'react'

const EditExpenditurefrom = () => {
    return (
        <>

            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        <div className="row">
                            <div className="col-md-8 ">
                                <h5 className="d-inline">
                                    <b>Edit Expenditure</b>
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

                        </div>
                        <hr className=" m-0 my-4   " style={{
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
                        <div className=" d-flex justify-content-center mt-4">
                            <button className="button  "    >
                                <span>Save </span>
                            </button>
                        </div>
                       
                    </div>
                </section>
            </main>

        </>
    )
}

export default EditExpenditurefrom