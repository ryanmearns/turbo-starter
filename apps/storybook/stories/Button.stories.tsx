import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

import { Button } from "ui";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "outline"],
      control: { type: "select" },
    },
    // loading: {
    //   options: [true, false],
    //   control: { type: "boolean" },
    // },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  variant: "primary",
  children: "Button Text",
  size: "xs",
};

export const IconLeading = Template.bind({});
IconLeading.args = {
  color: "secondary",
  IconLeading: EnvelopeIcon,
  children: "Button Text",
  size: "xs",
};

export const IconTrailing = Template.bind({});
IconTrailing.args = {
  color: "secondary",
  IconTrailing: EnvelopeIcon,
  children: "Button Text",
  size: "xs",
};
