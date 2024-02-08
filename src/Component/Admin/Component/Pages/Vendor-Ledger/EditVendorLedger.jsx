import React from 'react'

const EditVendorLedger = () => {
  return (
    <>

      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            <div className=" row">
              <div className="col-md-12">
                <h5 className="d-inline">
                  <b>Edit Vendor Ledger</b>
                </h5>
              </div>
             
            </div>
            <hr className="    " style={{
              background: 'black',
            }} />
            <h5>Generate Vendor Ledger</h5>
            <div className="row">

                            <div className=" col-sm-12  col-md-4 ">
                                <label className="" htmlFor="specificSizeSelect">
                                    Vendor Name/ID
                                </label>
                                <input
                                    type="text"
                                    className="form-control a1"
                                    placeholder="Enter Name/ID"
                                />
                            </div>
                            <div className=" col-sm-12  col-md-4 ">
                                <label className="" htmlFor="specificSizeSelect">
                                    Ledger Type:
                                </label>
                                <select className="form-select a1" id="specificSizeSelect">
                                    <option selected="">Select Ledger</option>
                                    <option selected="">All Date Wiste Ledger</option>
                                    <option value={1}>All Month wise Ledger</option>
                                    <option value={1}>Form and To (Date Wise Ledger)</option>
                                    <option value={1}>Form and To (Month Wise Ledger)</option>
                                </select>
                            </div>
                            <div className="d-grid gap-2 d-flex justify-content-center mt-3 mb-3">
                                <button className="button" style={{ verticalAlign: "middle" }}>
                                    <span>Ledger</span>
                                </button>
                            </div>
                        </div>
            <hr className=" m-0 mt-4 mb-3   " style={{
              background: 'black',
            }} />
            <h5>Vendor Detail</h5>
            <div className="row">
                            <div className=" col-md-4 col-sm-12" >
                                <label className="" htmlFor="specificSizeSelect">
                                    Vendor Name/ID
                                </label>
                                <input type="text" className="form-control a1" placeholder="" />
                            </div>

                            <div className=" col-md-4 col-sm-12">
                                <label className="" htmlFor="specificSizeSelect">
                                    Outstanding Balance:
                                </label>
                                <input type="text" className="form-control a1" placeholder="20,000" />
                            </div>
                            <div className=" col-md-4 col-sm-12" >

                                <label className="" htmlFor="specificSizeSelect">
                                    Address:
                                </label>
                                <input type="text" className="form-control a1" placeholder="" />
                            </div>

                        </div>

                        <div className='row mt-2'>

<div className='col-md-4 col-sm-4'>
    <label className="" htmlFor="specificSizeSelect">
        Contact:
    </label>
    <input type="number" className="form-control a1" placeholder="" />
</div>

</div>

            {/* form end */}
            {/* Table Strat */}
            <hr className=" m-0 mt-4  " style={{
              background: 'black',

            }} />
            <div className="d-grid gap-2 d-flex justify-content-center mt-3">
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

export default EditVendorLedger