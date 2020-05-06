import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_Button = udfComponents.A_Button;

export default {
  title: "Atoms/A_Button",
  component: A_Button
};

export const Initial = () => <A_Button />;
export const Disabled = () => <A_Button disabled={true} />;
export const Icon = () => <A_Button icon="Q_IconSmile" />;
