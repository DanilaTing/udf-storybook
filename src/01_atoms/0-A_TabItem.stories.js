import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_TabItem = udfComponents.A_TabItem;

export default {
  title: "Atoms/A_TabItem",
  component: A_TabItem
};

export const Initial = () => <A_TabItem />;
export const Active = () => <A_TabItem active={true} />;
