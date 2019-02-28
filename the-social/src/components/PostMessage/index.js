import React from "react";
import ProfileImage from "../ProfileImage";
import InputMutiLine from "../InputMultiLine";
import { Row, Col } from "antd";
import "./styles.scss";

function PostMessage({ src }) {
  return (
    <div className="postMessage">
      <Row>
        <Col span={2}>
          <ProfileImage src={src} />
        </Col>
        <Col span={22} className="col">
          <InputMutiLine />
        </Col>
      </Row>
    </div>
  );
}

export default PostMessage;
