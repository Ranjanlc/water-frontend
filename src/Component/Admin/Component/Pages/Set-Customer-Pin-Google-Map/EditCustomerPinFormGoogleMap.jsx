import React from 'react'
import './SetCustomerPinGoogleMap.css'

const EditCustomerPinFormGoogleMap = () => {
  return (
    <>    <main id="main" className="main">
    <section className="section">
      <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
        <h5 className="d-inline">
          <b>Edit Google Map</b>
        </h5>
        <hr className="m-0 mb-3 mt-3"
              style={{
                background: 'black',
              }} />
        <div className="row">
          <div className='row'>
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
          </div>
<div className='row'>
       
          <div className="d-grid gap-2 d-flex justify-content-center ">
            <button className="button" style={{ verticalAlign: "middle" }}>
              <span>Save</span>
            </button>
           
          </div>
          </div>
          <div style={{ paddingTop: "1%" }}>
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
         
          
          <div className="col-md-3">
           
          </div>
        </div>
      </div>
    </section>
  </main>
  </>
  )
}

export default EditCustomerPinFormGoogleMap