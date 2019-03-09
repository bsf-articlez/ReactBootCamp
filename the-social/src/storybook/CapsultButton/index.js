import React from "react";
import { storiesOf } from "@storybook/react";
import CapsultButton from "components/CapsultButton";
import { Icon } from "antd";

storiesOf("Capsult Button", module)
  .add("withLabel", () => <CapsultButton label="Hello Label" />)
  .add("withIcon", () => (
    <CapsultButton label="Hello Button" icon={<Icon type="user" />} />
  ));
