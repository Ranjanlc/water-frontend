import React from 'react'
import { Link } from 'react-router-dom'
import './AddNewBank.css'

const AddNewBank = () => {
  return (

   <>
   <main id="main" className="main">
  <section className="section">
    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
    
         <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b>Add New Bank</b>
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
      <hr className="   " style={{
                            background: 'black',
                        }} />
      <div className="row mt-2">
        <div className="row ">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Bank Name </label>
              <input type="text" className="form-control c2" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Account Title </label>
              <input type="text" className="form-control c2" />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label"> Account Number </label>
              <input type="text" className="form-control c2" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label"> Opening Balance </label>
              <input type="text" className="form-control c2" />
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 d-flex justify-content-center mt-2">
          <button className="button" style={{ verticalAlign: "middle" }}>
            <span>Save</span>
          </button>
       
        </div>
      </div>
     
      <div className="row mt-4">
        <div className="">
          <div className="table-responsive">
            <table
              className="table table-hover"
              style={{ justifyContent: "center" }}
            >
              <thead style={{ whiteSpace: "nowrap" }}>
                <tr>
                  <th
                    scope="col"
                    className="text-center"
                    style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                  >
                    SNO
                  </th>
                  <th
                    scope="col"
                    style={{ paddingLeft: "3rem", textAlign: "center" }}
                  >
                    Bank Name{" "}
                  </th>
                  <th
                    scope="col"
                    style={{ paddingLeft: "2rem", textAlign: "center" }}
                  >
                    Acount Tittle{" "}
                  </th>
                  <th
                    scope="col"
                    style={{ paddingLeft: "3rem", textAlign: "center" }}
                  >
                    Account #{" "}
                  </th>
                  <th
                    scope="col"
                    style={{ paddingLeft: "2rem", textAlign: "center" }}
                  >
                    Opening Balance{" "}
                  </th>
                  <th scope="col " style={{ paddingLeft: "4rem" }}>
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
                  <td
                    className="text-center"
                    style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                  >
                    ####
                  </td>
                  <td className="text-center" style={{ paddingLeft: "3rem" }}>
                    #####
                  </td>
                  <td className="text-center" style={{ paddingLeft: 29 }}>
                    ###
                  </td>
                  <td className="text-center">###</td>
                  <td className="text-center" style={{ paddingLeft: "3rem" }}>
                    <div className="parent_div ">
                      <div
                        style={{ cursor: "pointer" }}
                        className="edit_icon"
                        aria-label="Example icon button with a menu icon"
                      >
                       <Link to="/admin/edit_bank" style={{textDecoration:"none"}}>
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
  </section>
</main>

   </>
  )
}

export default AddNewBank