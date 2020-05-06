import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_Tooltip = udfComponents.A_Tooltip;

export default {
  title: "Atoms/A_Tooltip",
  component: A_Tooltip
};

export const TopCenter = () => (
  <A_Tooltip text="Tooltip text" position="top_center" />
);

export const TopLeft = () => (
  <A_Tooltip text="Tooltip text" position="top_left" />
);

export const TopRight = () => (
  <A_Tooltip text="Tooltip text" position="top_right" />
);
