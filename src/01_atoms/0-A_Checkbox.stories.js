import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_Checkbox = udfComponents.A_Checkbox;

export default {
  title: "Atoms/A_Checkbox",
  component: A_Checkbox
};

export const Initial = () => <A_Checkbox value="1" />;
export const Checked = () => <A_Checkbox checked={true} />;
