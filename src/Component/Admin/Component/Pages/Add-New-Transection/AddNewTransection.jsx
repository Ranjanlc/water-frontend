import React from 'react'
import './AddNewTransection.css'

const AddNewTransection = () => {
  return (

    <>
    <main id="main" className="main">
  <section className="section">
    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      {/* <div className="row">
        <div className="col-md-7 ">
          <h5 className="d-inline">
            <b>Add New Transection</b>
          </h5>
        </div>
        <div className="col-md-5 ">
          <div className="form-group">
            <label className="mb-1">Search by  ID or Name</label>
            <input
              type="text "
              className="form-control "
              placeholder="Search"
            />
          </div>
        </div>
      </div> */}
         <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b>Add New Transection</b>
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
      <hr className="m-0 " style={{
                            background: 'black',
                        }} />
      <div className="row mt-3">
        <div className="col-md-6 mx-auto ">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group mb-2">
                <label> Select Transaction Mode </label>
                <select
                  className="form-select c2"
                  aria-label="Default select example"
                >
                  <option selected="">Select Transaction </option>
                  <option value={1}>Mobile Wallet</option>
                  <option value={2}>EVC Plus</option>
                 
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-2">
                <label>Select Bank </label>
                <select
                  className="form-select c2"
                  aria-label="Default select example"
                >
                  <option selected=""> select </option>
                  <option value={1}>Bank One</option>
                  <option value={2}>Bank Two</option>
                  <option value={3}>Bank Three</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-2">
                <label>Transection Date :</label>
                <input
                  type="date"
                  className="form-control c2"
                  placeholder="Enter Order Name"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group mb-2">
                    <label>Cheque No</label>
                    <input
                      type="text"
                      className="form-control c2"
                      placeholder="Enter Cheque No"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group mb-2">
                    <label> Amount</label>
                    <input
                      type="text"
                      className="form-control c2"
                      placeholder="Enter Amount"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-2">
                <label> Remarks</label>
                <input
                  type="date"
                  className="form-control c2"
                  placeholder="Enter Remarks"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-sm-12">
                  <div className=" mb-2">
                    <button
                      className="button w-100 mt-4 "
                      style={{ verticalAlign: "middle" }}
                    >
                      <span> Add New Transaction</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form end */}
    </div>
  </section>
</main>

    </>
  )
}

export default AddNewTransection