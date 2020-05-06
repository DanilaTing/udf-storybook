import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_TextArea = udfComponents.A_TextArea;

export default {
  title: "Atoms/A_TextArea",
  component: A_TextArea
};

export const Empty = () => <A_TextArea placeholder="Placeholder" />;
export const Filled = () => (
  <A_TextArea placeholder="A_TextArea" text="Filled A_TextArea" />
);
export const Overfilled = () => (
  <A_TextArea
    placeholder="A_TextArea"
    text="Overfilled A_TextArea Overfilled A_TextArea Overfilled A_TextArea Overfilled A_TextArea Overfilled A_TextArea Overfilled A_TextArea Overfilled A_TextArea Overfilled A_TextArea Overfilled A_TextArea"
  />
);
