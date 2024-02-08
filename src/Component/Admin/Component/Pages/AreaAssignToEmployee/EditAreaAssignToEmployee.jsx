import React from 'react'
import './AreaAssignToEmployee.css'

export const EditAreaAssignToEmployee = () => {
  return (
    <main id="main" className="main">
    <section className="section">
      <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      
        <div className="row">
          <div className="col-md-7 ">
            <h5 className="d-inline">
              <b>Edit Area Assign To Employee</b>
            </h5>
          </div>
          {/* <div className="col-md-5 ">
            <div className="form-group">
              <label className="mb-1">Search by vender ID or Name</label>
              <input
                type="text "
                className="form-control "
                placeholder="Search"
              />
            </div>
          </div> */}
        </div>
        <hr style={{backgroundColor:'black',}} />
        <div className="row mt-2">
          <div className="col-md-4">
            <div className="form-group ">
              <label> Select Employee </label>
              <select
                className="form-select c2 mt-1"
                aria-label="Default select example"
              >
                <option selected="">ABC</option>
                <option value={1}>Deepak Pawer</option>
                <option value={1}>Yash Pawar </option>
                <option value={1}>yogi.... </option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group ">
              <label>Select Area</label>
              <select
                className="form-select c2 mt-1"
                aria-label="Default select example"
              >
                <option selected="">Indore</option>
                <option value={1}>vijay nager</option>
                <option value={1}>chitra nager</option>
                <option value={1}>malviya nager</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 d-flex justify-content-center my-4">
          <button className="button " style={{ verticalAlign: "middle" }}>
          {/* <span>Assign Area</span> */}
            <span>Save</span>
          </button>
          {/* <button
            className="button"
            style={{ verticalAlign: "middle" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span>Add Area</span>
          </button> */}
        </div>
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
              <div
                className="modal-header"
                style={{ backgroundColor: "#4a5fbd" }}
              >
                <h5
                  className="modal-title "
                  id="exampleModalLabel"
                  style={{ color: "white" }}
                >
                  Add New Area
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="col-md-12">
                  <div className="form-group mt-2">
                    <label htmlFor="usr" className="">
                      Enter Area Name
                    </label>
                    <input
                      type="text"
                      className="form-control c2 mt-2"
                      id="usr"
                    />
                  </div>
                </div>
                <div className=" float-end d-block justify-content-between mt-3">
                  <button type="button" className="btn btn-danger ">
                    Add Area
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div
                className="modal-footer"
                style={{ backgroundColor: "#10c278" }}
              ></div>
            </div>
          </div>
        </div>
        {/* form end */}
     
      </div>
    </section>
  </main>
  )
}

export default EditAreaAssignToEmployee
