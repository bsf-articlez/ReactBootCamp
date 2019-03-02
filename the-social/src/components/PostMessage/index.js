import React from "react";
import ProfileImage from "../ProfileImage";
import InputMutiLine from "../InputMultiLine";
import { Row, Col } from "antd";
import "./styles.scss";

function PostMessage({ src, icon, size }) {
  const maxColSpan = 24;
  var sizeCol;
  if (size % 2 != 0) {
    sizeCol = size + 1;
  }
  const secondColSpan = maxColSpan - sizeCol;

  return (
    <div className="postMessage">
      <Row>
        <Col span={sizeCol}>
          <ProfileImage src={src} icon={icon} size={size} />
        </Col>
        <Col span={secondColSpan} className="col">
          <InputMutiLine />
        </Col>
      </Row>
    </div>
  );
}

export default PostMessage;
