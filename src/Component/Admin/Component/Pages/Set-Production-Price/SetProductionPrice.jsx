import React from 'react'
import { Link } from 'react-router-dom'
import './SetProductionPrice.css'

const SetProductionPrice = () => {
  return (
    <>
      <main id="main" className="main">
        <section className="section">

          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
        <div className='row'>
              <div className="col-md-7 col-sm-12 ">
                <h5 className="">
                  <b>Set Product Price</b>
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

            <div className='row mt-3'>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Select Product</label>
                  <select
                    className="form-select c2"
                    aria-label="Default select example"
                  >
                    <option selected="">1.9 LTR</option>
                    <option selected="">1.8 LTR</option>
                    <option selected="">500 ML</option>
                    <option selected="">2 LTR</option>
                  </select>
                </div>
              </div>
          <div className='col-md-4'>
          <label>Price</label>
                <input
                  type="number"
                  className="form-control c2 mt-1 "
                  placeholder="Price"
                />
                <div class="form-check form-check-inline mt-1">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">Price USD</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Price SHS</label>
                </div>
          </div>
          <div className="col-md-4">
                  <div className="form-group">
                    <label>select Product</label>
                    <input type="text" className="form-control c2" />
                  </div>
                </div>
              </div>
              <div className='row mt-1'>
         
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
             </div>
            



            {/* form end */}

            <div style={{ paddingTop: "2%" }}>
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
                            style={{ paddingLeft: "4rem" }}
                          >
                            Product
                          </th>
                          <th
                            scope="col"
                            style={{ paddingLeft: "3rem", textAlign: "center" }}
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "2rem",
                              textAlign: "center",
                              whiteSpace: "nowrap"
                            }}
                          >
                            Select Product
                          </th>
                          <th
                            scope="col"
                            style={{ paddingLeft: "3rem", textAlign: "center" }}
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap"
                            }}
                          >
                            Customer ID
                          </th>
                          <th
                            scope="col"
                            style={{
                              paddingLeft: "3rem",
                              textAlign: "center",
                              whiteSpace: "nowrap"
                            }}
                          >
                            Customer Name
                          </th>
                          <th
                            scope="col"
                            style={{ paddingLeft: "3rem", textAlign: "center" }}
                          >
                            Price
                          </th>
                          <th scope="col " style={{ paddingLeft: "2rem" }}>
                            Address
                          </th>
                          <th scope="col " style={{ paddingLeft: "4rem" }}>
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
                            xyz
                          </td>
                          <td
                            className="text-center"
                            style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                          >
                            5000
                          </td>
                          <td className="text-center" style={{ paddingLeft: 29 }}>
                            ABC
                          </td>
                          <td className="text-center">100</td>
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
                            dfd
                          </td>
                          <td className="text-center" style={{ paddingLeft: 29 }}>
                            456
                          </td>
                          <td className="text-center">UIU</td>
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
                                <Link to="/admin/edit_production_price" style={{ textDecoration: "none" }}>
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
                            ERE
                          </td>
                          <td
                            className="text-center"
                            style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                          >
                            3000
                          </td>
                          <td className="text-center" style={{ paddingLeft: 29 }}>
                            ABW
                          </td>
                          <td className="text-center">200</td>
                          <td
                            className="text-center"
                            style={{ paddingLeft: "4rem" }}
                          >
                            131
                          </td>
                          <td
                            className="text-center"
                            style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                          >
                            DFD
                          </td>
                          <td className="text-center" style={{ paddingLeft: 29 }}>
                            343
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
                                <Link to="/admin/edit_production_price" style={{ textDecoration: "none" }}>
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
                                <Link to="/admin/edit_production_price" style={{ textDecoration: "none" }}>
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
            <div className="d-grid gap-2 d-flex justify-content-center my-4">
              <button className="button" style={{ verticalAlign: "middle" }}>
                <span>Save</span>
              </button>
            </div>

        
    </div>
        </section>
      </main>

    </>
  )
}

export default SetProductionPrice