import React from 'react'
import './SoftwareRole.css'

const EditSoftwareRole = () => {
  return (
   
    <main id="main" className="main">
    <section className="section">
      <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
        <h5 className="d-inline">
          <b> Edit Software User Roles</b>{" "}
        </h5>
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

          <div className=" d-flex justify-content-center">
            <div className="mt-4">
              <button className="button  px-3">
                <span>Save </span>
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  </main>

  )
}

export default EditSoftwareRole