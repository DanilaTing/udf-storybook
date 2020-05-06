import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_FormFieldLabel = udfComponents.A_FormFieldLabel;

export default {
  title: "Atoms/A_FormFieldLabel",
  component: A_FormFieldLabel
};

export const Initial = () => <A_FormFieldLabel text="A_FormFieldLabel" />;
export const TwoLines = () => (
  <A_FormFieldLabel text="A_FormFieldLabel with two lines is also good believe me" />
);
