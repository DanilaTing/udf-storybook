import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_SidebarGroupHeader = udfComponents.A_SidebarGroupHeader;

export default {
  title: "Atoms/A_SidebarGroupHeader",
  component: A_SidebarGroupHeader
};

let propsInitial = {
  text: "Sidebar group header",
  open: false,
  level: "level1"
};

let propsOpen = {
  text: "Sidebar group header",
  open: true,
  level: "level1"
};

let propsLevel2 = {
  text: "Sidebar group header",
  open: false,
  level: "level2"
};

export const Initial = () => <A_SidebarGroupHeader {...propsInitial} />;
export const Open = () => <A_SidebarGroupHeader {...propsOpen} />;
export const Level2 = () => <A_SidebarGroupHeader {...propsLevel2} />;
