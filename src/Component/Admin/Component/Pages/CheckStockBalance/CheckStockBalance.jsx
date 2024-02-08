import React from 'react'
import { Link } from "react-router-dom"

export const CheckStockBalance = () => {
  return (
    <main id="main" className="main">
    <section className="section">
      <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
        <div className="row">
          <h5>
            <b>Check Stock Balance</b>
            <hr className='' style={{backgroundColor:'black',}} />
          </h5>
        
          <div className="">
            <h6>Total Stock Balance</h6>
          
            <div className="table-responsive  mt-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">SNO</th>
                    <th scope="col" style={{ whiteSpace: "nowrap" }}>
                      Product Name
                    </th>
                    <th scope="col">Price</th>
                    <th scope="col" style={{ whiteSpace: "nowrap" }}>
                      Bottle Type
                    </th>
                    <th scope="col" style={{ whiteSpace: "nowrap" }}>
                      Filling Stock In Warehouse
                    </th>
                    <th scope="col" style={{ whiteSpace: "nowrap" }}>
                      Empty Stock In Warehouse
                    </th>
                    <th scope="col" style={{ whiteSpace: "nowrap" }}>
                      Total Stock In Warehouse
                    </th>
                    <th scope="col" style={{ whiteSpace: "nowrap" }}>
                      Total Demage Stock
                    </th>
                    <th scope="col" style={{ whiteSpace: "nowrap" }}>
                      Total Stock in Market
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center ">
                    <th scope="row">1</th>
                    <td>19LTR Bottel</td>
                    <td>100</td>
                    <td>Disposal</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="text-center ">
                    <th scope="row">1</th>
                    <td>19LTR Bottel</td>
                    <td>100</td>
                    <td>Disposal</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="text-center ">
                    <th scope="row">1</th>
                    <td>19LTR Bottel</td>
                    <td>100</td>
                    <td>Disposal</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
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
export default CheckStockBalance
