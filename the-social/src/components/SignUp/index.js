import React, { useEffect, useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import { API } from "configs";
import { Row, Col, Icon } from "antd";
import "./styles.scss";

function onSigup(username, password) {
  return async function(e) {
    e.preventDefault();
    try {
      const result = await API.fetchAPI(
        `/users?username=${username}&password=${password}`
      );
      console.log(result);
      if (result.length > 0) {
        alert("LogedIn :)");
      } else {
        alert("Username or password incorrect!!!");
      }
    } catch (err) {
      if (err.hasOwnProperty("response")) {
        alert(err.response.error.message);
      }
    }
  };
}

const onChange = setter => e => {
  const { value } = e.target;
  setter(value);
};

const renderForm = inputField => {
  return inputField.map(props => (
    <Row>
      <Col className="col">
        <Input {...props} />
      </Col>
    </Row>
  ));
};

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const inputField = [
    {
      value: email,
      placeholder: "E-mail",
      prefix: <Icon type="mail" />,
      onChange: onChange(setEmail)
    },
    {
      value: firstName,
      placeholder: "First Name",
      prefix: <Icon type="user" />,
      onChange: onChange(setFirstName)
    },
    {
      value: lastName,
      placeholder: "Last Name",
      prefix: <Icon type="user" />,
      onChange: onChange(setLastName)
    },
    {
      value: password,
      type: "password",
      placeholder: "Password",
      prefix: <Icon type="lock" />,
      onChange: onChange(setPassword)
    },
    {
      value: confirmPassword,
      type: "password",
      placeholder: "ConfirmPassword",
      prefix: <Icon type="lock" />,
      onChange: onChange(setconfirmPassword)
    }
  ];

  return (
    <div className="signInContainer">
      <h2>SignUp</h2>
      <hr />
      <form onSubmit={onSigup(email, password)}>
        {renderForm(inputField)}
        <Row>
          <Col span={12} className="col">
            <Button block type="button" type="primary">
              SignUp
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default SignUp;
