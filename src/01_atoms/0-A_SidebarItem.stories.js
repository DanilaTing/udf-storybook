import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_SidebarItem = udfComponents.A_SidebarItem;

export default {
  title: "Atoms/A_SidebarItem",
  component: A_SidebarItem
};

let propsInitial = {
  text: "Sidebar item",
  selected: false,
  level: "level1"
};

let propsSelected = {
  text: "Sidebar item",
  selected: true,
  level: "level1"
};

let propsLevel2 = {
  text: "Sidebar item",
  selected: false,
  level: "level2"
};

export const Initial = () => <A_SidebarItem {...propsInitial} />;
export const Selected = () => <A_SidebarItem {...propsSelected} />;
export const Level2 = () => <A_SidebarItem {...propsLevel2} />;
