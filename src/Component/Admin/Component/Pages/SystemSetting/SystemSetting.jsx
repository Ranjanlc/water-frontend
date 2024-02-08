import React from 'react'
const SystemSetting = () => {
  return (
<main id="main" className="main">
  <section className="section">
    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      <div>
        {/* <h5 className="">
          <b>Change System Security</b>{" "}
        </h5> */}
          <div className="row">
            <div className="col-md-7 col-sm-12 ">
              <h5 className="">
                <b>Change System Security</b>
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
      </div>
      <hr style={{backgroundColor:'black',}} />
      <div className="row mt-3  ">
        <div className="col-md-6 mx-auto ">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group mb-3">
                <label> Server Name </label>
                <input
                  type="text"
                  className="form-control c2"
                  placeholder="Enter Server Name"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-3">
                <label> Old Password </label>
                <input
                  type="password"
                  className="form-control c2"
                  placeholder="Enter Old Password "
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-3">
                <label> New Password</label>
                <input
                  type="password"
                  className="form-control c2"
                  placeholder="Enter New Password"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-3">
                <label> Confirm Password</label>
                <input
                  type="password"
                  className="form-control c2"
                  placeholder="Enter Confirm Password"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-sm-12 mx-auto ">
                  <div className=" mb-3   ">
                    <button
                      className="button w-100 "
                      style={{ verticalAlign: "middle" }}
                    >
                      <span> Change Password</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default SystemSetting