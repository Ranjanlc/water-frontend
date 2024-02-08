import React from 'react'
import './NewEditCustomer.css'

const EditCustomer = () => {
  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            {/* <h5 className="d-inline">
            <b>Edit Customer</b>
          </h5> */}
            <div className="row">
              <div className="col-md-7 col-sm-12 ">
                <h5 className="">
                  <b>Edit Customer</b>
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
            <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} />
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Account Open Date</label>
                  <input
                    type="date"
                    className="form-control c2"
                    placeholder="Enter Order Number"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Customer Name</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder="Enter Order Name"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Contact Number</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder="Enter Your Number"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder="Indore"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Amount Status</label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                  >
                     <option selected="">Mobile Wallet</option>
                  <option value={1}>EVC Plus</option> 
                  <option value={1}>Online</option>
                   <option value={1}>Cash</option>
                   <option value={1}>eDahab</option>

                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Security Deposit Amount</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder="00000000"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Security Remarks</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder="Enter Remarks"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label>Opening Bottle</label>
                  <input type="text" className="form-control c2" placeholder={0} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label>Opening Balance</label>
                  <input type="text" className="form-control c2" placeholder={0} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder="nirilenkshy"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control c2"
                    placeholder="*******"
                  />
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div style={{ paddingTop: "1%" }} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Show Password
                  </label>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Search By Customer Id</label>
                    <input
                      type="number"
                      className="form-control c2"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Select Area</label>
                    <select
                      className="form-select c2"
                      aria-label="Default select example"
                    >
                      <option selected="">indore</option>
                      <option value={1}>bhopal</option>
                      <option value={1}>ujjain</option>
                      <option value={1}>jaipur</option>
                      <option value={1}>jabalpur</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="form-group">
                    <label>Required Bottle Qty</label>
                    <input type="number" className="form-control c2" />
                  </div>
                </div>
              </div>
              <div className="col-md-2" style={{ paddingTop: "1%", marginLeft: "20px" }}>
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label>Monday</label>
                </div>
              </div>
              <div className="col-md-2" style={{ paddingTop: "1%", marginLeft: "20px" }}>
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label>Tuesday</label>
                </div>
              </div>
              <div className="col-md-2" style={{ paddingTop: "1%", marginLeft: "20px" }}>
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label>Wednesday</label>
                </div>
              </div>
              <div className="col-md-2" style={{ paddingTop: "1%", marginLeft: "20px" }}>
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label>Thursday</label>
                </div>
              </div>
              <div className="col-md-2" style={{ paddingTop: "1%", marginLeft: "20px" }}>
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label>Friday</label>
                </div>
              </div>
              <div className="col-md-2" style={{ paddingTop: "1%", marginLeft: "20px" }}>
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label>Saturday</label>
                </div>
              </div>
              <div className="col-md-2" style={{ paddingTop: "1%", marginLeft: "20px" }}>
                <div className="form-group">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label>Sunday</label>
                </div>
              </div>
              <div className="d-grid gap-2 d-flex justify-content-center my-4">
                <button className="button" style={{ verticalAlign: "middle" }}>
                  <span>Save</span>
                </button>
                {/* <button class="button" style="vertical-align:middle"><span>Advance Search</span></button> */}
                {/* <button class="button" style="vertical-align:middle"><span>Search</span></button> */}
              </div>
            </div>
            <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} />
            {/* form end */}
            {/* Table Strat */}

          </div>
        </section>
      </main>

    </>

  )
}

export default EditCustomer