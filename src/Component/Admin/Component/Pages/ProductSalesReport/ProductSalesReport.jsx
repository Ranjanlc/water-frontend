import React from "react";
import "./ProductSalesReport.css";
import { Link } from "react-router-dom";
const ProductSalesReport = () => {
  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className=" shadow p-3 mb-5 bg-body rounded  container-fluid c1 mt-0 ">
            {/* <h5>
                            <b>Product Sales Report</b>
                        </h5> */}
            <div className="row">
              <div className="col-md-7 col-sm-12 ">
                <h5 className="">
                  <b>Product Sales Report</b>
                </h5>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="form-group ">
                  <input
                    type="search"
                    className="form-control   "
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="col-md-1 col-sm-12">
                <button
                  type="button"
                  className="btn btn-danger 
                py-1"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="d-inline">
                <b>User : Tahir Quershi</b>
              </h6>
            </div>
            <hr
              className="m-0 mt-2 mb-3"
              style={{
                background: "black",
              }}
            />
            <div className="row mt-3">
              <div className="row ">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Product</label>
                    <select
                      className="form-select a1"
                      aria-label="Default select example"
                    >
                      <option selected="">Select category</option>
                      <option value="Disposal">Disposal</option>
                      <option value="20 Gallon Water Bottles">
                        20 Gallon Water Bottles
                      </option>
                      <option value="Ice Product">Ice Product</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>From Year</label>
                    <input
                      type="text"
                      className="form-control a1"
                      placeholder={2021}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>To Year</label>
                    <input
                      type="text"
                      className="form-control a1"
                      placeholder={2023}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Salesman</label>
                    <select
                      className="form-select a1"
                      aria-label="Default select example"
                    >
                      <option selected="">Select Salesman</option>
                      <option value="Disposal">Tahir Quershi</option>
                      <option value="20 Gallon Water Bottles">
                        Saleem Aahmad
                      </option>
                      <option value="Ice Product">Nitin malwiya</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 d-flex justify-content-center ">
                <button className="button" style={{ verticalAlign: "middle" }}>
                  <span>Search</span>
                </button>
              </div>
            </div>
            <hr
              className=" m-0 mb-3   mt-2"
              style={{
                background: "black",
              }}
            />
            <div className="row mt-4">
              <div className="">
                <h5>Sales Report Product Wise </h5>
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
                          SNO
                        </th>
                        <th
                          scope="col"
                          className="text-center"
                          style={{ paddingLeft: "4rem", whiteSpace: "nowrap" }}
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          style={{ paddingLeft: "3rem", textAlign: "center" }}
                        >
                          Salesman
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "2rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Product Name
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          style={{
                            paddingLeft: "3rem",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Amount
                        </th>
                        <th scope="col " style={{ paddingLeft: "3rem" }}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1
                        </td>
                        <td className="text-center">12-20-21</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          Tahir Quershi
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          19 Ltr Bottel
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          3
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          200
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem" }}
                        >
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link
                                to="/adminEditProductSalesReportfrom"
                                style={{ textDecoration: "none" }}
                              >
                                <i className="ri-pencil-line" />
                              </Link>
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
                        <td
                          className="text-center"
                          style={{ paddingLeft: "4rem" }}
                        >
                          1
                        </td>
                        <td className="text-center">12-20-21</td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem", whiteSpace: "nowrap" }}
                        >
                          Tahir Quershi
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          19 Ltr Bottel
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          3
                        </td>
                        <td className="text-center" style={{ paddingLeft: 29 }}>
                          200
                        </td>
                        <td
                          className="text-center"
                          style={{ paddingLeft: "3rem" }}
                        >
                          <div className="parent_div ">
                            <div
                              style={{ cursor: "pointer" }}
                              className="edit_icon"
                              aria-label="Example icon button with a menu icon"
                            >
                              <Link
                                to="/admin/EditProductSalesReportfrom"
                                style={{ textDecoration: "none" }}
                              >
                                <i className="ri-pencil-line" />
                              </Link>
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
  );
};

export default ProductSalesReport;
