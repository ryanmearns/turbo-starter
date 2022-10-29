import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Trash2 } from "react-feather";

import { Button } from "ui";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "secondary", "minimal", "destructive"],
      control: { type: "select" },
    },
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
    loading: {
      options: [true, false],
      control: { type: "boolean" },
    },
    size: {
      options: ["base", "lg", "icon"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button />;

export const All = () => (
  <div>
    <Button />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  children: "Button Text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};
export const Icon = Template.bind({});
Icon.args = {
  color: "secondary",
  StartIcon: Trash2,
  size: "icon",
};
