import React from 'react'
// import { Link } from 'react-router-dom';
const EditVendorfrom = () => {
  return (
    <>

      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            <div className=" row">
              <div className="col-md-12">
                <h5 className="d-inline">
                  <b> Edit Vendor</b>
                </h5>
              </div>
              {/* <div className="col-md-5">
                <div className="form-group">
                  <label>Search by vender ID or Name</label>
                  <input
                    type="text"
                    className="form-control mt-1 "
                    placeholder="Search"
                  />
                </div>
              </div> */}
            </div>
            <hr className=" mb-3" style={{
              background: 'black',

            }} />
            <h5>
              <b>Vendor Account</b>
            </h5>
            <div className=" row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Open Account Date</label>
                  <input type="date" className="form-control a1" placeholder="Date" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Vendor Name</label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Vendor Name"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Contact Number</label>
                  <input
                    type="number"
                    className="form-control a1"
                    placeholder="Contact Number"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Remark</label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Remark"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Opening Balance</label>
                  <input
                    type="text"
                    className="form-control a1"
                    placeholder="Opening Balance"
                  />
                </div>
              </div>
              <div className="d-grid gap-2 d-flex justify-content-center mt-2">
                <button className="button mb-3 " style={{ verticalAlign: "middle" }}>
                  <span>Save</span>
                </button>
                {/* <button class="button" style="vertical-align:middle"><span>Cancel</span></button> */}
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

export default EditVendorfrom;