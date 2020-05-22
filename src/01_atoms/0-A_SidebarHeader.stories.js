import React from "react";
import { action } from "@storybook/addon-actions";
import { udfComponents } from "udf-library";
let A_SidebarHeader = udfComponents.A_SidebarHeader;

export default {
  title: "Atoms/A_SidebarHeader",
  component: A_SidebarHeader
};

let propsInitial = {
  text: "Sidebar header"
};

export const Initial = () => <A_SidebarHeader {...propsInitial} />;
