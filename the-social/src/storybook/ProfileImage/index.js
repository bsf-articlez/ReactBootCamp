import React from "react";
import { storiesOf } from "@storybook/react";
import ProfileImage from "components/ProfileImage";

storiesOf("Profile Image", module).add("with no image", () => <ProfileImage />);
