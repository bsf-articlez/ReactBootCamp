import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import CheckBox from "../../components/CheckBox";
import { Icon } from "antd";
import ProfileImage from "../../components/ProfileImage";

function CheckBoxPlayGround() {
  const [checked, setCheck] = useState(false);
  const onChange = function() {
    setCheck(!checked);
  };
  return (
    <CheckBox
      name="something"
      checked={checked}
      onChange={onChange}
      icon={<Icon type="user" />}
      label="Hello Icon"
    />
  );
}

storiesOf("CheckBox", module)
  .add("with label", () => <CheckBox label="hello" />)
  .add("with prefix label", () => (
    <CheckBox icon={<Icon type="user" />} label="Hello Icon" />
  ))
  .add("with prefix profile image", () => (
    <CheckBox
      icon={<ProfileImage size="x2" icon={<icon type="plus" />} />}
      label="Apisek"
    />
  ))
  .add("play ground", () => <CheckBoxPlayGround />);
