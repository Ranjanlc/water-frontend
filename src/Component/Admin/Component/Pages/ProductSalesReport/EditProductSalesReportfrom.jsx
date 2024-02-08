import React from 'react'

const EditProductSalesReportfrom = () => {
    return (
        <>
            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                        <h5>
                            <b>  Edit Product Sales Report</b>
                        </h5>
                        <div className="d-flex justify-content-between">
                            <h6 className="d-inline">
                                <b>User : Tahir Quershi</b>
                            </h6>
                        </div>
                        <hr className="m-0 mb-3 mt-1"
              style={{
                background: 'black',
              }} />
                        <div className="row mt-3">
                            <div className="row ">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Product</label>
                                        <select
                                            className="form-select a1"
                                            aria-label="Default select example"
                                        >
                                            <option selected="">Select category</option>
                                            <option value="Disposal">Disposal</option>
                                            <option value="20 Gallon Water Bottles">
                                                20 Gallon Water Bottles
                                            </option>
                                            <option value="Ice Product">Ice Product</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>From Year</label>
                                        <input
                                            type="text"
                                            className="form-control a1"
                                            placeholder={2021}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>To Year</label>
                                        <input
                                            type="text"
                                            className="form-control a1"
                                            placeholder={2023}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Salesman</label>
                                        <select
                                            className="form-select a1"
                                            aria-label="Default select example"
                                        >
                                            <option selected="">Select Salesman</option>
                                            <option value="Disposal">Tahir Quershi</option>
                                            <option value="20 Gallon Water Bottles">Saleem Aahmad</option>
                                            <option value="Ice Product">Nitin malwiya</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center ">
                                <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Save</span>
                                </button>
                            </div>
                        </div>
                        <hr className=" m-0 mb-3   mt-2" style={{
                            background: 'black',
                        }} />

                    </div>
                </section>
            </main>



        </>
    )
}

export default EditProductSalesReportfrom