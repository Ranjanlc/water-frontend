import React from 'react'
import { Link } from 'react-router-dom'

export const AreaAssignToEmployee = () => {
  return (
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">

          {/* <div className="row">
            <div className="col-md-7 ">
              <h5 className="d-inline">
                <b>Area Assign To Employee</b>
              </h5>
            </div>
            <div className="col-md-5 ">
              <div className="form-group">
                <label className="mb-1">Search by vender ID or Name</label>
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
                <b>Area Assign To Employee</b>
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
          <hr className='m-0 p-0' style={{ backgroundColor: 'black', }} />
          <div className="row mt-3">
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
            {/* <button className="button" style={{ verticalAlign: "middle" }}>
              <span>Assign Area</span>
            </button> */}
            <button type="button" class="btn btn-success" style={{ backgroundColor:'rgb(26, 156, 128)'}}>Assign Area</button>
            <button type="button" class="btn btn-success mx-1" data-bs-toggle="modal"
              data-bs-target="#exampleModal" style={{ backgroundColor:'rgb(26, 156, 128)'}}>Add Area</button>
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
                    <button type="button" className="btn btn-danger me-2 ">
                      Add Area
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary "
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
          {/* Table Strat */}
          <hr />
          <div className="row ">
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
                        style={{ paddingLeft: "4rem" }}
                      >
                        SNo.
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "3rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Area Name
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "2rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Total
                      </th>
                      <th scope="col " style={{ paddingLeft: "3rem" }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2} />
                      <td className="text-center " style={{ whiteSpace: "nowrap" }}>
                        {" "}
                        Customer Count in Area
                      </td>
                      <td className="text-center" style={{ paddingLeft: "3rem" }}>
                        <div className="parent_div ">
                          <div
                            style={{ cursor: "pointer" }}
                            className="edit_icon"
                            aria-label="Example icon button with a menu icon"
                          >

                            <Link to="/admin/editarea" style={{ textDecoration: "none" }}><i className="ri-pencil-line" /></Link>
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
                        1231
                      </td>
                      <td className="text-center" style={{ paddingLeft: 29 }}>
                        ABC
                      </td>
                      <td className="text-center">2</td>
                      <td className="text-center" style={{ paddingLeft: "3rem" }}>
                        <div className="parent_div ">
                          <div
                            style={{ cursor: "pointer" }}
                            className="edit_icon"
                            aria-label="Example icon button with a menu icon"
                          >
                            <Link to="/admin/editarea" style={{ textDecoration: "none" }}><i className="ri-pencil-line" /></Link>

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
                        1231
                      </td>
                      <td className="text-center" style={{ paddingLeft: 29 }}>
                        ABC
                      </td>
                      <td className="text-center">2</td>
                      <td className="text-center" style={{ paddingLeft: "3rem" }}>
                        <div className="parent_div ">
                          <div
                            style={{ cursor: "pointer" }}
                            className="edit_icon"
                            aria-label="Example icon button with a menu icon"
                          >
                            <Link to="/admin/editarea" style={{ textDecoration: "none" }}><i className="ri-pencil-line" /></Link>

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
        </div>
      </section>
    </main>

  )
}
export default AreaAssignToEmployee
