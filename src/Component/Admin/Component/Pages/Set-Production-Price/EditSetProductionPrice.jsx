import React from 'react'
import './SetProductionPrice.css'

const EditSetProductionPrice = () => {
  return (
    <>
    <main id="main" className="main">
  <section className="section">

    <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
      <h5 className="d-inline">
        <b>Edit Product Price</b>
      </h5>
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
                  className="form-control c2"
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
              <div className='row mt-2'>
         
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

export default EditSetProductionPrice