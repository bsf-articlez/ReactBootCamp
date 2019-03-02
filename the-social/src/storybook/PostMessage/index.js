import React from "react";
import { storiesOf } from "@storybook/react";
import PostMessage from "components/PostMessage";

storiesOf("Post Message", module).add(
  "with profile-image and input-multiline",
  () => <PostMessage icon={false} size="3" />
);
