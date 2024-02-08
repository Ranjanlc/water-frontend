import React from 'react'

export const FillingStockHistory = () => {
  return (
    <main id="main" className="main">
      <section className="section">
        <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
          <div className="row">
            <div className='row'>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-7 col-sm-12 ">
                    <h5 className="">
                      <b>Filling Stock History</b>
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
                <hr style={{ backgroundColor: 'black', }} />
              </div>



            </div>

            <div className="row" >
              <div className="col-md-12 " >
                <div className="row ">
                  <div className="col-md-4">
                    <div className="form-group mt-1 mx-2">
                      <label htmlFor="usr">From Date</label>
                      <input type="date" className="form-control c2" id="usr" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mt-1 mx-2">
                      <label htmlFor="usr">To Date</label>
                      <input type="date" className="form-control c2" id="usr" />
                    </div>
                  </div>
                  <div className="col-md-4 py-4" style={{ justifyContent: "center", alignItems: "center" }}>
                    <div className="form-group mx-2 py-2 mt-1" >

                      <button className=" btn btn-danger ">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h6 className=""> Filling Stock detail</h6>
            {/* <hr /> */}
            <div className="row mt-2">
              <div className="table-responsive ">
                <table className="table">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">SNO</th>
                      <th scope="col">Date</th>
                      <th scope="col" style={{ whiteSpace: "nowrap" }}>
                        Product Name
                      </th>
                      <th scope="col" style={{ whiteSpace: "nowrap" }}>
                        Out Stock
                      </th>
                      <th scope="col" style={{ whiteSpace: "nowrap" }}>
                        New Stock
                      </th>
                      <th scope="col" style={{ whiteSpace: "nowrap" }}>
                        Update Stock
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center ">
                      <th scope="row">1</th>
                      <td style={{ whiteSpace: "nowrap" }}>19-12-23</td>
                      <td>Bottle</td>
                      <td>10</td>
                      <td>21</td>
                      <td>2</td>
                    </tr>
                    <tr className="text-center ">
                      <th scope="row">1</th>
                      <td>19-12-23</td>
                      <td>Bottle</td>
                      <td>10</td>
                      <td>21</td>
                      <td>2</td>
                    </tr>
                    <tr className="text-center ">
                      <th scope="row">1</th>
                      <td>19-12-23</td>
                      <td>Bottle</td>
                      <td>10</td>
                      <td>21</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}
export default FillingStockHistory