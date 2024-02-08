import React from 'react'
import { Link } from 'react-router-dom'
import './CustomerBalanceSheet.css'

const CustomerBalanceSheet = () => {
  return (
    <>  
      <main id="main" className="main">
  <section className="section">
    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      {/* <h5 className="d-inline">
        <b>Customer Balance Sheet</b>
      </h5> */}
          <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b>Customer Balance Sheet</b>
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
            <label>Salasman Account</label>
            <select
              className="form-select c2"
              aria-label="Default select example"
            >
              <option selected="">All Account</option>
              <option value={1}>rohan</option>
              <option value={1}>ronu</option>
              <option value={1}>mohan</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
  
            <label>Status Account</label>
            <select
              className="form-select c2 "
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
            <input type="text" className="form-control c2  mt-1" />
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="form-group">
            <label>Balance Amount</label>
            <input type="number" className="form-control c2  mt-1" />
          </div>
        </div>
        <div className="d-grid gap-2 d-flex justify-content-center  mt-3 mb-3">
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
                      Account
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "3rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Balance Bottle
                    </th>
                    <th
                      scope="col"
                      style={{
                        paddingLeft: "2rem",
                        textAlign: "center",
                        whiteSpace: "nowrap"
                      }}
                    >
                      Balance Amount
                    </th>
                    <th
                      scope="col"
                      style={{ textAlign: "center", whiteSpace: "nowrap" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      <div className="parent_div ">
                        <div
                          style={{ cursor: "pointer" }}
                          className="edit_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <Link to="/admin/edit_customer_balance_sheet" style={{textDecoration:"none"}}>
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
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      <div className="parent_div ">
                        <div
                          style={{ cursor: "pointer" }}
                          className="edit_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                          <Link to="/admin/edit_customer_balance_sheet" style={{textDecoration:"none"}}>
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
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td className="text-center">100</td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      1231
                    </td>
                    <td className="text-center" style={{ paddingLeft: "4rem" }}>
                      <div className="parent_div ">
                        <div
                          style={{ cursor: "pointer" }}
                          className="edit_icon"
                          aria-label="Example icon button with a menu icon"
                        >
                       <Link to="/admin/edit_customer_balance_sheet" style={{textDecoration:"none"}}>
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
    </div>
  </section>
</main>
</>


  )
}

export default CustomerBalanceSheet