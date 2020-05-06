import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let M_SelectField = udfComponents.M_SelectField;

export default {
  title: "Molecules/M_SelectField",
  component: M_SelectField
};

const options = [
  {
    name: "Option one",
    value: 1
  },
  {
    name: "Option two",
    value: 2
  },
  {
    name: "Option three",
    value: 3
  },
  {
    name: "Option four",
    value: 4
  },
  {
    name: "Option five",
    value: 5
  },
  {
    name: "Option six",
    value: 6
  }
];

const currentOption = {
  name: "Option one",
  value: 1
};

export const Empty = () => (
  <M_SelectField options={options} placeholder="Select an option" />
);

export const Filled = () => (
  <M_SelectField
    options={options}
    currentOption={currentOption}
    placeholder="Select an option"
  />
);
