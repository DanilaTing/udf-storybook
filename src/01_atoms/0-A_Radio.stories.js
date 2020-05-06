import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_Radio = udfComponents.A_Radio;

export default {
  title: "Atoms/A_Radio",
  component: A_Radio
};

export const Initial = () => <A_Radio />;
export const Checked = () => <A_Radio selected={true} />;
