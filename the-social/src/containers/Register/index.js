import React from "react";
import SignUp from "components/SignUp";
import { Layout } from "antd";
import "./styles.scss";
function LoginContainer() {
  return (
    <div className="registerContainer">
      <SignUp />
    </div>
  );
}

export default LoginContainer;
