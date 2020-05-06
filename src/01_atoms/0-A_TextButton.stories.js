import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_TextButton = udfComponents.A_TextButton;

export default {
  title: "Atoms/A_TextButton",
  component: A_TextButton
};

export const Initial = () => <A_TextButton />;
export const Disabled = () => <A_TextButton disabled={true} />;
export const Icon = () => <A_TextButton icon="Q_IconSmile" />;
