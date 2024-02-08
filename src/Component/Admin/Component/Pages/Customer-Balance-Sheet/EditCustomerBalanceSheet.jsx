import React from 'react'

const EditCustomerBalanceSheet = () => {
  return (
    <>  
    <main id="main" className="main">
<section className="section">
  <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
    <h5 className="d-inline">
      <b>Edit Customer Balance Sheet</b>
    </h5>
    <hr className="m-0 mb-3 mt-3"
              style={{
                background: 'black',
              }} />
    <div className="row ">
      
      <div className="col-md-4">
        <div className="form-group">
          <label>Salasman Account</label>
          <select
            className="form-select c2"
            aria-label="Default select example"
          >
            <option selected="">All Account</option>
            <option value={1}>rohan </option>
            <option value={1}>mohan</option>
            <option value={1}>iohan</option>
            <option value={1}>johan</option>
          </select>
         
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-group">
        <label>Salasman Account</label>
          <select
            className="form-select c2  "
            aria-label="Default select example"
          >
             <option selected="">All</option>
              <option value={1}>Active Accounts</option>
              <option value={1}>Deactive Accounts</option>
          </select>
        </div>
      </div>
    
      <div className="col-md-4 ">
        <div className="form-group">
          <label>Balance Bottle</label>
          <input type="text" className="form-control c2  " />
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="form-group">
          <label>Balance Amount</label>
          <input type="text" className="form-control c2 " />
        </div>
      </div>
      <div className="d-grid gap-2 d-flex justify-content-center  mt-4">
        <button className="button" style={{ verticalAlign: "middle" }}>
          <span>Save</span>
        </button>
      </div>
      {/* form end */}
      {/* Table Strat */}
      {/* <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} /> */}
      
    </div>
  </div>
</section>
</main>
</>
  )
}

export default EditCustomerBalanceSheet