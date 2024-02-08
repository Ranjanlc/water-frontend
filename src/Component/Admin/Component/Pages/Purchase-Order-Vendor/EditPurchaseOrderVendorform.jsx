import React from 'react'

const EditPurchaseOrderVendorform = () => {
    return (
        <>
            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                    
                            <div className="row">
                            <div className="col-md-7 col-sm-12 ">
                                <h5 className="">
                                    <b>Edit Vendor</b>
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
                            <h5 className="">New Purchase Order:</h5>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Select Product:
                                </label>
                                <select className="form-select a1" id="specificSizeSelect">
                                    <option selected="">Item 1</option>
                                    <option value={1}>Item 2</option>
                                    <option value={2}>Item 3</option>
                                    <option value={3}>Item 4</option>
                                </select>
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                            <label>Price</label>
                <input
                  type="number"
                  className="form-control c2 "
                  placeholder="Price"
                />
                <div class="form-check form-check-inline mt-1">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Price USD</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Price SHS</label>
                </div>
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Purchase Quantity:
                                </label>
                                <input
                                    type="number"
                                    className="form-control a1"
                                    placeholder="enter customer name"
                                />
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Amount:
                                </label>
                                <input
                                    type="number"
                                    className="form-control   a1"
                                    placeholder="Enter Amounts"
                                />
                            </div>
                          
                        </div>
                        <hr className=" m-0 my-4    " style={{
                            background: 'black',
                        }} />
                        <div className="row mt-2">
                            <h5>Billing:</h5>
                            <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Vendor Name/ID:
                                </label>
                                <input type="text" className="form-control a1" placeholder="#5412" />
                            </div>
                           
                            <div className="  col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Address:
                                </label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Address"
                                />
                            </div>
                            <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Order Date:
                                </label>
                                <input type="Date" className="form-control a1" placeholder="20 $" />
                            </div>
                            <div className="  col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Purchase Invoice:
                                </label>
                                <input type="text" className="form-control a1" placeholder="Purchase Invoice" />
                            </div>
                            <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Bill Book:
                                </label>
                                <input type="text" className="form-control a1" placeholder="Bill Book" />
                            </div>
                        </div>
                        {/* form end */}
                        {/* Table Strat */}
                        <hr className=" my-4 mb-3   " style={{
                            background: 'black',
                        }} />
                        <div className="row">
                            <div className="col-md-2 mx-auto ">
                                <div className="d-grid gap-2 d-flex justify-content-center ">
                                    <button className="button" style={{ verticalAlign: "middle" }}>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default EditPurchaseOrderVendorform;