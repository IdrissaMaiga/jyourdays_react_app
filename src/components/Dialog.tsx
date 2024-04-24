import React, { useState } from "react";
import "./Dialog.css";
import "font-awesome/css/font-awesome.min.css";
interface Props {
  className: string;
}
function Dialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <button className="btnbtn-primary" onClick={toggleDialog}>
        Login/Register
      </button>

      {isOpen && (
        <div className="dialog-overlay">
          <div className="dialog-dialog">
            <button className="dialog-close" onClick={toggleDialog}>
              &times;
            </button>
            <h2>{isRegisterOpen ? "Register" : "Login"}</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={showPassword ? "text" : "form-control"}
                    id="password"
                    placeholder="Password"
                  />
                  <div
                    className={`password-toggle ${showPassword ? "hide" : ""}`}
                    onClick={togglePasswordVisibility}
                  >
                    <i className="fa fa-eye"></i> {/* Font Awesome eye icon */}
                  </div>
                </div>
              </div>
              {isRegisterOpen && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              )}
              <button type="submit" className="btn btn-primary">
                {isRegisterOpen ? "Register" : "Login"}
              </button>
            </form>
            <p>
              {isRegisterOpen
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <button className="btn btn-link" onClick={toggleRegister}>
                {isRegisterOpen ? "Login" : "Register"}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Dialog;
