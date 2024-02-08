import React from "react";
import { Link } from "react-router-dom";
// import './AdminSidenav.css'

const AdminSidenav = () => {
  return (
    <>
      {/* ======= Header ======= */}
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/admin" className="logo d-flex align-items-center nav-link">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">WaterSupply</span>
          </Link>
          <i className="bi bi-list toggle-sidebar-btn" />
        </div>
      </header>
      {/* End Header */}

      {/* ======= Sidebar ======= */}
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link " to="/admin">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href=""
            >
              <i
                className="fa-sharp fa-light fa-layer-group fa-xl"
                style={{ color: "#0f2243" }}
              />
              <span>Products</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link className="nav-link " to="addnewproduct">
                  <i className="bi bi-circle" />
                  <span>Add New Product</span>
                </Link>
              </li>

              <li>
                <Link className="nav-link " to="addproducttype">
                  <i className="bi bi-circle" />
                  <span>Add Product Type</span>
                </Link>
              </li>

              <li>
                <Link className="nav-link " to="addnewfillingstock">
                  <i className="bi bi-circle" />
                  <span>Add New Filling Stock</span>
                </Link>
              </li>

              <li>
                <Link className="nav-link " to="checkstockbalance">
                  <i className="bi bi-circle" />
                  <span>Check Stock Balance</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="fillingstockhistory">
                  <i className="bi bi-circle" />
                  <span>Filling Stock History</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="stockinout">
                  <i className="bi bi-circle" />
                  <span>Stock In Out</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i
                className="fa-light fa-user-tag fa-xl"
                style={{ color: "#244f99" }}
              />
              <span>Customers</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link className="nav-link " to="new_edit_customer">
                  <i className="bi bi-circle" />
                  <span>New / Edit Customer</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="new_sale_order">
                  <i className="bi bi-circle" />
                  <span>New Sale Order</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="add_customer_payment">
                  <i className="bi bi-circle" />
                  <span>Add Customer Payment</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="customer_ledger">
                  <i className="bi bi-circle" />
                  <span>Customer Ledger </span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="customer_security_amount">
                  <i className="bi bi-circle" />
                  <span>Customer Security Amount </span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="customer_balance_sheet">
                  <i className="bi bi-circle" />
                  <span>Customer Balance Sheet</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="set_production_price">
                  <i className="bi bi-circle" />
                  <span>Set Production Price To Customer</span>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link "
                  to="set_customer_pin_form_google_map"
                >
                  <i className="bi bi-circle" />
                  <span>Set Customer Pin Form Google Map</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i
                className="fa-light fa-square-quarters fa-xl"
                style={{ color: "#0f2243" }}
              />
              <span>Vendor</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link className="nav-link " to="addvendorpayment">
                  <i className="bi bi-circle" />
                  <span> Add Vendor Payment</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="purchaseordervendor">
                  <i className="bi bi-circle" />
                  <span>Purchase Order Vendor</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="vendor">
                  <i className="bi bi-circle" />
                  <span>Vendor</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="vendorledger">
                  <i className="bi bi-circle" />
                  <span>Vendor Ledger</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="vendorbalancesheet">
                  <i className="bi bi-circle" />
                  <span>Vendor Balance Sheet</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="fa-light fa-user" style={{ color: "#0f2243" }} />
              <span>Employee</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="icons-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link className="nav-link " to="addnewemployee">
                  <i className="bi bi-circle" />
                  <span>Add/New Employee</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="areaassigntoemployee">
                  <i className="bi bi-circle" />
                  <span>Area Assign To Employee</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav1"
              data-bs-toggle="collapse"
              href="#"
            >
              <i
                className="fa-light fa-file-chart-column"
                style={{ color: "#274a8b" }}
              />
              <span>Reports </span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="icons-nav1"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link className="nav-link " to="printareareportlist">
                  <i className="bi bi-circle" />
                  <span>Print Area Report</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="dailysalesreport">
                  <i className="bi bi-circle" />
                  <span>Daily Sales Report</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="monthlysalesreport">
                  <i className="bi bi-circle" />
                  <span>Monthly Sales Report</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="productsalesreport">
                  <i className="bi bi-circle" />
                  <span>Product Sales Report</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="yearlysalesreport">
                  <i className="bi bi-circle" />
                  <span>Yearly Sales Report</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav5"
              data-bs-toggle="collapse"
              href="#"
            >
              <i
                className="fa-light fa-octagon-plus fa-xl"
                style={{ color: "#224a91" }}
              />
              <span className="me-1" style={{ whiteSpace: "nowrap" }}>
                Expenditure
              </span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="icons-nav5"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link className="nav-link " to="expenditure">
                  <i className="bi bi-circle" />
                  <span>Expenditure</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="investment">
                  <i className="bi bi-circle" />
                  <span>Investment</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav6"
              data-bs-toggle="collapse"
              href="#"
            >
              <i
                className="fa-sharp fa-light fa-money-check-dollar-pen fa-xl"
                style={{ color: "#0f2243" }}
              />
              <span className="me-1" style={{ whiteSpace: "nowrap" }}>
                Transaction
              </span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="icons-nav6"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link className="nav-link " to="add_new_bank">
                  <i className="bi bi-circle" />
                  <span>Add New Bank</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="add_new_transection">
                  <i className="bi bi-circle" />
                  <span>Add New Transaction</span>
                </Link>
              </li>
              <li>
                <Link className="nav-link " to="transection">
                  <i className="bi bi-circle" />
                  <span>Transaction</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav7"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="fa-light fa-gear" style={{ color: "#274a8b" }} />
              <span className="me-1" style={{ whiteSpace: "nowrap" }}>
                Setting
              </span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul
              id="icons-nav7"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link className="nav-link " to="systemsetting">
                  <i className="bi bi-circle" />
                  <span>System Setting</span>
                </Link>
              </li>

              <li>
                <Link className="nav-link " to="softwarerole">
                  <i className="bi bi-circle" />
                  <span>Software Role</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
      {/* End Sidebar*/}
    </>
  );
};

export default AdminSidenav;
