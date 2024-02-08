import React from 'react'
import { Link } from 'react-router-dom'

const SoftwareRole = () => {
  return (
    <main id="main" className="main">
    <section className="section">
      <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
        {/* <h5 className="d-inline">
          <b>Software User Roles</b>{" "}
        </h5> */}
         <div className="row">
                            <div className="col-md-7 col-sm-12 ">
                                <h5 className="">
                                    <b>Software User Roles</b>
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
        <hr style={{backgroundColor:'black',}} />
        <div className="row mt-2">
          <div className=" col-md-4" style={{ lineHeight: "2rem" }}>
            <div>
              <label className="" htmlFor="autoSizingInputGroup">
                Employee Designation:
              </label>
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
        </div>
       
        <div className="row">
          <div className="mt-4">
            <div className="table-responsive">
              <table
                className="table table-hover"
                style={{ justifyContent: "center" }}
              >
                <thead>
                  <tr style={{ whiteSpace: "nowrap" }}>
                    <th
                      scope="col"
                      className="text-center"
                      style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                    >
                      {" "}
                      SNO
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "3rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "2rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Last Name
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
                      {" "}
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ whiteSpace: "nowrap" }}>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      {" "}
                      1
                    </td>
                    <td className="text-center" style={{ paddingLeft: "3rem" }}>
                      #####
                    </td>
                    <td className="text-center" style={{ paddingLeft: "3rem" }}>
                      #####
                    </td>
                    <td className="text-center" style={{ paddingLeft: "3rem" }}>
                      #####
                    </td>
                    <td className="text-center" style={{ paddingLeft: "3rem" }}>
                      #####
                    </td>
                    <td className="text-center" style={{ paddingLeft: "3rem" }}>
                      #####
                    </td>
                    <td className="text-center" style={{ paddingLeft: "3rem" }}>
                      <div className="parent_div ">
                        <div
                          style={{ cursor: "pointer" }}
                          className="edit_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                       <Link to="/admin/editsoftwarerole" style={{textDecoration:"none"}}>   <i className="ri-pencil-line" /></Link>
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
        <hr className='mt-5' style={{backgroundColor:'black',}} />
        <div className="row my-2">
          <div className="col-md-3  ">
            <h6> Product Section </h6>
            <div className="list-group">
              <div className=" ">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Add New Projuct
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Add new Bottel Filling stock
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    filling stock history
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    stock In Out
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Check stock Balance
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <h6> Vender Section </h6>
            <div className="list-group">
              <div className=" ">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Create Vander Account
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    new Purcher Order
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Add Vander Payment
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Vander ledger
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Vander Balance Sheet
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <h6> Employee Section </h6>
            <div className="list-group">
              <div className=" ">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Add new / Edit Employee
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Area Assing to Employee
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <h6> Report Section </h6>
            <div className="list-group ">
              <div className=" ">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Daily sale report
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Monthy sale report
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    yearly sale report
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0  ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Product sale report
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr style={{backgroundColor:'black',}} />
        <div className="row my-2 ">

          <div className="col-md-3  ">
            <h6> Customer Section </h6>
            <div className="list-group">
              <div className=" ">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Add new / Edit Customer
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    New Sales order
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Add Customer Payment
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Customer ledger
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Customer Balance sheet
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Set Product Price to Customer
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    set Customer Pin google map
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-3  ">
            <h6> expenditure Section </h6>
            <div className="list-group">
              <div className=" ">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>expenditure</span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>Investment</span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <h6> Transection Section </h6>
            <div className="list-group">
              <div className=" ">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Add new Bank
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Add new Transection
                  </span>
                </label>
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span  className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Check Bank Transection
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <h6> Dashboard Section </h6>
            <div className="list-group ">
              <div className=" ">
                <label className="list-group-item d-flex gap-2">
                  <input
                    className="form-check-input flex-shrink-0 ms-1"
                    type="checkbox"
                    defaultValue=""
                  />
                  <span className='ms-4'  style={{ fontSize: "14px !important" }}>
                    Daily sale report
                  </span>
                </label>
              </div>
            </div>
                      
            
          </div>
        </div>
        <hr style={{backgroundColor:'black',}} />
        <div className=" d-flex justify-content-center">
            <div className="mt-2">
              <button className="button  px-3">
                <span>Save </span>
              </button>
            </div>
          </div>
      </div>
    </section>
  </main>
  
  )
}

export default SoftwareRole