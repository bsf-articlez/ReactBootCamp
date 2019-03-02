import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileImage from "components/ProfileImage";
import InputMultiLine from "components/InputMultiLine";
const src =
  "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1";
storiesOf("Profile Image", module)
  .add("with no image", () => <ProfileImage />)
  .add("with image", () => <ProfileImage src={src} icon="true" />);
