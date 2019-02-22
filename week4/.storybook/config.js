import { configure } from "@storybook/react";

function loadMyStories() {
  require("../stories/index.js");
  // You can require as many stories as you need.
}

configure(loadMyStories, module);
