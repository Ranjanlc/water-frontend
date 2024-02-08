import React from 'react'
import './PurchaseOrderVendor.css'
import { Link } from 'react-router-dom'

const PurchaseOrderVendor = () => {
    return (
        <>


            <main id="main" className="main">
                <section className="section">
                    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
                
                        <div className="row">
                            <div className="col-md-7 col-sm-12 ">
                                <h5 className="">
                                    <b>New Vendor</b>
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
                        <hr className="    " style={{
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
                  className="form-control c2  "
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
                                    placeholder='1'
                                />
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Amount:
                                </label>
                                <input
                                    type="number"
                                    className="form-control   a1"
                                    placeholder="Enter Amount"
                                />
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center mt-4">
                                <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Save</span>
                                </button>
                            
                            </div>
                        </div>
                        <hr className=" m-0 my-3    " style={{
                            background: 'black',

                        }} />
                        <div className="row mt-2">
                            <h5>Billing:</h5>
                            <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Vendor Name/ID:
                                </label>
                                <input type="text" className="form-control a1" placeholder="" />
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
                                <input type="text" className="form-control a1" placeholder="" />
                            </div>
                            <div className=" col-md-4 col-sm-12" style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Bill Book:
                                </label>
                                <input type="text" className="form-control a1" placeholder="" />
                            </div>
                        </div>
                        {/* form end */}
                    
                        <div className="row mt-5 ">
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
                                                    style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                                                >
                                                    Product Name
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
                                                    Quantity
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        paddingLeft: "3rem",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap"
                                                    }}
                                                >
                                                    Amount
                                                </th>
                                                <th scope="col " style={{ paddingLeft: "3rem" }}>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    itme1
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    200
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    400
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >

                                                            <Link to="/admin/purchaseordervendorform" style={{ textDecoration: "none" }}>
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
                                                    itme1
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    200
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    400
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >

                                                            <Link to="/admin/purchaseordervendorform" style={{ textDecoration: "none" }}>
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
                                                    itme1
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "4rem" }}>
                                                    200
                                                </td>
                                                <td
                                                    className="text-center"
                                                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                                                >
                                                    2
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    400
                                                </td>
                                                <td className="text-center" style={{ paddingLeft: "3rem" }}>
                                                    <div className="parent_div ">
                                                        <div
                                                            style={{ cursor: "pointer" }}
                                                            className="edit_icon"
                                                            aria-label="Example icon button with a menu icon"
                                                        >
                                                            <Link to="/admin/purchaseordervendorform" style={{ textDecoration: "none" }}>
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
                        <div className="row">
                            <div className=" col-sm-12  col-md-6 " style={{ lineHeight: "2rem" }}>
                                <div className="d-grid gap-2 d-flex justify-content-left my-4">
                                    {/* <button
                                        className="button w-50"
                                        style={{ verticalAlign: "middle" }}
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >
                                        <span >Save Purchase Bill</span>
                                    </button> */}

                                    <button type="button" class="btn btn-secondary  border-0 rounded-2" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" style={{ backgroundColor: '#10c2a7 ', }}>Save Purchase Bill</button>
                                </div>
                                {/* save purchase bill modal */}
                                {/* Button trigger modal */}
                                {/* Modal */}
                                <div
                                    className="modal fade"
                                    id="exampleModal"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">
                                                    Purchase Order Bill Payment
                                                </h5>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                />
                                            </div>
                                            <div className="modal-body">
                                                <label className="" htmlFor="specificSizeSelect">
                                                    Payment
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control "
                                                    placeholder={10000}
                                                />
                                            </div>
                                            <div className="modal-footer">


                                                <button type="button" className="btn btn-secondary  border-0 rounded-2" d data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" style={{ backgroundColor: '#10c2a7 ', }}>Payment</button>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary"
                                                    data-bs-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* save purchase bill modal */}
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Total Amount:
                                </label>
                                <input type="number" className="form-control a1" placeholder="Total Amount" />
                            </div>
                            <div className=" col-sm-12  col-md-3 " style={{ lineHeight: "2rem" }}>
                                <label className="" htmlFor="specificSizeSelect">
                                    Payment:
                                </label>
                                <input type="number" className="form-control a1" placeholder="Payment" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}

export default PurchaseOrderVendor;