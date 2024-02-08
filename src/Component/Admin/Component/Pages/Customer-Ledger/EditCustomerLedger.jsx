import React from 'react'
import './CustomerLedger.css'

const EditCustomerLedger = () => {
  return (
    <>
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <h5 className="d-inline">
            <b>Edit Customer Ledger</b>
          </h5>
          <hr className="m-0 mb-3 mt-3"
              style={{
                background: 'black',
              }} />
          <div className="row mt-3">
            <div className="col-md-3">
              <div className="form-group">
                <label>Customer Name/ID</label>
                <input type="number" className="form-control c2" placeholder={1} />
              </div>
            </div>
          
            <div className="col-md-3">
              <div className="form-group">
                <label>Ledger Type</label>
                <select
                  className="form-select c2"
                  aria-label="Default select example"
                >
                <option selected="">All Date Wiste Ledger</option>
                  <option value={1}>All Month wise Ledger</option>
                  <option value={1}>Form and To (Date Wise Ledger)</option>
                  <option value={1}>Form and To (Month Wise Ledger)</option>
                </select>
              </div>
            </div>

            <div className="col-md-3">
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Contact </label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Security Balance</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Outstanding Bottle</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Outstanding Balance</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            {/* form end */}
           
            <div className="col-md-3">
              <div className="form-group">
                <label>Total Sale Water Bottle</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Total Return Empty Bottle</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Bottle Balance</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Billing Amount</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Total Amount</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Payment Received</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Tax / Discount</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Balance</label>
                <input type="text" className="form-control c2" />
              </div>
            </div>

            {/* <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} />
           */}
           
            <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button className="button" style={{ verticalAlign: "middle" }}>
                <span>Save</span>
              </button>
              {/* <button class="button" style="vertical-align:middle"><span>Edite</span></button> */}
              {/* <button class="button" style="vertical-align:middle; background-color: #db0909;"><span>Refress</span></button> */}
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* End #main */}
  </>
  )
}

export default EditCustomerLedger