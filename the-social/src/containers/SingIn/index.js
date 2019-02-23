import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { API } from "../../configs";
import { Row, Col } from "antd";
import "./styled.scss";

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

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signInContainer">
      <form onSubmit={onSigin(username, password)}>
        <Row>
          <Col>
            <Input
              value={username}
              placeholder="Username"
              label="Username"
              onChange={e => setUsername(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              type="password"
              value={password}
              placeholder="Password"
              label="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Button block type="submit" type="primary">
              SignIn
            </Button>
          </Col>
          <Col span={12}>
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
