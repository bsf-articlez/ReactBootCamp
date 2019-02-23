import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { API } from "../../configs";
import { Row, Col, Icon } from "antd";
import "./styles.scss";

function onSigin(username, password) {
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
  return inputField.map((props, i) => (
    <Row key={btoa(i)}>
      <Col className="col">
        <Input {...props} />
      </Col>
    </Row>
  ));
};

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputFields = [
    {
      value: username,
      placeholder: "Username",
      prefix: <Icon type="user" />,
      onChange: onChange(setUsername)
    },
    {
      value: password,
      type: "password",
      placeholder: "Password",
      prefix: <Icon type="lock" />,
      onChange: onChange(setPassword)
    }
  ];

  return (
    <div className="signInContainer">
      <h2>Login</h2>
      <hr />
      <form onSubmit={onSigin(username, password)}>
        {renderForm(inputFields)}
        <Row>
          <Col span={12} className="col">
            <Button block type="submit" type="primary">
              SignIn
            </Button>
          </Col>
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

export default SignIn;
