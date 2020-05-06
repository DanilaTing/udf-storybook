import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_BorderButton = udfComponents.A_BorderButton;

export default {
  title: "Atoms/A_BorderButton",
  component: A_BorderButton
};

export const Initial = () => <A_BorderButton />;
export const Disabled = () => <A_BorderButton disabled={true} />;
export const Icon = () => <A_BorderButton icon="Q_IconSmile" />;
