import React from "react";
import { storiesOf } from "@storybook/react";
import Segment from "components/Segment";
import PostMessage from "components/PostMessage";

const src =
  "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1";

storiesOf("Segment", module)
  .add("with title", () => <Segment title="My Segment" />)
  .add("with content", () => (
    <Segment title="สร้างโพสต์" content={<PostMessage src={src} />} />
  ));
