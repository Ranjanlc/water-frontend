// import Logo from "../Shared/Img/logo.png";
import { useState } from "react";
import Logo from "../Admin/Component/Shared/Img/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [designationError, setDesignationError] = useState("");

  const LoginHandler = () => {
    setEmailError("");
    setPasswordError("");
    setDesignationError("");

    if (!email) {
      setEmailError("Email Address is required!!");
      return;
    }
    if (!password) {
      setPasswordError("Password is required!!");
      return;
    }
    if (!designation) {
      setDesignationError("Designations is required!!");
      return;
    }
  };

  return (
    <>
      <main id="main" className="main">
        <section className="section">
          <div className="shadow p-3 mb-5 bg-body rounded container-fluid">
            <div className="m-auto mt-5 d-flex flex-column justify-content-center align-items-center">
              <div className="logo d-flex align-items-center mt-3">
                <img src={Logo} alt="" />
                <span className=" d-lg-block">WaterSupply</span>
              </div>
              <div className="col-md-4 mt-5">
                <div className="form-group mx-1">
                  <b>Email Address*</b>
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                  {emailError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red", fontSize: ".8rem" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {emailError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mx-1">
                  <b>Password*</b>
                  <input
                    type="password"
                    className="form-control mt-2"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                  />
                  {passwordError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red", fontSize: ".8rem" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {passwordError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mx-1">
                  <b>Select Designation*</b>
                  <select
                    className="form-select mt-2"
                    aria-label="Default select example"
                    value={designation}
                    onChange={(e) => {
                      setDesignation(e.target.value);
                      setDesignationError("");
                    }}
                  >
                    <option selected="" disabled>
                      Select Designation
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                    <option value="Customer">Customer</option>
                  </select>
                  {designationError && (
                    <div
                      className="d-flex gap-2 align-items-center"
                      style={{ color: "red", fontSize: ".8rem" }}
                    >
                      <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                      {designationError}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-4 ">
                <button className="button float-end" onClick={LoginHandler}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
