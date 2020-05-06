import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_DropdownOption = udfComponents.A_DropdownOption;

export default {
  title: "Atoms/A_DropdownOption",
  component: A_DropdownOption
};

const option = {
  name: "A_DropdownOption",
  value: 1
};
export const Initial = () => <A_DropdownOption option={option} />;
export const selected = () => (
  <A_DropdownOption selected={true} option={option} />
);
