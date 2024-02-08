import React from 'react'
import './Transection.css'
const Transection = () => {
  return (

    <>
    <main id="main" className="main">
  <section className="section">
  
    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      {/* <h5 className="d-inline">
        <b>Check Bank Transection Details</b>{" "}
      </h5> */}
        <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b>Check Bank Transection Details</b>
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
      <hr className=""
              style={{
                background: 'black',
              }} />
      <div className="row mt-2">
        <div className=" col-md-3" style={{ lineHeight: "2rem" }}>
          <div>
            <label className="" htmlFor="autoSizingInputGroup">
              {" "}
              Select Bank :
            </label>
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
        <div className=" col-md-3" style={{ lineHeight: "2rem" }}>
          <div>
            <label className="" htmlFor="autoSizingInputGroup">
              To Date :
            </label>
            <input
              type="date"
              className="form-control c2"
              id="inputPassword "
              placeholder="Enter Batch Number"
            />
          </div>
        </div>
        <div className=" col-md-3" style={{ lineHeight: "2rem" }}>
          <div>
            <label className="" htmlFor="autoSizingInputGroup">
              From Date :
            </label>
            <input
              type="date"
              className="form-control c2"
              id="inputPassword "
              placeholder="Enter Batch Number"
            />
          </div>
        </div>
        <div className=" col-md-3 " style={{ lineHeight: "2rem" }}>
          <div className="mt-4">
            <button className="button py-1 px-3 mt-3">
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
      {/* <hr className="m-0 mb-3"
              style={{
                background: 'black',
              }} /> */}
      <div className="row mt-4 mb-3  ">
        <div className="">
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
                    Date
                  </th>
                  <th
                    scope="col"
                    style={{
                      paddingLeft: "2rem",
                      textAlign: "center",
                      whiteSpace: "nowrap"
                    }}
                  >
                    Payment Invoice
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
                    Cheque No
                  </th>
                  <th
                    scope="col"
                    style={{
                      paddingLeft: "3rem",
                      textAlign: "center",
                      whiteSpace: "nowrap"
                    }}
                  >
                    Descreption
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
                    Debit{" "}
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
                    Credit{" "}
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
                    Balance{" "}
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
                    Remarks{" "}
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
                    #####
                  </td>
                  <td className="text-center" style={{ paddingLeft: "3rem" }}>
                    #####
                  </td>
                  <td className="text-center" style={{ paddingLeft: "3rem" }}>
                    #####
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

    </>
  )
}

export default Transection