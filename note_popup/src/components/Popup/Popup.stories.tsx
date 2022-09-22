import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Popup } from "./Popup";

export default {
  title: "Popup",
  component: Popup,
  argTypes: {},
} as ComponentMeta<typeof Popup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// FIXME: this is broken due to chrome api.
const Template: ComponentStory<typeof Popup> = (args) => (
  <div
    style={{
      width: "800px",
      height: "600px",
      border: "1px solid black",
      overflow: "scroll",
    }}
  >
    <Popup {...args} />
  </div>
);

export const Primary = Template.bind({});
