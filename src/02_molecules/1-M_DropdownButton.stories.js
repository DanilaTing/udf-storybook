import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let M_DropdownButton = udfComponents.M_DropdownButton;

export default {
  title: "Molecules/M_DropdownButton",
  component: M_DropdownButton
};

const propsText = {
  options: [
    {
      name: "Option one",
      value: 1,
      callback: ""
    },
    {
      name: "Option two",
      value: 2,
      callback: ""
    },
    {
      name: "Option three",
      value: 3,
      callback: ""
    }
  ],
  text: "Button Text",
  buttonType: "text"
};

const propsButton = {
  options: [
    {
      name: "Option one",
      value: 1,
      callback: ""
    },
    {
      name: "Option two",
      value: 2,
      callback: ""
    },
    {
      name: "Option three",
      value: 3,
      callback: ""
    }
  ],
  text: "Button Text",
  buttonType: "button"
};

export const Text = () => <M_DropdownButton {...propsText} />;
export const Button = () => <M_DropdownButton {...propsButton} />;
