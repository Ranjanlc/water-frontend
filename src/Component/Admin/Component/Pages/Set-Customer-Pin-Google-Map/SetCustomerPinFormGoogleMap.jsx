import React from 'react'
import { Link } from 'react-router-dom'
import './SetCustomerPinGoogleMap.css'

const SetCustomerPinFormGoogleMap = () => {
  return (
    <>    <main id="main" className="main">
    <section className="section">
   
      <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
        {/* <h5 className="d-inline">
          <b>Google Map</b>
        </h5> */}
          <div className="row">
                            <div className="col-md-7 col-sm-12 ">
                                <h5 className="">
                                    <b>Google Map</b>
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
        <hr className="m-0 mb-3 mt-3"
              style={{
                background: 'black',
              }} />
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="form-group">
              <label>Latitude and Longitude</label>
              <input type="text" className="form-control c2" />
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="form-group">
              <label>Customer Name/ID</label>
              <input type="text" className="form-control c2" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Address</label>
              <input type="text" className="form-control c2" />
            </div>
          </div>
          <div className="d-grid gap-2 d-flex justify-content-center my-4">
            <button className="button" style={{ verticalAlign: "middle" }}>
              <span>Save</span>
            </button>
            
          </div>
          <div style={{ paddingTop: "2%" }}>
            {/*Google map*/}
            <div
              id="map-container-google-1"
              className="z-depth-1-half map-container"
              style={{ height: 500 }}
            >
              <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>
            {/*Google Maps*/}
          </div>
          {/* form end */}
          {/* Table Strat */}
          <div style={{ paddingTop: "2%" }}>

          {/* <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} /> */}

            <div className="row mt-2">
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
                          Latitude and Longitude
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Customer Name
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                          }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          23-10-2023
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          ABC
                        </td>
                        <td className="text-center">100</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem" }}
                        >
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                                <Link to="/admin/edit_customer_pin_form_google_map" style={{textDecoration:"none"}}>
                                <i className="ri-pencil-line" /></Link>
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
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          23-10-2023
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          ABC
                        </td>
                        <td className="text-center">100</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem" }}
                        >
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                                <Link to="/admin/edit_customer_pin_form_google_map" style={{textDecoration:"none"}}>
                                <i className="ri-pencil-line" /></Link>
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
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1231
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          23-10-2023
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          ABC
                        </td>
                        <td className="text-center">100</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem" }}
                        >
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link to="/admin/edit_customer_pin_form_google_map" style={{textDecoration:"none"}}>
                                <i className="ri-pencil-line" /></Link>
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
          <div className="col-md-3">
           
          </div>
        </div>
      </div>
    </section>
  </main>
  </>

  
  )
}

export default SetCustomerPinFormGoogleMap