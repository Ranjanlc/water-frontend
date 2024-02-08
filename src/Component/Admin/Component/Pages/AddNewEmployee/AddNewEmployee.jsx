import React from 'react'
import { Link } from 'react-router-dom'

export const AddNewEmployee = () => {
  return (
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
<div className='col-md-12'>
          <div className="row">
            <div className="col-md-7 ">
              <h5 className="d-inline">
                <b>Employee</b>
              </h5>
            </div>

        

            <div className='col-md-3' >
              <div className="form-group ">
                {/* <label>Search by ID or Name</label> */}
                <input
                  type="text"
                  className="form-control   "
                  placeholder="Search"
                />

              </div>
            </div>
            <div className='col-md-1 '>

              <button type="button" className="btn btn-danger  
                py-1">
                  Search
                </button>
              
            </div>
          
          </div>
          <hr className='' style={{
            background: 'black',
          }} />
          <div className="row mt-4">
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
            <div className="col-md-6 mt-4">
              <div className="border p-3">
                <h6>
                  <b>Customer Login Info</b>
                </h6>
                <div className="row mt-2 ">
                  <div className="col-auto col-md-4">
                    <label htmlFor="inputPassword6" className="col-form-label ">
                      Username
                    </label>
                  </div>
                  <div className="col-auto col-md-8 ">
                    <input
                      type="text"
                      id="inputPassword6"
                      className="form-control c2"
                      aria-describedby="passwordHelpInline"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-auto col-md-4">
                    <label htmlFor="inputPassword6" className="col-form-label">
                      Password
                    </label>
                  </div>
                  <div className="col-auto col-md-8">
                    <input
                      type="password"
                      id="inputPassword6"
                      className="form-control c2"
                      aria-describedby="passwordHelpInline"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-flex justify-content-center my-4">
            <button className="button" style={{ verticalAlign: "middle" }}>
              <span>Save</span>
            </button>
          </div>
          {/* form end */}
          {/* Table Strat */}
          <div className="row">
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
                        First Name
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "3rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Last Name
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "2rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Join Date
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "3rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Adress
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "3rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Employee Designation
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "3rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        NIC
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "3rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "3rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Account Status
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "3rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Salary
                      </th>
                      <th
                        scope="col"
                        style={{
                          paddingLeft: "3rem",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Salary Pay To(Account)
                      </th>
                      <th scope="col " style={{ paddingLeft: "3rem" }}>
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center" style={{ paddingLeft: "4rem" }}>
                        rinky
                      </td>
                      <td
                        className="text-center"
                        style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                      >
                        malviya
                      </td>
                      <td className="text-center" style={{ paddingLeft: 29 }}>
                        22/12/2023
                      </td>
                      <td className="text-center">indore</td>
                      <td className="text-center">yes</td>
                      <td className="text-center">001</td>
                      <td className="text-center">444444</td>
                      <td className="text-center">Active</td>
                      <td className="text-center">120000</td>
                      <td className="text-center">yes</td>
                      <td className="text-center" style={{ paddingLeft: "3rem" }}>
                        <div className="parent_div ">
                          <div
                            style={{ cursor: "pointer" }}
                            className="edit_icon"
                            aria-label="Example icon button with a menu icon"
                          >
                            <Link to="/admin/editemployee" style={{ textDecoration: "none" }}>  <i className="ri-pencil-line" /></Link>
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
                        rinky
                      </td>
                      <td
                        className="text-center"
                        style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                      >
                        malviya
                      </td>
                      <td className="text-center" style={{ paddingLeft: 29 }}>
                        22/12/2023
                      </td>
                      <td className="text-center">indore</td>
                      <td className="text-center">yes</td>
                      <td className="text-center">001</td>
                      <td className="text-center">444444</td>
                      <td className="text-center">Active</td>
                      <td className="text-center">120000</td>
                      <td className="text-center">yes</td>
                      <td className="text-center" style={{ paddingLeft: "3rem" }}>
                        <div className="parent_div ">
                          <div
                            style={{ cursor: "pointer" }}
                            className="edit_icon"
                            aria-label="Example icon button with a menu icon"
                          >
                            <Link to="/admin/editemployee" style={{ textDecoration: "none" }}>  <i className="ri-pencil-line" /></Link>
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
                        rinky
                      </td>
                      <td
                        className="text-center"
                        style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                      >
                        malviya
                      </td>
                      <td className="text-center" style={{ paddingLeft: 29 }}>
                        22/12/2023
                      </td>
                      <td className="text-center">indore</td>
                      <td className="text-center">yes</td>
                      <td className="text-center">001</td>
                      <td className="text-center">444444</td>
                      <td className="text-center">Active</td>
                      <td className="text-center">120000</td>
                      <td className="text-center">yes</td>
                      <td className="text-center" style={{ paddingLeft: "3rem" }}>
                        <div className="parent_div ">
                          <div
                            style={{ cursor: "pointer" }}
                            className="edit_icon"
                            aria-label="Example icon button with a menu icon"
                          >
                            <Link to="/admin/editemployee" style={{ textDecoration: "none" }}>  <i className="ri-pencil-line" /></Link>
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
        </div>
      </section>
    </main>
  )
}

export default AddNewEmployee