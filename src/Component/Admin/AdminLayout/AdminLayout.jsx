import React from "react";
import { Outlet } from "react-router-dom";
//  import Header from '../Component/Shared/Header'
//  import AdminSidenav from '../Component/Shared/AdminSidenav'

import AdminSidenavAA from "../Component/Shared/AdminSidenavAA";

const AdminLayout = () => {
  return (
    <>

      <AdminSidenavAA />

      <div
        className="container-fluid"
        style={{
          minHeight: "400px",
          paddingRight: "0",
          paddingLeft: "2.5rem",
          // marginLeft : "0.8rem"
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
