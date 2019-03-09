import React from "react";
import SignIn from "components/SignIn";
import { Layout } from "antd";
import "./styles.scss";
function LoginContainer() {
  return (
    <div className="container">
      <SignIn />
    </div>
  );
}

export default LoginContainer;
