import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_TextInput = udfComponents.A_TextInput;

export default {
  title: "Atoms/A_TextInput",
  component: A_TextInput
};

export const Empty = () => <A_TextInput placeholder="Placeholder" />;
export const Filled = () => (
  <A_TextInput placeholder="A_TextInput" text="Filled A_TextInput" />
);
export const Overfilled = () => (
  <A_TextInput
    placeholder="A_TextInput"
    text="Overfilled A_TextInput Overfilled A_TextInput Overfilled A_TextInput"
  />
);
