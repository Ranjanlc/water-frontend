import React from 'react'
import './AddNewEmployee.css'
const EditEmployee = () => {
  return (
    <main id="main" className="main">
    <section className="section">
      <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
        {/* <h3 class="d-inline m-0 p-0">New Employee
    </h3> */}
        <div className="row">
          <div className="col-md-8 ">
            <h5 className="d-inline">
              <b> Edit Employee</b>
            </h5>
          </div>
        </div>
  
        <hr style={{backgroundColor:'black',}} />
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control c2 mt-1"
                placeholder="Enter First Name"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control c2 mt-1"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label> Join Date</label>
              <input
                type="date"
                className="form-control c2 mt-1"
                placeholder="Enter Order Number"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label> Adress</label>
              <input
                type="text"
                className="form-control c2 mt-1"
                placeholder="Enter Adress"
              />
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-3">
            <div className="form-group ">
              <label>Employee Designation</label>
              <select
                className="form-select c2 mt-1"
                aria-label="Default select example"
              >
             <option selected="">Select Designation</option>
                  <option >delivery man</option>
                  <option >Sales man</option>
                  <option >warehouse assistant</option>
                  <option>warehouse managers</option>
                  <option>  delivery manager</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>NIC</label>
              <input
                type="text"
                className="form-control c2 mt-1"
                placeholder="Enter NIC"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Contact</label>
              <input
                type="text"
                className="form-control c2 mt-1"
                placeholder="Enter Contact Number"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group ">
              <label>Account Status</label>
              <select
                className="form-select c2 mt-1"
                aria-label="Default select example"
              >
                <option selected="">Active</option>
                <option value={1}>Deactive</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-3">
            <div className="form-group">
              <label>Salary</label>
              <input
                type="number"
                className="form-control c2 mt-1"
                placeholder="Enter Salary"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group ">
              <label>Salary Pay To(Account)</label>
              <select
                className="form-select c2 mt-1"
                aria-label="Default select example"
              >
              <option value="">Select Pay To Account</option>
                  <option selected="">Mobile Wallet</option>
                  <option value={1}>EVC Plus</option>
                  <option value={1}>Online</option>
                  <option value={1}>Cash</option>
                  <option value={1}>eDahab</option>
              </select>
            </div>
          </div>
         
        </div>
        <div className="d-grid gap-2 d-flex justify-content-center my-4">
          <button className="button" style={{ verticalAlign: "middle" }}>
            <span>Save</span>
          </button>
        </div>
        {/* form end */}
      </div>
    </section>
  </main>
  )
}

export default EditEmployee